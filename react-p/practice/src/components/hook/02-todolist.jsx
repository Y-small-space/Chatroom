import React, { useState } from 'react'

export default function ToDO() {
    const [text, setText] = useState("");
    const [list, setList] = useState(["aa", "bb", "cc"]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAdd = () => {
        setList([...list, text]);
        setText("");
    }

    const handleDelate = (index) => {
        let newList = [...list];
        newList.splice(index, 1);
        setList([...newList]);
    }
    return (
        <div>
            <input onChange={handleChange} value={text} />
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
