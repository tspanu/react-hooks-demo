import React from 'react'

const Table = ({ columns, rows }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
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