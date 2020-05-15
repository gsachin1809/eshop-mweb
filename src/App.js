import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './Container/App/index.jsx';
import Home from './Container/Home/index.jsx';
import { BrowserRouter , Route } from 'react-router-dom';

import { Provider }   from 'react-redux';
import store from './store/index'; 

function WebApp() {
  return (
    <Provider store={store}>
        <BrowserRouter >
            <Route  path='/' exact component={App} />
            <Route  path='/home' exact component={Home} />
        </BrowserRouter>
    </Provider>

  );
}

export default WebApp;
