import React, { useState } from 'react'
import styled from 'styled-components'
import GenerateImageForm from '../component/GenerateImageForm'
import GeneratedImageCard from '../component/GeneratedImageCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  background: {({ theme }) => theme.bg};
  overflow-y: scroll;
  padding: 30px 30px;
  padding-bottom: 50px;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false)
  const [creatPostLoading, setCreatPostLoading] = useState(false)
  const [post, setPost] = useState({
    name: '',
    prompt: '',
    photo: ''
  })

  return (
    <Container>
      <Wrapper>
        <GenerateImageForm
          post={post}
          setPost={setPost}
          creatPostLoading={creatPostLoading}
          setCreatPostLoading={setCreatPostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading}
        />
        <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
      </Wrapper>
    </Container>
  )
}

export default CreatePost
