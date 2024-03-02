import React, { useEffect, useState } from 'react'
import './NumberLine.scss'

const NumberLine = ({ cName, start, end, lineHeight }) => {

  if (start > end) return null;

  const [nums, setNums] = useState([]);

  useEffect(() => {
    const newNums = [];
    for (let i = start; i <= end; i++) {
      newNums.push(i);
    }

    setNums(newNums);
  }, [start, end])


  return (
    <ul className={`${cName} numberline indices`}>
      {
        nums.map(num => 
          <li key={num}
          
           style={
            {
              lineHeight: lineHeight? lineHeight: 'initial'
            }
          }
           >{num}</li>
        )
      }
    </ul>
  )
}

export default NumberLine