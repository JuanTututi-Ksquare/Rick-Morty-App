import React, { useState } from "react";

type Props = {
  onSearch: Function;
};

function SearchBox({ onSearch }: Props) {
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <div>
      <input
        onChange={(event) => setSearchInput(event.target.value)}
        type="text"
        name="input-search"
        id="input-search"
        placeholder="Search location..."
      />
      <button onClick={() => onSearch(searchInput)}>Search</button>
    </div>
  );
}

export default SearchBox;
