import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RowPost from '../components/RowPost'

function Account({user}) {
  const [userPosts, setUserPosts] = useState([])
  useEffect(()=>{
    console.log(localStorage.getItem('hash'))
    console.log(user)
    fetch('https://elanlar.im/app/item.php?mod=list').then(a=>a.json()).then(a=>setUserPosts(a.filter(post=> post.user == user.number)))
  }, [])
  console.log(sessionStorage.getItem('slm'))

  console.log(userPosts);
  return (
    <section className="account-wrapper">
      <div className="container">
        <div className="posts">
          <h1>Elanlar</h1>
          <div className="posts-cont">
            {userPosts.map(x=> <RowPost post={x} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
const t = a => a
export default connect(t)(Account)