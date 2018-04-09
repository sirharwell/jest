import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store form './store';

ReactDOM.render(
  <Provider store={store}>
    <App />, document.getElementById('root'));
  </Provider>
registerServiceWorker();
