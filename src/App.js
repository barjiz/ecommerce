import React from 'react'
import "./App.css"
import { BottomNav } from './Components/BottomNav/BottomNav';
import { QueryClient, QueryClientProvider } from "react-query"
import { NavBar } from './Components/NavBar/NavBar';
import { AllRoutes } from './Components/Routes/Routes';

const queryClient = new QueryClient();

function App() {

  return (

    <QueryClientProvider client={queryClient}>

      <div className='App'>


        <NavBar />

        <BottomNav />


        {/* AllRoutes */}

        <AllRoutes />

      </div>

    </QueryClientProvider>
  )
}

export default App
