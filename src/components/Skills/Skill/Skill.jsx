import React from 'react'
import './Skill.scss'

const Skill = ({skill, outOfTen}) => {
  const level = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  level.fill(1, 0, outOfTen)

  return (
    <div className='single-skill'>
      <h3 className='name'>{skill}</h3>
      <div className='level-bar'>
      {
        level.map(value => 
          <div className={`${value == 1? 'active': ''} indicator`}></div> 
        )
      }
      </div>
    </div>
  )
}

export default Skill