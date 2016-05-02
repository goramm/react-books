import React from 'react';
import Header from './header.js';
import CategoryList from '../containers/category-list';
import CategoryDetail from '../containers/category-detail';

const Categories = () => (
  <div className="categories">
    <Header title="List of categories" />
    <CategoryList />
    <CategoryDetail />
  </div>
);

export default Categories;
