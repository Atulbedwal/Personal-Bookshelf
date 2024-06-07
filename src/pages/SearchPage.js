import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

const SearchPage = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        try {
          const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
          setBooks(response.data.docs);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      }
    };
    fetchBooks();
  }, [query]);
  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mt-8">
        <SearchBar query={query} setQuery={setQuery} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        {books.map((book, index) => (
          <BookCard key={index} book={book} onAddToBookshelf={onAddToBookshelf} />
        ))}
      </div>
      <button
        onClick={() => window.location.href='/bookshelf'}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
      >
        Go to My Bookshelf
      </button>
    </div>
  );
};

export default SearchPage;
