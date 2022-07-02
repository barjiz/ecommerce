import React from 'react'
import "./App.css"
import { BottomNav } from './Components/BottomNav/BottomNav';
import { QueryClient, QueryClientProvider } from "react-query"
import { NavBar } from './Components/NavBar/NavBar';
import { AllRoutes } from './Components/Routes/Routes';
import { useSelector } from 'react-redux';
import { LoadingPage } from "./Components/LoadingPage/LoadingPage"

const queryClient = new QueryClient();

function App() {


  const isLoading = useSelector((state) => state.cart.loadingState)


  return (

    <QueryClientProvider client={queryClient}>


      <div className='App'>

        {isLoading && <LoadingPage />}

        <NavBar />

        <BottomNav />


        {/* AllRoutes */}

        <AllRoutes />

      </div>

    </QueryClientProvider>
  )
}

export default App
