import React from "react";
import styles from './search.module.scss'

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
    <div className={styles.search}>
      <label className={styles.search__label} htmlFor="search">Enter a name:</label>
      <input
        type="text"
        value={value}
        name="search"
        onInput={(e) => handleChange(e)}
        className={styles.input}
        placeholder="Name..."
      />
    </div>
  );
}

export default Search;
