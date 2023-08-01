import React, { useState } from 'react'

export default function US () {
  const [name,setName] = useState('xiaoming');

  const handleClick = ()=>{
    setName('xiaobai');
  }
   
  return(
    <div>
        <button
        onClick={handleClick}
        >
            click
        </button>
        App-{name}
    </div>
  )
}
