import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='homepage'>
        <div className='inner-homepage'>
        <h1>CreateX</h1>
        <h2>The fastest way to take your resume to the next level </h2>
        <Link to = "/personal_details"> <div className='btn btn-primary'>Create A Resume Now</div> </Link>
        </div>
    </div>
  )
}

export default Home