import styled from 'styled-components'
import SearchBar from '../component/SearchBar'
import ImageCard from '../component/ImageCard'
import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material'
import { GetPosts } from '../api/index.js'

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

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`

const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`
const Span = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};

  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0;
  display: flex;
  justify-content: center;
`

const CardWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 640px) (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([])

  const getPosts = async () => {
    try {
      setLoading(true)
      const res = await GetPosts()
      setPosts(res?.data?.data)
      setFilteredPosts(res?.data?.data)
    } catch (error) {
      setError(error?.response?.data?.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])

  //search

  useEffect(() => {
    if (!search) {
      setFilteredPosts(posts)
    }

    const searchFilteredPosts = posts.filter((post) => {
      const promtMatch = post?.prompt?.toLowerCase().includes(search.toLocaleLowerCase())
      const authorMatch = post?.name?.toLowerCase().includes(search.toLocaleLowerCase())

      return promtMatch || authorMatch
    })

    setFilteredPosts(searchFilteredPosts)
  }, [posts, search])

  return (
    <Container>
      <HeadLine>
        Explore popular post in the Community!
        <Span>◉ Generated with AI ◉</Span>
      </HeadLine>
      <SearchBar search={search} setSearch={setSearch} />

      <Wrapper>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            {filteredPosts && filteredPosts.length > 0 ? (
              <CardWrapper>
                {filteredPosts
                  .slice()
                  .reverse()
                  .map((item, index) => item && <ImageCard key={index} item={item} />)}
              </CardWrapper>
            ) : (
              <>No Posts Found</>
            )}
          </>
        )}
      </Wrapper>
    </Container>
  )
}

export default Home
