import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerStatisticsById } from "../features/playerStats/services/getPlayerStatisticsById";
import { Player } from "../types/types";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import { getFixturesByTeamId } from "../services/getFixturesByTeamId";
import { getPlayerStatstisticsForAllFixtures } from "../features/playerStats/services/getPlayerStatstisticsForAllFixtures";
import { PlayerStatisticsForAllFixtures } from "../features/playerStats/types/types";
import { formatYMD } from "../utils/formatYMD";



function PlayerStats () {
  const { playerId } = useParams()

  const [playerDetails, setPlayerDetails] = useState<Player | null>(null)
  const [playerStatstisticsForAllFixtures, setPlayerStatstisticsForAllFixtures] = useState<PlayerStatisticsForAllFixtures[] | []>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    
    if(playerId) {
      getPlayerStatisticsById(Number(playerId)).then(data => {
        setPlayerDetails(data)
        setIsLoading(false)
      })
    }
  },[playerId])

  useEffect(()=> {
    
    if(playerDetails && playerDetails.statistics) {
      getPlayerStatstisticsForAllFixtures(Number(playerId), playerDetails.statistics[0].team.id).then(playerStatistics => setPlayerStatstisticsForAllFixtures(playerStatistics))
    }
  },[playerDetails])

  useEffect(()=> {
    console.log(playerStatstisticsForAllFixtures);
  },[playerStatstisticsForAllFixtures])


  
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
        <div className="flex flex-col gap-4 p-2">
          <div className="flex w-full gap-1 text-lg">
            <img className="object-contain w-20 h-20 rounded-full" src={playerDetails.player.photo} alt="" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1">
                <span className="font-semibold ">{playerDetails.player.firstname}</span>
                <span className="font-semibold">{playerDetails.player.lastname}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
                <span className="text-xs font-semibold">{playerDetails.statistics[0].team.name}</span>
              </div>
              
            </div>
          </div>


          <div className="grid w-1/2 gap-4 p-2 md:grid-cols-5">
            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-md text-primary text-opacity-60">Age</span>
              <span>{playerDetails.player.age}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-md text-primary text-opacity-60">Height</span>
              <span>{playerDetails.player.height}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-md text-primary text-opacity-60">Weight</span>
              <span>{playerDetails.player.weight}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-md text-primary text-opacity-60">Nationality</span>
              <span>{playerDetails.player.nationality}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-semibold text-md text-primary text-opacity-60">Position</span>
              <span>{playerDetails.statistics[0].games.position}</span>
            </div>

          </div>


          <div className="flex flex-col w-full p-2">
            <div className="flex items-center">
              
            </div>
          {
          playerStatstisticsForAllFixtures.length > 0 && 
          playerStatstisticsForAllFixtures.map((data, index) => (
            <div className="grid w-full grid-cols-7 gap-10 p-2" key={index}>
              <span className="text-gray-400">{formatYMD(new Date(data.fixture.date))}</span>
              <div className="flex items-center gap-2">
                <img className="object-contain w-6 h-6" src={data.opposingTeam.logo} alt="opposing team logo" />
                <span>{data.opposingTeam.name}</span>
              </div>

              <span>{data.statistics[0].games.minutes}</span>
              <span>{data.statistics[0].goals.total ? data.statistics[0].goals.total : 0}</span>
              <span>{data.statistics[0].goals.assists ? data.statistics[0].goals.assists : 0}</span>
              <span>{data.statistics[0].cards.yellow ? data.statistics[0].cards.yellow : 0}</span>
              <span>{data.statistics[0].cards.red ? data.statistics[0].cards.red : 0}</span>




            </div>
          ))
          
          }
          </div>

          

            {/* <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-md text-primary text-opacity-60">Nationality</span>
                <span>{playerDetails.player.nationality}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-md text-primary text-opacity-60">Position</span>
                <span>{playerDetails.statistics[0].games.position}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="font-semibold text-md text-primary text-opacity-60">Overall Rating</span>
                <span>{Number(playerDetails.statistics[0].games.rating).toFixed(1)}</span>
              </div>

            </div> */}
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

export default PlayerStats;