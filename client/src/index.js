import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers/index';
import App from './app';
import {rootSaga} from './middleware/sagas'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/*
Get initial state injected by the server.
 */
const initialState = window.__INITIAL_STATE__; // eslint-disable-line

const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga)

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}
