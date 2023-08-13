import { useEffect, useState } from "react";
import { getLeagues } from "../features/leagues/services/getLeagues";
import { topLeagueIds } from "../features/leagues/constants";

import { Oval } from "react-loader-spinner";
import LeagueLink from "../features/leagues/components/leagueLink";

export type League = {
  country: {name : string, code: string, flag: string},
  league: {id: number, name: string, type: string, logo: string},
  seasons: []
}
function Leagues () {
  const [isLoading, setIsLoading] = useState(false)
  const [leagues, setLeagues] = useState<League[]>([])

  useEffect(()=> {  

    setIsLoading(true)
    getLeagues()
    .then(data => {
      setIsLoading(false)
      if (data === "N/A") {
        setLeagues([]);
      } else {
        // const topLeagues = data.filter((data: League) => topLeagueIds.some(league => league.id === data.league.id))
        const topLeagues = []

        for (let i = 0; i < 24; i++){
          topLeagues.push(data[i])
        }
       
        setLeagues(topLeagues);
      }
    })
    .catch(error => {
      console.error(error);
    });
    
  },[])
  return (
    <div className="flex flex-col justify-center flex-grow gap-4 text-black">
      <div className="flex flex-col justify-center">
      {
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
      }
      </div>
      {
      isLoading &&
      <Oval
      height={80}
      width={80}
      color="#10B981"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#A9A9A9"
      strokeWidth={4}
      strokeWidthSecondary={4}
      />
      }
    </div>
  )
}

export default Leagues;