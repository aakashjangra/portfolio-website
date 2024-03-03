import React, { useState } from 'react'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import Skill from './Skill/Skill'

const Skills = () => {
  const [showHardSkills, setShowHardSkills] = useState(true); //by default open

  const HARD_SKILLS = [
    {
      name: 'ReactJS',
      level: 7
    },
    {
      name: 'Redux',
      level: 5
    },
    {
      name: 'Tailwind CSS',
      level: 9
    },
    {
      name: 'NodeJS',
      level: 7
    },
    {
      name: 'MongoDB',
      level: 6
    },
    {
      name: 'MySQL',
      level: 5
    },
  ]

  return (
    <div className='skills-page main-content'>
      <div className='sidebar'>
        <div className='particular-skills hard-skills'>
          <div className='heading hard-skills-heading' onClick={() => { setShowHardSkills(!showHardSkills) }} >
            <div className='icon-container'>

              {
                showHardSkills ? (
                  <FontAwesomeIcon icon={faChevronDown} />
                ) : (
                  <FontAwesomeIcon icon={faChevronRight} />
                )
              }
            </div>

            <h3>
              <FontAwesomeIcon icon={faFile} />
              hard_skills</h3>
          </div>
          {
            showHardSkills && (
              <ul>
                {
                  HARD_SKILLS.map(skill =>
                    <li key={skill}><FontAwesomeIcon icon={faFile} />{skill.name}</li>
                  )
                }
              </ul>
            )
          }

        </div>
      </div>
      {
        showHardSkills && (
          <div className='skills-container'>
              {
                showHardSkills && (
                  HARD_SKILLS.map(skill =>
                    <Skill skill={skill.name} outOfTen={skill.level} />
                  )
                )
              }
          </div>
        )
      }

      {
        !showHardSkills && (
          <div className="note-container">
            <p className='note'>Select a category of skills to view</p>
          </div>
        )
      }
    </div>
  )
}

export default Skills