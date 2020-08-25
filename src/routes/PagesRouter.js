import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HOME_PAGE_ROUTE, PRODUCTS_PAGE_ROUTE, CART_PAGE_ROUTE } from '../constants/routes';

import HomePage from '../pages/HomePage/HomePage';

const CartPageAsync = lazy(() => import('../pages/CartPage/CartPage' /* webpackChunkName: "cart-page" */));

const ProductPageAsync = lazy(() => import('../pages/ProductPage/ProductPage' /* webpackChunkName: "products-page" */));

const PagesRouter = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={HOME_PAGE_ROUTE} exact component={HomePage} />
      <Route path={CART_PAGE_ROUTE} component={CartPageAsync} />
      <Route path={`${PRODUCTS_PAGE_ROUTE}/:productId`} component={ProductPageAsync} />
      <Redirect to={HOME_PAGE_ROUTE} />
    </Switch>
  </Suspense>
);

export default PagesRouter;
