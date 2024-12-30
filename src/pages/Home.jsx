import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

  return (
    <div>
        <button onClick={() => navigate('/reports')}>Reports</button>
        <br></br>
        <button onClick={() => navigate('/blogs')}>Blogs</button>
        <br></br>
        <button onClick={() => navigate('/articles')}>Articles</button>
    </div>
  )
}

export default Home