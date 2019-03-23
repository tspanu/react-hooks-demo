import React, { Fragment, useState } from 'react'
import Table from './Table'
import Search from './Search'
import ColumnFilter from './ColumnFilter'

const seedRows = [
    ['chicken breast', '25g', '200cal', '37g', '8g'],
    ['fried chicken', '45g', '450cal', '21g', '16g'],
    ['beef stew', '20g', '250cal', '8g', '14g']
]

const seedColumns = ['meat', 'protein (g)', 'calories (cal)', 'carbs (g)', 'fat (g)']

const App = () => {

    //Setup state
    const [rows, setRows] = useState(seedRows)
    const [columns, setColumns] = useState(seedColumns)
    const [query, setQuery] = useState('')
    const [hidden, setHidden] = useState({})

    const handleHidden = (e) => {
        const index = e.target.name
        const checked = !e.target.checked

        setHidden({
            ...hidden,
            [index]: checked
        })
    }

    const handleAddColumn = (value) => {
        setColumns([...columns, ''])
        setRows(rows.map(row => [...row, '']))
    }

    const handleEditColumn = (value, index) => {
        const updatedColumns = columns.map((v, i) => {
            if (i !== index) {
                return v
            }
            return value
        })
        setColumns(updatedColumns)
    }

    const handleDeleteColumn = (index) => {
        setColumns(columns.filter((col, i) => i !== index))
        setRows(rows.map(row => row.filter((value, i) => i !== index)))
    }

    const handleAddRow = () => {
        setRows([...rows, new Array(columns.length).fill('')])
    }

    const handleDeleteRow = (row) => {
        setRows(rows.filter(r => r.toString() !== row.toString()))
    }

    const handleEditCell = (value, index, array) => {
        const updatedRows = rows.map(r => {
            //Find the correct row to update
            if (r.toString() !== array.toString()) {
                return r
            }

            //Find the correct value to update
            return (
                r.map((v, i) => {
                    if (i !== index) {
                        return v
                    }
                    return value
                })
            )
        })

        setRows(updatedRows)
    }

    return (
        <Fragment>
            <header className="header">
                <div className="header__logo">
                    <h1>React Hooks</h1>
                </div>
            </header>
            <div className="table-container">
                <div className="actions-container">
                    <div className="row-container">
                        <button className="button button__primary" onClick={handleAddColumn}>Add Column</button>
                        <button className="button button__primary" onClick={handleAddRow}>Add Row</button>
                    </div>
                    <div className="row-container">
                        <ColumnFilter columns={columns} hidden={hidden} handleHidden={handleHidden} handleDeleteColumn={handleDeleteColumn} />
                        <Search query={query} handleQueryChange={e => setQuery(e.target.value)} />
                    </div>
                </div>
                <Table
                    columns={columns}
                    rows={rows}
                    hidden={hidden}
                    query={query}
                    handleEditColumn={handleEditColumn}
                    handleDeleteColumn={handleDeleteColumn}
                    handleDeleteRow={handleDeleteRow}
                    handleEditCell={handleEditCell}
                />
            </div>
        </Fragment>
    )
}

export default App

