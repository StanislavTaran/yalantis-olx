import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './styles/variables.css';
import './styles/index.css';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <Router>
          <Route component={App} />
        </Router>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
