import styled from 'styled-components'
import Button from './button'
import TextInput from './TextInput'
import { AutoAwesome, CreateRounded } from '@mui/icons-material'

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const Title = styled.div`
  font-size: 28px
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`

const Descr = styled.div`
  font-size: 27px
  font-weight: 400;
  color: ${({ theme }) => theme.secondary};`

const Body = styled.div`
display: flex;
flex-direction: column;
gap: 18px;
font-size: 12px
font-weight: 400;
color: ${({ theme }) => theme.secondary};`

const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`

const GenerateImageForm = ({
  post,
  setPost,
  creatPostLoading,
  setcreatPostLoading,
  generateImagineLoading,
  setgenerateImagineLoading
}) => {
  const generateImageFunc = () => {
    setgenerateImagineLoading(true)
  }

  const createPostFunc = () => {
    setcreatPostLoading(true)
  }
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Descr>Write your prompt according to the image you want to generate</Descr>
      </Top>
      <Body>
        <TextInput
          label="Author"
          placeholder="Enter your name. ."
          name="name"
          value={post?.name}
          handelChange={(e) => setPost({ ...post, name: e.target.value })}
        />
        <TextInput
          label="Image Prompt"
          placeholder="Write a detailed prompt about the image. ."
          name="name"
          rows="8"
          textArea
          value={post?.prompt}
          handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        ** You can post the AI Generation Image to the Community **
      </Body>
      <Actions>
        <Button
          text="Generate image"
          flex
          leftIcon={<AutoAwesome />}
          isLoading={generateImagineLoading}
          isDisabled={post.prompt === ''}
          onClick={() => generateImageFunc()}
        />
        <Button
          text="Post image"
          type={'secondary'}
          flex
          leftIcon={<CreateRounded />}
          isLoading={creatPostLoading}
          isDisabled={post.name === '' || post.prompt === '' || post.photo === ''}
          onClick={() => createPostFunc()}
        />
      </Actions>
    </Form>
  )
}

export default GenerateImageForm
