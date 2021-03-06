import React, { useEffect, useState, useRef } from "react"

const ColumnFilter = ({ columns, hidden, handleHidden }) => {

    const node = useRef()

    const [open, setOpen] = useState(false)

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return
        }
        // outside click
        setOpen(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClick)

        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div ref={node} className="column-filter">
            <button className="button button__secondary" onClick={() => setOpen(!open)}>Show/Hide</button>
            {open && (
                <div className="column-filter__list">
                    {columns.map((col, index) =>
                        <div key={index} className="column-filter__item">
                            <input type="checkbox" defaultChecked={!hidden.includes(index)} onChange={(e) => handleHidden(e, index)} />
                            <div>{col}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default ColumnFilter

