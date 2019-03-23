import React, { useState } from 'react'


const Table = ({ columns, rows, hidden, query }) => {

    //Setup state
    const [orderAsc, setOrderAsc] = useState(true)
    const [sortByIndex, setSortByIndex] = useState(null)


    //Determines visible columns and rows from hidden
    const visibleColumns = columns.filter((col, index) => !hidden[index])
    const visibleRows = rows.map(row => row.filter((value, index) => !hidden[index]))

    //Sorts rows based on sortByIndex and orderAsc
    const sortedRows = [...visibleRows].sort((a, b) => {

        //Get the value of the array for the selected column and parse it for an Int
        //This makes it so inputs that have units are sorted correctly (Example: 20g < 25g)
        let first = parseInt(a[sortByIndex])
        let second = parseInt(b[sortByIndex])

        //If the parsed values aren't numbers we want to return them to their original strings
        if (isNaN(first || second)) {
            first = a[sortByIndex]
            second = b[sortByIndex]
        }

        //If orderAsc is true, sort asc. Else sort desc
        if (orderAsc)  {
            return first > second ? 1 : -1
        } else {
            return first < second ? 1 : -1
        }
    })


    //Determine the queried rows from the sorted rows
    const queriedRows = sortedRows.filter(row => row.some(value => value.includes(query)))

    //Set sortByIndex and orderAsc state
    const handleSort = (index) => {
        setSortByIndex(index)

        if (sortByIndex !== index){
            setOrderAsc(true)
        } else {
            setOrderAsc(!orderAsc)
        }
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {visibleColumns.map((col, index) => (
                        <th key={col}>
                            <div className="table__header">
                                <div className="header-title" onClick={() => handleSort(index)}>
                                    {col}{sortByIndex === index && <span>{orderAsc ? '↑' : '↓'}</span>}
                                </div>
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {queriedRows.map((row, index) => (
                    <tr key={index}>
                        {row.map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default Table