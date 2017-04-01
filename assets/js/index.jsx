import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loader from './components/Loader.jsx';
import { createStore, applyMiddleware, compose } from 'redux';
import App from './containers/App.jsx';
import { createLogger } from 'redux-logger'
import { initialize } from './actions';
import reducer from './reducers';


const middleware = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

 /* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware),
));

store.dispatch(initialize());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
