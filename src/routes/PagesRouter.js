import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../constants/routes';

import HomePage from '../pages/HomePage/HomePage';

const CartPageAsync = lazy(() => import('../pages/CartPage/CartPage' /* webpackChunkName: "cart-page" */));

const ProductPageAsync = lazy(() => import('../pages/ProductPage/ProductPage' /* webpackChunkName: "products-page" */));

const PagesRouter = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={routes.INDEX.INDEX} exact component={HomePage} />
      <Route path={routes.CART.INDEX} component={CartPageAsync} />
      <Route path={routes.PRODUCT.INDEX} component={ProductPageAsync} />
      <Redirect to={routes.INDEX.INDEX} />
    </Switch>
  </Suspense>
);

export default PagesRouter;
