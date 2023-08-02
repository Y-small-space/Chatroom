import React, { useRef, useState } from 'react'

export default function Ref() {
    const [count, setcount] = useState(0);
    let mycount = useRef(0);

    return (
        <div>
            <button onClick={()=>{
                setcount(count+1);
                mycount.current++;
            }}> 
            add
            </button>
            {count}-{mycount.current}
        </div>
    )
}
