import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../reducers/categories';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

class CategoryList extends Component {
  renderList() {
    return this.props.categories.map((category) => {
      const condition = category.id === this.props.activeCategory.id;
      const classes = `list-group-item${condition ? ' active' : ''}`;
      return (
        <li
          key={category.id}
          className={classes}
          onClick={() => {
            this.props.selectCategory(category);
            browserHistory.push('/');
          }}
        >
          {category.name}
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

CategoryList.propTypes = {
  activeCategory: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  selectCategory: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeCategory: state.categories.activeCategory,
    categories: state.categories.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
