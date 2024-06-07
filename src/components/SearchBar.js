import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for a book..."
      className="w-full p-2 border rounded-md"
    />
  );
};

export default SearchBar;
