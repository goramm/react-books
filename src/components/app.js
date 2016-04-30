import React from 'react';
import Header from './header.js';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

const App = () => {
  return (
    <div className="container">
      <Header title="List of the books" />
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
