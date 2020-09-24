import history from './configHistory';
import { stringifyParams } from '../mapFiltersToParams';
import routes from '../../constants/routes';

export const pushToUrl = params => {
  const qsParams = stringifyParams(params);

  const url = {
    search: qsParams,
  };

  if (params.editable) {
    url.pathname = routes.OWN_PRODUCTS.INDEX;
  } else {
    url.pathname = routes.INDEX.INDEX;
  }
  history.push(url);
};
