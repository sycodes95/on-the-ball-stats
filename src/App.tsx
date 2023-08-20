import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'react-circular-progressbar/dist/styles.css';
import Header from './components/header/header';
import Leagues from './pages/leagues';
import Footer from './components/footer/footer';
import LeagueDetails from './pages/leagueStats';
import Overall from './pages/homepage';
import LeagueStats from './pages/leagueStats';
import Homepage from './pages/homepage';
import FixtureStats from './pages/fixtureStats';
import PlayerStats from './pages/playerStats';
function App() {

  
  return (
    
    <BrowserRouter>
      <div id='app' className='flex flex-col items-center min-h-screen text-sm bg-white font-main'>
        <Header/>
        <div className='relative flex flex-grow w-full h-full max-w-5xl mt-4 mb-4'>
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/leagues/:leagueId' element={<LeagueStats/>}/>
          <Route path='/fixture-statistics' element={<Homepage/>}/>
          <Route path='/fixture-statistics/:fixtureId' element={<FixtureStats/>}/>
          <Route path='/player-stats/:playerId' element={<PlayerStats/>}/>
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
