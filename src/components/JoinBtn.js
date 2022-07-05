import React from 'react'
import { Link } from 'react-router-dom'

function JoinBtn() {
  return (
    <div>
       <Link to="signup"><button className='border-2 px-6 py-3 border-red-500 bg-pink-500 text-white font-bold hover:text-pink-600 hover:bg-transparent hover:border-pink-500 transition-all ease-in-out duration-1000 rounded-md'> Join Now </button></Link>
    </div>
  )
}

export default JoinBtn
