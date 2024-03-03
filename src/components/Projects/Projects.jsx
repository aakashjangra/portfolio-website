import React from 'react'
import './Projects.scss'
import Project from './Project/Project'
import { ThermometerSimple } from '@phosphor-icons/react'

const Projects = () => {
  const PROJECTS = [
    {
      name: 'op-resume-builder',
      imgURL: '/preview-op-resume-builder.png',
      description: 'User-friendly, easy-to-use one page resume builder.',
      skills: ['ReactJS', 'Redux', 'TailwindCSS'],
      gitHubURL: 'https://github.com/Sweet-Combat/op-resume-builder',
      liveURL: 'https://op-resume-builder.netlify.app/'
    }, {
      name: 'GymTools',
      imgURL: '/preview-gymtools.png',
      description: 'GymTools is an e-commerce website.',
      skills: ['NextJS', 'Redux', 'firebase'],
      gitHubURL: 'https://github.com/aakashjangra/GymTools',
      liveURL: 'https://gymtools.vercel.app/'
    },
    // {
    //   name: 'GymTools (extended)',
    //   imgURL: '/preview-gymtools.png',
    //   description: 'GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an eis an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce -commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.GymTools is an e-commerce website.',
    //   skills: ['NextJS', 'Redux', 'firebase', 'NextJS', 'Redux', 'firebase'],
    //   gitHubURL: 'https://github.com/aakashjangra/GymTools',
    //   liveURL: 'https://gymtools.vercel.app/'
    // },
  ]

  return (
    <div className='projects main-content'>
      <div className='header'>
        <h2 className='title'>
          {'//TOP PROJECTS'}
        </h2>
        <p className='note hide-medium'>{'Swipe for more 👉'}</p>
        <p className='note show-medium'>{'Swipe down for more 👇'}</p>
      </div>
      <div className="projects-container">
        {
          PROJECTS.map(project =>
            <Project
              key={project.name}
              projectName={project.name}
              imgURL={project.imgURL}
              description={project.description}
              skills={project.skills}
              gitHubURL={project.gitHubURL}
              liveURL={project.liveURL}
            />
          )
        }
      </div>
    </div>
  )
}

export default Projects