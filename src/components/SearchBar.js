import React from 'react';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
      className="block mx-auto w-full md:w-30 p-2 border rounded-md"
      style={{ maxWidth: '300px' }} // Adjust the width as needed
    />
  );
};

export default SearchBar;
