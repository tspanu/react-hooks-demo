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
        setColumns(columns.concat('null'))
        setRows(rows.map(row => row.concat('null')))
    }

    const handleDeleteColumn = (index) => {
        setColumns(columns.filter((col, i) => i !== index))
        setRows(rows.map(row => row.filter((value, i) => i !== index)))
    }

    const handleDeleteRow = (row) => {
        setRows(rows.filter(r => r.toString() !== row.toString()))
    }

    const handleAddRow = () => {
        setRows(rows.concat([new Array(columns.length).fill('null')]))
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
                    handleDeleteColumn={handleDeleteColumn}
                    handleDeleteRow={handleDeleteRow}
                />
            </div>
        </Fragment>
    )
}

export default App

