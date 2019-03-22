import React, { Fragment, useState } from 'react'
import Table from './Table'
import Search from './Search'
import ColumnFilter from './ColumnFilter'

const seedRows = [
    ['chicken breast', '25g', '200cal', '37g', '8g'],
    ['fried chicken', '45g', '450cal', '21g', '16g'],
    ['beef stew', '20g', '250cal', '8g', '14g']
]

const seedColumns = [
    { header: 'meat', hidden: false },
    { header: 'protien', hidden: false },
    { header: 'calories (cal)', hidden: false },
    { header: 'carbohydrates (g)', hidden: false },
    { header: 'fat (g)', hidden: false },
]

const seedArray = ['meat', 'protein (g)', 'calories (cal)', 'carbohydrates (g)', 'fat (g)']

const App = () => {

    //Setup state
    const [rows, setRows] = useState(seedRows)
    const [columns, setColumns] = useState(seedArray)
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

    return (
        <Fragment>
            <header className="header">
                <div className="header__logo">
                    <h1>React Hooks</h1>
                </div>
            </header>
            <div className="container">
                <div className="filters">
                    <ColumnFilter columns={columns} hidden={hidden} handleHidden={handleHidden} />
                    <Search query={query} handleQueryChange={e => setQuery(e.target.value)} />
                </div>
                <Table
                    columns={columns}
                    rows={rows}
                    hidden={hidden}
                    query={query}
                />
            </div>
        </Fragment>
    )
}

export default App

