import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import jQuery from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <App />
    </HashRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
