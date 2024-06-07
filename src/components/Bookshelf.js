import React from 'react';

const Bookshelf = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((book, index) => (
        <div key={index} className="border p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p>Author: {book.author_name && book.author_name.join(', ')}</p>
          {book.edition_count && <p>Editions: {book.edition_count}</p>}
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
