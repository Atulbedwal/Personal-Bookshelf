import React from 'react';

const BookCard = ({ book, onAddToBookshelf }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p>Author: {book.author_name && book.author_name.join(', ')}</p>
      {book.edition_count && <p>Editions: {book.edition_count}</p>}
      <button
        onClick={() => onAddToBookshelf(book)}
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
