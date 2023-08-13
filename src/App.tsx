import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import Leagues from './pages/leagues';
import Footer from './components/footer/footer';
import LeagueDetails from './pages/leagueStats';
import Overall from './pages/homepage';
import LeagueStats from './pages/leagueStats';
import Homepage from './pages/homepage';

function App() {

  
  return (
    
    <BrowserRouter>
      <div id='app' className='flex flex-col items-center min-h-screen text-sm bg-white font-main'>
        <Header/>
        <div className='flex flex-grow w-full max-w-5xl'>
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/leagues' element={<Leagues/>}/>
          <Route path='/leagues/:leagueId' element={<LeagueStats/>}/>
          <Route path='/fixture-statistics/:fixtureId' element={<Leagues/>}/>
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
