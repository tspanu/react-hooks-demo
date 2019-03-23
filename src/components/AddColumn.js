import React, { useState } from 'react'

const AddItem = ({ handleAddColumn }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        if (value.length > 0) {
            handleAddColumn(value)
        }
        setValue('')
        e.preventDefault()
    }

    return (
        <form className="add-item-container" onSubmit={handleSubmit}>
            <input value={value} className="text-input" onChange={(e) => setValue(e.target.value)} type="text" placeholder="Add Column"></input>
            {value &&
                <button className="button button__primary">Add Column</button>
            }
        </form>
    )
}

export default AddItem
