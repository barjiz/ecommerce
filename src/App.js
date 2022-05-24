import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css"
import { BottomNav } from './Components/BottomNav/BottomNav';

import { Categories } from './Modules/Categories/Categories';
import { CategoriesDetails } from './Modules/Categories/CategoriesDetails';


import Home from "./Modules/Home/Home"
import { ProductDetails } from './Modules/Products/ProductDetails';


import { Login } from './Modules/Auth/Login';

import { Signup } from './Modules/Auth/Signup';

import { Profile } from "./Modules/Profile/Profile"
import OrderSuccess from './Modules/OrderSuccess/OrderSuccess';
import { DeliveryForm } from './Modules/DeliveryForm/DeliveryForm';
import { EditProfile } from './Modules/Profile/EditProfile';
import { UserAddress } from './Modules/Address/UserAddress';
import { CreateAddress } from './Modules/Address/CreateAddress/CreateAddress';
import { OrderDetails } from './Modules/Orders/OrderDetails';
import { Order } from './Modules/Orders/Order';

import { QueryClient, QueryClientProvider } from "react-query"
import { Address } from './Modules/Address/Address';
import { TopNav } from './Components/TopNav/TopNav';


const queryClient = new QueryClient();


function App() {
  return (

    <QueryClientProvider client={queryClient}>

      <div className='App'>


        <BrowserRouter>

          <BottomNav />

          <TopNav />


          <Routes>

            <Route path='/' element={<Home />} />

            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="/categories/:id" element={<CategoriesDetails />} />

            <Route path='/categories' element={<Categories />} />

            <Route path='/login' element={<Login />} />

            <Route path='/signup' element={<Signup />} />


            <Route path='/cart' element={localStorage.getItem("authToken") ? <DeliveryForm /> : <Login />} />


            <Route path='/ordersuccess' element={<OrderSuccess />} />

            <Route path='/profile' element={localStorage.getItem("authToken") ? <Profile /> : <Login />} />

            <Route path='/profile/edit'
              element={localStorage.getItem("authToken") ? <EditProfile /> : <Login />} />


            <Route path='/address'
              element={localStorage.getItem("authToken") ? <Address /> : <Login />} />



            <Route path='/newaddress'
              element={localStorage.getItem("authToken") ? <CreateAddress /> : <Login />} />


            <Route path='/orders'
              element={localStorage.getItem("authToken") ? <Order /> : <Login />} />


            <Route path='/orders/:id'
              element={localStorage.getItem("authToken") ? <OrderDetails /> : <Login />} />





          </Routes>

        </BrowserRouter>

      </div>

    </QueryClientProvider>
  )
}

export default App
