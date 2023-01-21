import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Account from './pages/Account'
import Details from './pages/Details'
import Home from './pages/Home'
import PlaceAdd from './pages/PlaceAdd'

function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/place-add' element={<PlaceAdd/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes> 
      <br />
      <Footer/>
    </>
  )
}

export default App