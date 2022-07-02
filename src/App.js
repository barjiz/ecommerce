import React from 'react'
import "./App.css"
import { BottomNav } from './Components/BottomNav/BottomNav';
import { QueryClient, QueryClientProvider } from "react-query"
import { NavBar } from './Components/NavBar/NavBar';
import { AllRoutes } from './Components/Routes/Routes';
import { useSelector } from 'react-redux';
import { DetailLoadingPage, MainLoadingPage } from "./Components/LoadingPage/LoadingPage"

const queryClient = new QueryClient();

function App() {


  const isMainLoading = useSelector((state) => state.features.mainloadingState)

  const isDetailLoading = useSelector((state) => state.features.detailLoading)

  return (

    <QueryClientProvider client={queryClient}>


      <div className='App'>

        {isMainLoading && <MainLoadingPage />}

        {isDetailLoading && <DetailLoadingPage />}

        <NavBar />

        <BottomNav />


        {/* AllRoutes */}

        <AllRoutes />

      </div>

    </QueryClientProvider>
  )
}

export default App
