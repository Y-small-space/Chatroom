import React, { useEffect, useState } from 'react'

export default function List() {
    const [name, setName] = useState("kei");

    useEffect(() => {
        setName(name.substring(0, 1).toLocaleUpperCase() + name.substring(1))
    }, [name])
    return (
        <div>
            app-{name}
            <button onClick={() => {
                setName("xaioming");
            }}>
                click
            </button>
        </div>
    )
}
