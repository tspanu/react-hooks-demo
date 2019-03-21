import React, { useState } from 'react'

const Table = ({ columns, rows, onSort }) => {

    const [orderAsc, setOrderAsc] = useState(true)
    const [sortByIndex, setSortByIndex] = useState(null)

    const handleSort = (index) => {

        //Sorts new array from rows
        const sortedRows = [...rows].sort((a, b) => {

            //Gets the value of the array for the selected column and parses for an Int
            //This makes it so inputs that have units are sorted correctly (Example: 20g < 25g)
            let first = parseInt(a[index])
            let second = parseInt(b[index])

            //If the parsed values aren't numbers we want to return them to their original strings
            if (isNaN(first || second)) {
                first = a[index]
                second = b[index]
            }

            //If this is the second time the column was clicked or the order is already ASC then order DESC
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

        //Return the sortedRows to the callback function
        onSort(sortedRows)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={col}>
                            <div className="table__header">
                                <div onClick={() => handleSort(index)}>{col}
                                    {sortByIndex === index && <span>{orderAsc ? '↑' : '↓'}</span>}
                                </div>
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={row}>
                        {row.map((value) => (
                            <td key={value}>{value}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default Table