import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header.js';
import CategoryList from '../containers/category-list';
import ReleatedBooks from '../containers/releated-books';

const BookDetail = (props) => (
  <div className="book-detail">
    <Header title="Book detail" />
    <CategoryList />
    <div className="col-md-8">
      <h3>{props.book.title}</h3>
      <div className="row">
        <div className="col-md-3">
          <img src={props.book.image} alt={props.book.title} className="img-thumbnail" />
        </div>
        <div className="col-md-9">
          <p dangerouslySetInnerHTML={{ __html: props.book.description }}></p>
        </div>
        <div className="col-md-12">
          <h4>{"Releated books"}</h4>
          <ReleatedBooks />
        </div>
      </div>
    </div>
  </div>
);

BookDetail.propTypes = {
  book: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    book: state.books.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

