import React from 'react'
import './Contacts.scss'
import ContactMethod from './components/ContactMethod'

const Contacts = () => {
  return (
    <div className='contacts main-content'>
      <h2>{'//get_in_touch'}</h2>
      <p className='pitch'>
        If you have an idea for a website, then I'm waiting for your message.
      </p>
      <div className="contact-methods">
        <ContactMethod />
      </div>
    </div>
  )
}

export default Contacts