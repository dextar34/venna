import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Whatsapp from '../components/Whatsapp'




const Root = () => {
  return (
    <div className='relative'>
        <Nav/>
      <Outlet/>
      <Whatsapp />
      <Footer/>
    </div>
  )
}

export default Root
