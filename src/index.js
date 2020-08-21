import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from './redux/store';
import './styles/variables.css';
import './styles/index.css';
import App from './components/App/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Route component={App} />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
