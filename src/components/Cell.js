import React, { useEffect, useState, useRef } from "react"

import { TrashIcon } from '../assets/icons'

const Cell = ({ value, index, array, hidden, handleEditCell, handleDeleteRow }) => {

    const [edit, setEdit] = useState(false)

    const node = useRef()

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return
        }
        // outside click
        setEdit(false)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleEditCell(e.target.value, index, array)
            setEdit(false)
        }
    }

    return (
        <div className="table-cell" ref={node} onClick={() => setEdit(true)}>
            {edit || value === '' ? <input className="text-input" type="text" defaultValue={value} onKeyDown={handleEnter}></input> : value}
            {hidden.length === 0 && index === array.length - 1 &&
                <div className="table-cell__icons">
                    <button onClick={() => handleDeleteRow(array)}>
                        <TrashIcon className="button__icon" />
                    </button>
                </div>
            }
        </div>
    )
}

export default Cell
