import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import ReduxToastr from 'react-redux-toastr';
import './styles/variables.css';
import './styles/index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from './components/App/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <Route component={App} />
        </Router>
      </React.StrictMode>
    </PersistGate>
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      getState={state => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </Provider>,
  document.getElementById('root'),
);
