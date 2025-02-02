import * as dotenv from 'dotenv'
import { createError } from '../error.js'
import { Runware } from '@runware/sdk-js'

dotenv.config()

const runware = new Runware({ apiKey: process.env.RUNWARE_API_KEY || '' })

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body

    if (!process.env.RUNWARE_API_KEY) {
      throw new Error('API key not configured')
    }

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required for image generation'
      })
    }

    await runware.ensureConnection()

    const images = await runware.requestImages({
      positivePrompt: prompt,
      width: 1024,
      height: 1024,
      model: 'runware:100@1',
      numberResults: 1,
      outputType: 'URL',
      outputFormat: 'JPG',
      steps: 4,
      scheduler: 'FlowMatchEulerDiscreteScheduler',
      CFGScale: 1
    })

    return res.status(200).json({
      success: true,
      data: {
        photo: images[0].imageURL,
        prompt: images[0].positivePrompt
      }
    })
  } catch (error) {
    console.log('API Error:', error)
    next(createError(500, 'Failed to generate image. Check API credentials and endpoint.'))
  }
}
