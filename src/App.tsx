import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'react-circular-progressbar/dist/styles.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Leagues from './pages/leagues';
import LeagueStats from './pages/leagueStats';
import Homepage from './pages/homepage';
import FixtureStats from './pages/fixtureStats';
import Player from './pages/player';
function App() {

  
  return (
    
    <BrowserRouter>
      <div id='app' className='flex flex-col items-center min-h-screen text-xs bg-white font-main'>
        <Header/>
        <div className='relative flex flex-grow w-full h-full max-w-5xl mt-4 mb-4'>
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/leagues/:leagueId' element={<LeagueStats/>}/>
          <Route path='/fixture-statistics' element={<Homepage/>}/>
          <Route path='/fixture-statistics/:fixtureId' element={<FixtureStats/>}/>
          <Route path='/player/:playerId' element={<Player/>}/>
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
