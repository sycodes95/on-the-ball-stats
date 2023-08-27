import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLeagues } from "../features/leagues/services/getLeagues";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

export type League = {
  [key: string] : {
    flag: string, 
    leagues: {id: number, logo:string, name: string, type: string}[],
  }
}
function Leagues () {
  const [isLoading, setIsLoading] = useState(false)
  const [leagues, setLeagues] = useState<League | null>(null)
  const [windowWidth, setWindowWidth] = useState<number>(10000)

  useEffect(()=> {  

    setIsLoading(true)
    getLeagues()
    .then(data => {
      setIsLoading(false)
      setLeagues(data)
    })
    .catch(error => {
      console.error(error);
    });
    
  },[])

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-wrap w-full mt-8 mb-8 text-black">
      {/* {
      !isLoading && leagues && leagues.length &&
      leagues.map((data, index) => (
        <LeagueLink 
        leagueId={data.league.id}
        leagueName={data.league.name} 
        leagueLogo={data.league.logo} 
        countryFlag={data.country.flag}
        key={index}
        />
        
      ))
      } */}
      {
      !isLoading && leagues &&
      <Box  sx={{ width: '100%', minHeight: 829 }}>
        <Masonry className="m-0" sx={{ margin: '0'}} columns={windowWidth && windowWidth > 768 ? 4 : 2} spacing={2}>
        {
        Object.keys(leagues).map((key, index) => (
          <div className="flex flex-col gap-2 p-4 rounded-2xl h-fit" key={index}>
            <div className="flex items-center gap-4 pb-2 border-b-2 border-stone-300">
              <img className="object-contain w-6 rounded-2xl " src={leagues[key].flag} alt="league country flag"/>
              <span className="font-semibold">{key}</span>
            </div>
            <div className="flex flex-col gap-2">
              {
              leagues[key].leagues.map((league, index) => (
                <Link 
                to={`/leagues/${league.id}`}
                key={index}
                className="flex items-center gap-2 hover:underline">
                  <img className="object-contain w-4 h-4 rounded-2xl" src={league.logo} alt="league country flag"/>
                  <span>{league.name}</span>
                </Link>
              ))
              }
            </div>
          </div>
        ))
        }
          
        </Masonry>
      </Box>
      }
      
      {
      isLoading &&
      <div className="flex items-center justify-center w-full h-full">
       <OvalLoadingSpinner/>
      </div>
      }
      
    </div>
  )
}

export default Leagues;