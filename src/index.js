import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css';
import './scss/main.scss';
import './i18next';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="loading"><App/></Suspense>
    </BrowserRouter>
  </Provider>
);