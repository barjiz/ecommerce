
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"

import cartReducer, { getTotals } from './Redux/cartSlice';
import { BrowserRouter } from 'react-router-dom';
import themeReducer from './Redux/themesSlice'
import authSlice from './Redux/authSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    auth: authSlice,
  }
})


store.dispatch(getTotals());


ReactDOM.render(

  <BrowserRouter>

    <Provider store={store}>

      <App />

    </Provider>


  </BrowserRouter>,

  document.getElementById("root")

);

reportWebVitals();

