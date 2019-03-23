import React, { useEffect, useState, useRef } from "react"

const Cell = ({ value }) => {

    const [edit, setEdit] = useState(false)

    const node = useRef()

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return
        }
        // outside click
        setEdit(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div ref={node} onClick={() => setEdit(true)}>
            {edit ? <input className="text-input" type="text"></input> : value}
        </div>
    )
}

export default Cell
