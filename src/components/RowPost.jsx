import React from 'react'
import { Link } from 'react-router-dom'

function RowPost({post}) {
  return (
    <div className="post">
      <Link className='post-account' to={'/details'} >
      <h2>{post.title?post.title:'Unnamed'}</h2>
      <div className="btns">
        <button>Etrafli</button>
      </div>

    </Link>
    </div>
  )
}

export default RowPost