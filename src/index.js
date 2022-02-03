import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './routes/App';
import { BrowserRouter } from "react-router-dom";
import './styles/MobileDesing.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
