import React, { useRef, useState } from 'react'

export default function Ref() {
    const mytext = useRef(); 
    const [list, setList] = useState(["aa", "bb", "cc"]);

    const handleAdd = () => {
        setList([...list, mytext.current.value]);
        mytext.current.value = '';
    }

    const handleDelate = (index) => {
        let newList = [...list];
        newList.splice(index, 1);
        setList([...newList]);
    }
    return (
        <div>
            <input ref={mytext}/>
            <button onClick={handleAdd}>add</button>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={item}>{item} <button onClick={(index) => { handleDelate(index) }}>DEL</button></li>
                    })
                }
            </ul>
            {!list.length && <div>暂无待办事项</div>}
        </div>
    )
}
