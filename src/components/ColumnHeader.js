import React, { useState } from 'react'

import { CancelIcon, EditIcon, TrashIcon } from '../assets/icons'

const ColumnHeader = ({ column, index, sortByIndex, orderAsc, handleEditColumn, handleDeleteColumn, handleSort }) => {

    const [edit, setEdit] = useState(false)

    const handleEnter = (e) => {
        if (e.key === 'Enter'){
            handleEditColumn(e.target.value, index)
            setEdit(false)
        }
    }

    return (
        <div className="table-cell" >
            {edit || column === '' ?
                <input className="text-input" type="text" defaultValue={column} onKeyDown={handleEnter}></input>
                :
                <div className="header-title" onClick={() => handleSort(index)}>
                    {column}{sortByIndex === index && <span>{orderAsc ? '↑' : '↓'}</span>}
                </div>
            }
            <div className="table-cell__right">
                <button onClick={() => setEdit(!edit)}>
                    {edit ?
                        <CancelIcon className="button__icon" />
                        :
                        <EditIcon className="button__icon" />
                    }
                </button>
                <button onClick={() => handleDeleteColumn(index)}>
                    <TrashIcon className="button__icon" />
                </button>
            </div>
        </div>
    )
}

export default ColumnHeader
