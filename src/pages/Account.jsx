import React from 'react'
import { Link } from 'react-router-dom'

function Account() {

  return (
    <section className="account-wrapper">
      <div className="container">
        <div className="container-nav">
          <Link>Elanlar</Link>
          <Link>Seçilmişlər</Link>
          <Link>Ödəniş tarixçəsi</Link>
        </div>
      </div>
    </section>
  )
}

export default Account