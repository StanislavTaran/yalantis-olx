import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routes from '../constants/routes';

import ProductsPage from '../pages/ProductsPage/ProductsPage';

const CartPageAsync = lazy(() => import('../pages/CartPage/CartPage' /* webpackChunkName: "cart-page" */));

const ProductPageAsync = lazy(() => import('../pages/ProductPage/ProductPage' /* webpackChunkName: "products-page" */));

const OwnProductsPageAsync = lazy(() =>
  import('../pages/OwnProductsPage/OwnProductsPage' /* webpackChunkName: "own-products-page" */),
);

const PagesRouter = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path={routes.INDEX.INDEX} exact component={ProductsPage} />
      <Route path={routes.OWN_PRODUCTS.INDEX} exact component={OwnProductsPageAsync} />
      <Route path={routes.CART.INDEX} component={CartPageAsync} />
      <Route path={routes.PRODUCT.INDEX} component={ProductPageAsync} />
      <Redirect to={routes.INDEX.INDEX} />
    </Switch>
  </Suspense>
);

export default PagesRouter;
