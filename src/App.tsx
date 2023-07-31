import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import Leagues from './pages/leagues';
import { getLeagues } from './features/leagues/services/getLeagues';
import Footer from './components/footer/footer';

function App() {

  
  return (
    
    <BrowserRouter>
      <div id='app' className='flex flex-col items-center min-h-screen text-sm bg-white font-main'>
        <Header/>
          {/* <Menu/> */}
        <div className='flex items-center flex-grow max-w-5xl p-8'>
        <Routes>
          <Route path='/' element={<Leagues/>}/> 
        </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
