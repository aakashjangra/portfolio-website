import React, { useState } from 'react'
import './Skills.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronRight, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'
import Skill from './Skill/Skill'

const Skills = () => {
  const [showHardSkills, setShowHardSkills] = useState(false);

  const HARD_SKILLS = [
    {
      name: 'ReactJS', 
      level: 5
    },
    {
      name: 'Redux',
      level: 5
    },
    {
      name: 'Tailwind CSS',
      level: 7
    },
    {
      name: 'NodeJS',
      level: 5
    },
    {
      name: 'MongoDB',
      level: 5
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
          <div className='heading hard-skills-heading' onClick={() => {setShowHardSkills(!showHardSkills)}} >
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
                    <li><FontAwesomeIcon icon={faFile} />{skill.name}</li>
                  )
                }
              </ul>
            )
          }

        </div>
      </div>
      <div className='skills-container'>
        {
          showHardSkills && (
            HARD_SKILLS.map(skill => 
              <Skill skill={skill.name} outOfTen={skill.level} />
            )
          )
        }
      </div>
    </div>
  )
}

export default Skills