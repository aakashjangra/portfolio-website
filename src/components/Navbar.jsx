import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentPage(path);
  }, [])

  return (
    <ul className='navbar'>
      <li
        className={`${currentPage === '/' ? 'active' : ''}`}
        onClick={() => {
          setCurrentPage('/');
          navigate('/');
        }}
      >
        _hello
      </li>
      <li
        className={`${currentPage === '/about' ? 'active' : ''}`}
        onClick={() => {
          setCurrentPage('/about');
          navigate('/about')
        }}>_about_me</li>
      <li
        className={`${currentPage === '/skills' ? 'active' : ''}`}
        onClick={() => {
          setCurrentPage('/skills'); navigate('/skills')
        }}
      >
        _skills
      </li>
      <li
        className={`${currentPage === '/projects' ? 'active' : ''}`}
        onClick={() => {
          setCurrentPage('/projects'); navigate('/projects')
        }}
      >
        _projects
      </li>
      <li
        className={`${currentPage === '/contacts' ? 'active' : ''}`}
        onClick={() => {
          setCurrentPage('/contacts'); navigate('/contacts')
        }}
      >
        _contacts
      </li>
    </ul>
  )
}

export default Navbar