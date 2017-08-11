import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import './styles/global.scss';

const store = createStore(reducer);

const renderApp = () => {
  // eslint-disable-next-line
  const App = require('./containers/app.jsx').default;
  const component = (
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  );
  render(component, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./containers/app.jsx', () => renderApp());
}

renderApp();
