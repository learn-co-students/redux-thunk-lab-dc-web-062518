import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {storeCreator} from 'redux';
import {Provider} from 'react-redux';
import configureStore from './redux/configStore';

const store = configureStore()

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
