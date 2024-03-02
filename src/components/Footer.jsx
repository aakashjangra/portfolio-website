import React from 'react'
import './Footer.scss'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>_get_in_touch</h2>
      <div className='contact-methods'>
        <div className='contact-method'>
          <a href="https://www.linkedin.com/in/akashjangra1" target='_blank'>

            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <div className='contact-method'>
          <a href="mailto:aj.akashjangra@gmail.com" target='_blank'>

            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer