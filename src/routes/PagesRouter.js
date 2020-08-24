import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';

const CartPageAsync = lazy(() => import('../pages/CartPage/CartPage' /* webpackChunkName: "cart-page" */));

const ProductPageAsync = lazy(() => import('../pages/ProductPage/ProductPage' /* webpackChunkName: "products-page" */));

const PagesRouter = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPageAsync} />
      <Route path="/products/:productId" component={ProductPageAsync} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
);

export default PagesRouter;
