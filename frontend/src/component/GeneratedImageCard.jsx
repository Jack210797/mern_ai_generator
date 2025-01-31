import { CircularProgress } from '@mui/material'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 300px;
  flex: 1;
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 16px;
  flex-direction: column;
  border: 2px dashed ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.arrow + 80};
  border-radius: 20px;
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: ${({ theme }) => theme.black + 50};
`

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress style={{ color: 'inherit', width: '24px', height: '24px' }} />
          Generating Your Image...
        </>
      ) : (
        <>{src ? <Image src={src} /> : <> Write a prompt to generate image</>}</>
      )}
    </Container>
  )
}

export default GeneratedImageCard
