import React from 'react'
import './ContactMethod.scss'

const ContactMethod = ({ name, username, link }) => {
  return (
    <div className='contact-method-container'>
      <p className='name'>{`//${name}`}</p>
      <p>{username}</p>
      <div className='container'>
        <p className={`${link ? 'default' : ''} name`}>{`//${name}`}</p>
        {
          link && (

            <div className='onHover'>
              <a className='link' href={link} target='_blank'>
                Open Link
              </a>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ContactMethod