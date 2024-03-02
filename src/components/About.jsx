import React from 'react'
import './About.scss'
import NumberLine from './NumberLine'

const About = () => {
  return (
    <section className='about main-content'>
      <img src="/akash_pp.png" alt="akash's image" />
      <div className='container'>
        <NumberLine cName="large-screen" start={41} end={56} lineHeight={1.8} />
        <NumberLine cName="medium-screen" start={41} end={60} lineHeight={1.6} />
        <NumberLine cName="small-screen" start={41} end={62} lineHeight={1.6} />
        <NumberLine cName="v-small-screen" start={41} end={70} lineHeight={1.6} />
        <div className='inner-container'>
          <h3 className='heading'>
            <div className='pink-dot'></div>
            <p>
              {'<about me>'}
            </p>
          </h3>
          <p>
            I am a
            <span className="green"> Software Engineer </span>
            with <span className="pink"> 6 months </span> of internship experience as a Web Developer. I have developed frontend apps using <span className="brown"> ReactJS </span>and <span className="brown"> NextJS</span>. I am constantly learning new technologies and upgrading my skillset.
            <br />
            <br />
            I am transitioning into <span className="green"> full stack </span> website development and currently making projects that require <span className="pink"> both frontend and backend</span>.
            I do give a portion of my day's time solving coding problems using <span className="brown"> DSA</span>. I have solved over <span className="brown"> 700 DSA </span>problems on coding platforms like <a className='pink' title="Akash's leetcode profile" href="https://leetcode.com/skyXsaitama/" target="_blank">leetcode</a> and <a className='pink' title="Akash's gfg profile" href="https://auth.geeksforgeeks.org/user/sky_saitama" target="_blank">gfg</a>.
            <br />
            <br />
            I aspire to be a good software engineer that is jack of all trades and master of one he is working with at the moment.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About