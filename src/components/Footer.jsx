import React from 'react'
import './Footer.scss'
import { EnvelopeSimple, LinkedinLogo } from '@phosphor-icons/react'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <h2>_get_in_touch</h2>
      <div className='contact-methods'>
        <div className='contact-method'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </div>
        <div className='contact-method'>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default Footer