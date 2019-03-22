import React from 'react'

const Search = ({query, handleQueryChange}) => {

    return (
        <div className="search">
            <input className="search-input" type="search" value={query} placeholder="Search" onChange={handleQueryChange}></input>
        </div>
    )
}

export default Search