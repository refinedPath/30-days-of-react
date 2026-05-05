import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState(null)

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if( !response.ok ) {
          throw new Error(`HTTP status code ${response.status}`)
        }

        const payload = await response.json()
        setPosts(payload)
      } catch(err) {
        setErrorState(err.message)
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    getPosts()
  }, [])

  return (
    <>
    {
      isLoading && `Loading...`
    }
    {
      errorState === null && !isLoading ?
        `Loaded ${posts.length} posts` :
        errorState
    }
    </>
  )
}

export default App