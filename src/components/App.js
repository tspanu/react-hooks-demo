import React, { Fragment, useState } from 'react'
import Table from './Table'
import Search from './Search'

const seedRows = [
    ['chicken breast', '25g', '200cal', '37g', '8g'],
    ['fried chicken', '45g', '450cal', '21g', '16g'],
    ['beef stew', '20g', '250cal', '8g', '14g']
]

const seedColumns = ['meat', 'protein (g)', 'calories (cal)', 'carbohydrates (g)', 'fat (g)']

const App = () => {

    //Setup state
    const [rows, setRows] = useState(seedRows)
    const [columns, setColumns] = useState(seedColumns)
    const [query, setQuery] = useState('')

    return (
        <Fragment>
            <header className="header">
                <div className="header__logo">
                    <img src="https://www.vulcansearch.com/wp-content/uploads/2019/03/vulcan-logo-dark@2x.png" alt="Vulcan Search"></img>
                </div>
            </header>
            <div className="container">
                <Search query={query} handleQueryChange={e => setQuery(e.target.value)} />
                <Table
                    columns={columns}
                    rows={rows}
                    query={query}
                />
            </div>
        </Fragment>
    )
}

export default App

