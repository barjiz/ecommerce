
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"

import cartReducer from './Redux/cartSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})


ReactDOM.render(


  <Provider store={store}>

    <App />

  </Provider>,

  document.getElementById("root")

);

reportWebVitals();

