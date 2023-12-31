import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'react-circular-progressbar/dist/styles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Leagues from './pages/leagues';
import Homepage from './pages/homepage';
import FixtureStats from './pages/fixtureStats';
import Player from './pages/player';
import Team from './pages/team';
import League from './pages/league';
import { useEffect } from 'react';
import MobileTopLeagues from './pages/mobileTopLeagues';
function App() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])
  return (
    
    <BrowserRouter>
      <div id='app' className='flex flex-col items-center min-h-screen text-xs text-black bg-white font-main'>
        <Header/>
        <div className='relative flex flex-grow w-full h-full max-w-5xl '>
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/league/:leagueId/:leagueName' element={<League/>}/>
          <Route path='/fixture-statistics' element={<Homepage/>}/>
          <Route path='/fixture-statistics/:fixtureId' element={<FixtureStats/>}/>
          <Route path='/player/:playerId' element={<Player/>}/>
          <Route path='/team/:teamId/:teamName' element={<Team/>}/>
          <Route path='/top-leagues' element={<MobileTopLeagues/>}/>
          {/* <Route path='/players' element={<Players/>}/>
          <Route path='/teams' element={<Teams/>}/> */}
        </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    
  )
}

export default App
