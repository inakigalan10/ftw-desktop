import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App';
import axios from 'axios';

axios.defaults.withCredentials = true;


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
      <App/>
  </BrowserRouter>
  </Provider>
)
