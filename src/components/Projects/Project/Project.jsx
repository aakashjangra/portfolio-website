import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Project.scss'

const Project = ({ projectName, imgURL, description, gitHubURL, liveURL, skills }) => {
  return (
    <div className='project'>
      <h3 className='title'>{projectName}</h3>
      <div className='image-and-skills'>
        <img className='preview-image' src={imgURL} alt="project preview image" />
        <div className="skills">
          {
            skills.map(skill => 
              <div className='skill'>{skill}</div>
            )
          }
        </div>
      </div>
      <p className='description'>{description}</p>
      {
        liveURL && (
          <div className='link'>
            <FontAwesomeIcon icon={faArrowTrendUp} />
            <a href={liveURL} target='_blank'>
              {liveURL}
            </a>
          </div>
        )
      }
      {
        gitHubURL && (
          <div className='link'>
            <FontAwesomeIcon icon={faGithub} />
            <a href={gitHubURL} target='_blank'>
              {gitHubURL}
            </a>
          </div>
        )
      }
    </div>
  )
}

export default Project