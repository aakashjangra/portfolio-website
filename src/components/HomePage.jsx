import React, { useEffect, useState } from 'react'
import './Homepage.scss'

const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const KEY_POINTS = ["QUICKLY", "BEAUTIFULLY", "QUALITATIVELY", "COST EFFECTIVELY"];

  const DELAY = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentCharIndex === KEY_POINTS[currentWordIndex].length) {
          // Complete word typed, start deleting
          setIsDeleting(true);
          clearInterval(interval);
        } else {


          // Typing
          setDisplayText((prevText) => prevText + KEY_POINTS[currentWordIndex][currentCharIndex]
          );
          setCurrentCharIndex((prevIndex) => prevIndex + 1);

        }
      } else {
        // Deleting
        if (displayText === '') {
          clearInterval(interval);
          setIsDeleting(false);
          setCurrentCharIndex(0);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % KEY_POINTS.length); // Move to the next word
        } else {
          setDisplayText((prevText) => prevText.slice(0, -1));
        }
      }
    }, DELAY);

    return () => clearInterval(interval);
  }, [currentCharIndex, currentWordIndex, DELAY, displayText, isDeleting, KEY_POINTS]);

  return (
    <div className='homepage main-content'>
      <section className='intro-1'>
        <ul className='indices'>
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

        <div className='description'>
          <div>
            <div className='content'>
              <span className='brown'>{'<hello>'}</span>
              <br />
              <span>Hello, my name is
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
          {displayText} <span className="blinker">|</span>
        </div>
      </section>
    </div>
  )
}

export default HomePage