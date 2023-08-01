import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import Leagues from './pages/leagues';
import { getLeagues } from './features/leagues/services/getLeagues';
import Footer from './components/footer/footer';
import Players from './pages/players';
import Teams from './pages/teams';
import LeagueDetails from './pages/leagueDetails';

function App() {

  
  return (
    
    <BrowserRouter>
      <div id='app' className='flex flex-col items-center min-h-screen text-sm bg-white font-main'>
        <Header/>
          {/* <Menu/> */}
        <div className='flex flex-grow w-full max-w-5xl'>
        <Routes>
          <Route path='/' element={<Leagues/>}/> 
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/leagues/:leagueID' element={<LeagueDetails/>}/>
          <Route path='/players' element={<Players/>}/>
          <Route path='/teams' element={<Teams/>}/>
        </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
