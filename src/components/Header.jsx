import React from 'react'
import Navbar from './Navbar'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className='top-ribbon'>
        <div className='pink'></div>
        <div className='brownish'></div>
        <div className='green'></div>
        <h1 className='name'>akash_jangra</h1>
      </div>
      <Navbar />
    </div>
  )
}

export default Header