import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import PostRouter from './routes/Posts.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb', extended: true }))
app.use(express.urlencoded({ extended: true }))

//error
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong!'
  return res.status(status).json({
    success: false,
    status,
    message
  })
})

app.use('/api/post', PostRouter)

//default get
app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello!'
  })
})

//function to conect to mongoDB
const connectDB = async () => {
  mongoose.set('strictQuery', true)

  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to MongoDB successfully')
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message)
    process.exit(1)
  }
}

//function to start server
const startServer = async () => {
  try {
    connectDB()
    app.listen(8080, () => console.log('Server started on port 8080'))
  } catch (error) {
    console.log(error)
  }
}

startServer()
