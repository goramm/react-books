import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../reducers/books';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class CategoryDetail extends Component {

  renderBooks(books) {
    return books.map((book) => {
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>
            <a
              href="#"
              onClick={() => {
                this.props.selectBook(book);
                browserHistory.push(`/books/${book.id}`);
              }}
            >
              {book.title}
            </a>
          </td>
          <td><img src={book.image} alt={book.title} width="18" /></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="category-detail col-md-8">
        <h3>{this.props.category.name}</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>{"#"}</th>
              <th>{"Title"}</th>
              <th>{"Image"}</th>
            </tr>
          </thead>
          <tbody>
            {this.renderBooks(this.props.books)}
          </tbody>
        </table>
      </div>
    );
  }
}

CategoryDetail.propTypes = {
  category: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  selectBook: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    category: state.categories.activeCategory,
    books: state.categories.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);

