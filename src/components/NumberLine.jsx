import React, { useEffect, useState } from 'react'
import './NumberLine.scss'

const NumberLine = ({ start, end }) => {

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
    <ul className='numberline indices'>
      {
        nums.map(num =>
          <li>{num}</li>
        )
      }
    </ul>
  )
}

export default NumberLine