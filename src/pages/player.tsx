// React and related packages
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Types
import { Player } from "../types/types";
import { PlayerStatisticsForAllFixtures } from "../features/player/types/types";

// Components
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import LatestMatchesStatistics from "../features/player/components/latestMatchesStatistics/latestMatchesStatistics";
import PlayerHeader from "../features/player/components/playerHeader/playerHeader";

// Services
import { getPlayerStatisticsForAllFixtures } from "../features/player/services/getPlayerStatstisticsForAllFixtures";
import { getPlayerStatisticsById } from "../features/player/services/getPlayerStatisticsById";

// Styles
import '../features/player/styles.css'
import CareerStatistics from "../features/player/components/careerStatistics/careerStatistics";
import PlayerInfo from "../features/player/components/playerInfo/playerInfo";

function PlayerPage () {
  const { playerId } = useParams()
  
  const [isLoading, setIsLoading] = useState(true)
  const [playerDetails, setPlayerDetails] = useState<Player | null>(null)
  const [playerStatisticsForAllFixtures, setPlayerStatisticsForAllFixtures] = useState<PlayerStatisticsForAllFixtures[] | []>([])
  const [playerStatisticsForAllFixturesIsLoading, setPlayerStatisticsForAllFixturesIsLoading] = useState(false)

  useEffect(()=> {
    
    if(playerId) {
      getPlayerStatisticsById(Number(playerId)).then(data => {
        setPlayerDetails(data)
        setIsLoading(false)
      });
    }
  },[playerId]);

  useEffect(()=> {
    
    if(playerDetails && playerDetails.statistics) {
      setPlayerStatisticsForAllFixturesIsLoading(true)
      getPlayerStatisticsForAllFixtures(Number(playerId), playerDetails.statistics[0].team.id).then(playerStatistics => {
        setPlayerStatisticsForAllFixtures(playerStatistics)
        setPlayerStatisticsForAllFixturesIsLoading(false)

      });
    }
    console.log(playerDetails);
  },[playerDetails]);

  return (
    <div className="flex flex-col w-full gap-4 text-primary">
      {
      isLoading ?
      
      <div className="flex items-center justify-center w-full h-full">
        <OvalLoadingSpinner />
      </div>
      :
      <>
      {
      (playerDetails && playerDetails.statistics) ?
      <div className="flex flex-col w-full gap-8 p-2">
        
        <PlayerHeader playerDetails={playerDetails}/>

        <PlayerInfo playerDetails={playerDetails}/>

        <CareerStatistics playerDetails={playerDetails} />

        <LatestMatchesStatistics 
        playerStatisticsForAllFixtures={playerStatisticsForAllFixtures}
        playerStatisticsForAllFixturesIsLoading={playerStatisticsForAllFixturesIsLoading}
        />
        
      </div>

      :
      <div className="flex items-center justify-center w-full h-full text-xs">
        <span>We apologize, this player's details are not available at the moment, check back later!</span>
      </div>
      }
      </>
      
      }
      

    </div>
  )
}

export default PlayerPage;