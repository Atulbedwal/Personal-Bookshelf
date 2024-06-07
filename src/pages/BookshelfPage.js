import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBooks(savedBooks);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-center">My Bookshelf</h1>
      <Bookshelf books={books} />
    </div>
  );
};

export default BookshelfPage;
