import React from 'react';
import logo from './logo.svg';
import './App.css';
import App from './Container/App/index.jsx';
import Home from './Container/Home/index.jsx';
import { BrowserRouter , Route } from 'react-router-dom';

function WebApp() {
  return (
    <BrowserRouter >
        <Route  path='/' exact component={App} />
        <Route  path='/home' exact component={Home} />
    </BrowserRouter>

  );
}

export default WebApp;
