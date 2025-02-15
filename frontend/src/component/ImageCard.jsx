import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Avatar } from '@mui/material'
import { DownloadRounded } from '@mui/icons-material'
import FileSaver from 'file-saver'

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
    scale: 1.05;
  }

  &:nth-child(7n + 1) {
    grid-column: auto / span 2;
    grid-row: auto / span 2;
  }
`

const HoverOverlay = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  transition: all 0.3s ease;
  border-radius: 6px;
  justify-content: end;
  padding: 12px;

  ${Card}:hover & {
    opacity: 1;
  }
`

const Promt = styled.div`
  font-weight: 400px;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
  display: flex;
  alingn-items: center;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const ImageCard = ({ item }) => {
  console.log('Image data:', item)
  if (!item || !item.photo) {
    return null
  }
  return (
    <Card>
      <LazyLoadImage
        style={{ borderRadius: '12px', width: '100%', height: '100%', objectFit: 'cover' }}
        alt={item?.prompt || 'AI Generated Image'}
        src={item?.photo}
        effect="opacity"
        placeholder={
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#1a1a1a'
            }}
          />
        }
      />
      <HoverOverlay>
        <Promt>{item.promt}</Promt>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Author>
            <Avatar sx={{ width: '32px', height: '32px' }}>{item?.name[0]}</Avatar>
            {item?.name}
          </Author>
          <DownloadRounded onClick={() => FileSaver.saveAs(item?.photo, 'donwload.jpg')} />
        </div>
      </HoverOverlay>
    </Card>
  )
}

export default ImageCard
