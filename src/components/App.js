import React, { Fragment, useState } from 'react'
import Table from './Table'
import Search from './Search'

const seedRows = [
    ['chicken breast', '25g', '200cal', '37g', '8g'],
    ['fried chicken', '45g', '450cal', '21g', '16g'],
    ['beef stew', '20g', '250cal', '8g', '14g']
]

const seedRowObjects = [
    new Map([['meat', 'chicken'], ['protein (g)', '25g'], ['calories (cal)', '200cal'], ['carbohydrates (g)', '37g'], ['fat (g)', '8g']]),
    new Map([['meat', 'beef'], ['protein (g)', '30g'], ['calories (cal)', '100cal'], ['carbohydrates (g)', '23g'], ['fat (g)', '15g']]),
    new Map([['meat', 'pork'], ['protein (g)', '20g'], ['calories (cal)', '250cal'], ['carbohydrates (g)', '45g'], ['fat (g)', '20g']])
]

const seedColumns = ['meat', 'protein (g)', 'calories (cal)', 'carbohydrates (g)', 'fat (g)']

const App = () => {

    const [columns, setColumns] = useState(seedColumns)
    const [rows, setRows] = useState(seedRows)

    const [visibleColumns, setVisibleColumns] = useState(columns)
    const [visibleRows, setVisibleRows] = useState(rows)

    const handleOnCheck = (visibleColumns, visibleRows) => {
        setVisibleColumns(visibleColumns)
        setVisibleRows(visibleRows)
    }

    return (
        <Fragment>
            <header className="header">
                <div className="header__logo">
                    <img src="https://www.vulcansearch.com/wp-content/uploads/2019/03/vulcan-logo-dark@2x.png" alt="Vulcan Search"></img>
                </div>
            </header>
            <div className="container">
                <Search visibleRows={visibleRows} rows={rows} onChange={filteredRows => setVisibleRows(filteredRows)} />
                <Table data={(rows, columns)} columns={visibleColumns} rows={visibleRows} onSort={sortedRows => setVisibleRows(sortedRows)} />
            </div>
        </Fragment>
    )
}

export default App

