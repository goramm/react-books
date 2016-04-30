import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../reducers/books';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      const classes = `list-group-item${book.id === this.props.activeBook.id ? ' active' : ''}`;
      return (
        <li
          key={book.id}
          className={classes}
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4">
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = {
  activeBook: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeBook: state.books.activeBook,
    books: state.books.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
