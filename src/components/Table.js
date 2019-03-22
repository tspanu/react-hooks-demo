import React, { useState } from 'react'


const Table = ({ columns, rows, hidden, query }) => {

    //Setup state
    const [sortedRows, setSortedRows] = useState(rows)
    const [orderAsc, setOrderAsc] = useState(true)
    const [sortByIndex, setSortByIndex] = useState(null)


    //Determine visible columns from hidden
    const visibleColumns = columns.filter((col, index) => !hidden[index])
    const visibleRows = sortedRows.map(row => row.filter((value, index) => !hidden[index]))

    //Determine the queried rows from the visible rows and query
    const queriedRows = visibleRows.filter(row => row.some(value => value.includes(query)))

    //Sorts rows
    const handleSort = (index) => {

        //Should be sorting by visibleRows but that creates an issue where the index for hidden columns doesn't match the index for the rows
        //Rows should probably be objects with key:value pairs so we can properly filter
        //Using rows though because the UI looks better and sometimes it actually is right
        const rowsSorted = [...rows].sort((a, b) => {

            //Get the value of the array for the selected column and parse it for an Int
            //This makes it so inputs that have units are sorted correctly (Example: 20g < 25g)
            let first = parseInt(a[index])
            let second = parseInt(b[index])

            //If the parsed values aren't numbers we want to return them to their original strings
            if (isNaN(first || second)) {
                first = a[index]
                second = b[index]
            }

            //If this is the first time the column was clicked or the order is Desc, flip the OrderBy and return Asc
            //Else flip the OrderBy and return Desc
            if (sortByIndex !== index || !orderAsc) {
                setOrderAsc(true)
                return first > second ? 1 : -1
            } else {
                setOrderAsc(false)
                return first < second ? 1 : -1
            }
        })

        //Set the sortByIndex so next time we click we know to order DESC
        setSortByIndex(index)

        //Set sorted rows to re-render
        setSortedRows(rowsSorted)
        
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
                        {row.map((value, index)=> (
                            <td key={index}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default Table