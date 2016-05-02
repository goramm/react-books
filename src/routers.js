import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Categories from './components/categories';
import BookDetail from './containers/book-detail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Categories} />
    <Route path="/categories(/:id)" component={Categories} />
    <Route path="/books(/:id)" component={BookDetail} />
  </Route>
);
