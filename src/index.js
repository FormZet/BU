import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import 'jquery';
import 'popper.js'
import App from './App';
import './assets/styles/main.scss';
require ('bootstrap');


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);


