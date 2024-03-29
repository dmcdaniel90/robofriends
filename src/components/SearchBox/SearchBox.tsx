import {ChangeEvent} from 'react';

type SearchBoxProps = {
  searchChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ searchChange }: SearchBoxProps) => {
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