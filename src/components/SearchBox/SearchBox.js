import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2" data-testid="search-box">
      <label htmlFor="search" hidden>Search Robots</label>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
        id="search"
      />
    </div>
  )
}

export default SearchBox;