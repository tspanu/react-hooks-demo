import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'


const Table = ({columns, rows}) => {

    const { SearchBar } = Search

    return (
        <ToolkitProvider
            keyField="id"
            data={rows}
            columns={columns}
            search
            bootstrap4={true}
        >
            {
                props => (
                    <div>
                        <SearchBar {...props.searchProps} />
                        <BootstrapTable
                            {...props.baseProps}
                            cellEdit={cellEditFactory({ mode: 'click' })}
                        />
                    </div>
                )
            }
        </ToolkitProvider>
    )
}

export default Table