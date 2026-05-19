import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('/api/health')
      .then(res => setMessage(res.data.status))
      .catch(() => setMessage('Backend not connected'))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ZZZ Fullstack App</h1>
      <p>Backend Status: {message}</p>
    </div>
  )
}

export default Home
