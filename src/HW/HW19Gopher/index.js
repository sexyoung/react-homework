import React, { useState } from 'react';
import Gopher from './Gopher';

export default function HW19Gopher() {

  const [ score, setScore ] = useState(0);

  const handleChange = (point) => {
    setScore(score => score + point );
  }
  return (
    <div className="container">
      <div className="text-center mx-auto mt-4" style={{width: "18rem"}}>
        <h1>{score}</h1>
        <div>
          <Gopher updateScroe={handleChange} />
          <Gopher updateScroe={handleChange} />
          <Gopher updateScroe={handleChange} />
        </div>
        <div>
          <Gopher updateScroe={handleChange} />
          <Gopher updateScroe={handleChange} />
          <Gopher updateScroe={handleChange} />
        </div>
        <div>
          <Gopher updateScroe={handleChange} />
          <Gopher updateScroe={handleChange} />
          <Gopher updateScroe={handleChange} />
        </div>
        <div className="card-body">
          點擊G得1分，點擊減號扣分
        </div>
      </div>
    </div>
  )
}
