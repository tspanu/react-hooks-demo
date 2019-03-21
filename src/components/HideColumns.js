import React, { useState } from 'react'

const Columns = ({ columns, rows, onCheck }) => {

    const [hidden, setHidden] = useState([])

    const handleChecked = (index) => {

        const visibleColumns = columns.filter((col, i) => i !== index)
        const visibleRows = rows.map((row) => row.filter((value, i) => i !== index))

        onCheck(visibleColumns, visibleRows)

        if (hidden.includes(index)) {
            setHidden(hidden.filter(i => i !== index))
        } else {
            setHidden(hidden.concat(index))
        }

    }

    return (
        <div className="columns">
            <label>Show</label>
            {columns.map((col, index) =>
                <div key={index} className="columns__item">
                    <input type="checkbox" name="column" onClick={() => handleChecked(index)} defaultChecked />
                    <div>{col}</div>
                    <button>Edit</button>
                    <button>Remove</button>
                </div>
            )}
            <button>Add Column</button>
        </div>
    )
}

export default Columns

