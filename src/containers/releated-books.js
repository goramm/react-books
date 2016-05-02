import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../reducers/books';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

const ReleatedBooks = (props) => (
  <ul className="book-detail">
    {props.books.map((book) => {
      return (
        <li key={book.id}>
          <a
            href="#"
            onClick={() => {
              props.selectBook(book);
              browserHistory.push(`/books/${book.id}`);
            }}
          >
            {book.title}
          </a>
        </li>
      );
    })}
  </ul>
);

ReleatedBooks.propTypes = {
  books: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    books: state.books.releatedBooks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReleatedBooks);

