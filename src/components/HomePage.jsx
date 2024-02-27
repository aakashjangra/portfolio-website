import React, { useState } from 'react'
import './Homepage.scss'

const HomePage = () => {
  const [typewriterText, setTypewriterText] = useState('beautify');

  return (
    <div className='homepage main-content'>
      <section className='intro-1'>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
        </ul>
        <div>
          <div>
            <div className='content'>
              <span className='brown'>{'<hello>'}</span>
              <br />
              <span>hello, my name is
                <span className='green'> Akash</span>{'() {'}
              </span>
              <br />
              <span>I am a
                <span className="violet"> Full Stack Web Developer</span>
              </span>
              <br />
              <span>
                I have solved over
                <span className='green'> 700 </span>
                coding problems over different coding platforms
              </span>
              <br />
              <span>{'}'}</span>
            </div>
          </div>
        </div>
      </section>
      <section className='intro-2'>
        <h1 className='name'>
          <span>{'<Akash'}</span>
          <span>{'Jangra>'}</span>
        </h1>
        <p className='help'>{'//I help you'}</p>
        <div className='typewriter-effect'>
          {typewriterText}
        </div>
      </section>
    </div>
  )
}

export default HomePage