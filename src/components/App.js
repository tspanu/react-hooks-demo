import React, { Fragment, useState } from 'react'
import BootstrapTable from './BootstrapTable'
import Table from './Table'
import Search from './Search'

const data = [
    ['chicken breast', '25g', '200cal', '37g', '8g'],
    ['fried chicken', '45g', '450cal', '21g', '16g'],
    ['beef stew', '20g', '250cal', '8g', '14g']
]

const columns = ['meat', 'protein (g)', 'calories (cal)', 'carbohydrates (g)', 'fat (g)']

const App = () => {

    const [rows, setRows] = useState(data)

    return (
        <Fragment>
            <header className="header">
                <div className="header__logo">
                    <img src="https://www.vulcansearch.com/wp-content/uploads/2019/03/vulcan-logo-dark@2x.png" alt="Vulcan Search"></img>
                </div>
            </header>
            <div className="container">
                <Search onChange={ filteredRows => setRows(filteredRows)} rows={data}/>
                <Table columns={columns} rows={rows} />
            </div>
        </Fragment>
    )
}

export default App

