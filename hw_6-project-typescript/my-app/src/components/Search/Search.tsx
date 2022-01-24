import React from "react";
import './search.scss'

interface SearchProps {
  value: string;
  checkChange: (value: string) => unknown;
}

function Search({ value, checkChange }: SearchProps) {
  function handleChange(e: any) {
    checkChange(e.target.value);
    console.log(value);
  }

  return (
    <div className="search">
      <label htmlFor="search">Enter a name:</label>
      <input
        type="text"
        value={value}
        name="search"
        onInput={(e) => handleChange(e)}
        className="search-by-name"
        placeholder="Name"
      />
    </div>
  );
}

export default Search;
