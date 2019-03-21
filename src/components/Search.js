import React from 'react'

const Search = ({onChange, rows}) => {

    const handleChange = e => {
        console.log(rows)

        //Filter each row if one of the values includes the query
        const filteredRows = rows.filter(row => row.some(value => value.includes(e.target.value)))

        console.log(filteredRows)

        //Update rows state in parent component
        onChange(filteredRows)
    }

    return (
        <div className="search">
            <input className="search-input" type="search" placeholder="Search" onChange={handleChange}></input>
        </div>
    )
}

export default Search