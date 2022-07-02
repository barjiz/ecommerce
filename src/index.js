
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"

import cartReducer, { getTotals } from './Redux/cartSlice';
import { BrowserRouter } from 'react-router-dom';
import featuresSlice from './Redux/featuresSlice'
import authSlice from './Redux/authSlice';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    features: featuresSlice,
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



// serviceWorkerRegistration.register();