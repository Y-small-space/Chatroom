import React, { useCallback, useState } from 'react'

export default function Callback() {
    const [text, setText] = useState("");
    const [list, setList] = useState(["aa", "bb", "cc"]);

    const handleChange = useCallback(
        (e) => {
            setText(e.target.value);
        },
        []
    )

    const handleAdd = useCallback(
        () => {
            setList([...list, text]);
            setText("");
        },
        [text,list]
    )

    const handleDelate = useCallback(
        (index) => {
            let newList = [...list];
            newList.splice(index, 1);
            setList([...newList]);
        },
        [list]
    )
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
