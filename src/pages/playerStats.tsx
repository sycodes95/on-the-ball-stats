import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlayerStatisticsById } from "../features/playerStats/services/getPlayerStatisticsById";
import { Player } from "../types/types";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import { getFixturesByTeamId } from "../services/getFixturesByTeamId";
import { getPlayerStatisticsForAllFixtures} from "../features/playerStats/services/getPlayerStatstisticsForAllFixtures";
import { PlayerStatisticsForAllFixtures } from "../features/playerStats/types/types";
import { formatYMD } from "../utils/formatYMD";
import '../features/playerStats/styles.css'



function PlayerStats () {
  const { playerId } = useParams()

  const [playerDetails, setPlayerDetails] = useState<Player | null>(null)
  const [playerStatisticsForAllFixtures, setPlayerStatisticsForAllFixtures] = useState<PlayerStatisticsForAllFixtures[] | []>([])
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
      getPlayerStatisticsForAllFixtures(Number(playerId), playerDetails.statistics[0].team.id).then(playerStatistics => setPlayerStatisticsForAllFixtures(playerStatistics))
    }
    console.log(playerDetails);
  },[playerDetails])

  useEffect(()=> {
    console.log(playerStatisticsForAllFixtures);
  },[playerStatisticsForAllFixtures])


  
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
          <div className="flex w-full gap-4 text-xs">
            <img className="object-contain w-20 h-20 rounded-full" src={playerDetails.player.photo} alt="" />
            <div className="flex flex-col justify-center">
              <div className="flex flex-col text-sm">
                <span className=" whitespace-nowrap">{playerDetails.player.firstname}</span>
                <span className="text-lg font-semibold">{playerDetails.player.lastname}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
                <span className="text-sm ">{playerDetails.statistics[0].team.name}</span>
              </div>
              
            </div>
          </div>


          <div className="grid grid-cols-3 gap-4 p-2 md:grid-cols-6 ">
            <div className="col-span-3 font-semibold rounded-lg md:col-span-6">Player Details</div>
            <div className="flex flex-col items-center w-full gap-2 ">
              <span className="text-xs font-semibold text-primary text-opacity-60">Age</span>
              <span className="flex items-center justify-center w-full h-12 font-semibold bg-gray-300 rounded-lg text-primary">{playerDetails.player.age}</span>
            </div>

            <div className="flex flex-col items-center w-full gap-2">
              <span className="text-xs font-semibold text-primary text-opacity-60">Height</span>
              <span className="flex items-center justify-center w-full h-12 font-semibold bg-gray-300 rounded-lg text-primary">{playerDetails.player.height}</span>
            </div>

            <div className="flex flex-col items-center w-full gap-2">
              <span className="text-xs font-semibold text-primary text-opacity-60">Weight</span>
              <span className="flex items-center justify-center w-full h-12 font-semibold bg-gray-300 rounded-lg text-primary">{playerDetails.player.weight}</span>
            </div>

            <div className="flex flex-col items-center w-full gap-2">
              <span className="text-xs font-semibold text-primary text-opacity-60">Nationality</span>
              <span className="flex items-center justify-center w-full h-12 font-semibold bg-gray-300 rounded-lg text-primary">{playerDetails.player.nationality}</span>
            </div>

            <div className="flex flex-col items-center w-full gap-2">
              <span className="text-xs font-semibold text-primary text-opacity-60">Birth</span>
              <span className="flex items-center justify-center w-full h-12 font-semibold bg-gray-300 rounded-lg text-primary">{playerDetails.player.birth.country}</span>
            </div>

            <div className="flex flex-col items-center w-full gap-2">
              <span className="text-xs font-semibold text-primary text-opacity-60">Position</span>
              <span className="flex items-center justify-center w-full h-12 font-semibold bg-gray-300 rounded-lg text-primary">{playerDetails.statistics[0].games.position}</span>
            </div>

          </div>


          <div className="flex flex-col w-full gap-2 p-2 overflow-x-scroll">
            <div className="font-semibold">
              Latest Matches
            </div>

            <table className="overflow-x-scroll">
              <thead>
                <tr className="h-12 font-semibold text-left">
                  <th >Date</th>
                  <th className="p-2">VS</th>
                  <th className="w-12 text-center">M</th>
                  <th className="w-12 text-center">G</th>
                  <th className="w-12 text-center">A</th>
                  <th className="w-12 text-center">Y</th>
                  <th className="w-12 text-center">R</th>
                  <th className="w-12 text-center">Rating</th>
                </tr>
              </thead>

              <tbody>
                {
                playerStatisticsForAllFixtures.length > 0 ? 
                playerStatisticsForAllFixtures.map((data, index) => (
                  <tr className="w-full h-12 font-semibold " key={index}>
                    <td className="text-gray-400 whitespace-nowrap">{formatYMD(new Date(data.fixture.date))}</td>
                    <td className="text-center">
                      <Link to={`/fixture-statistics/${data.fixture.id}`} className="flex items-center gap-2 p-2 hover:opacity-70 w-fit">
                        <img className="object-contain w-6 h-6" src={data.opposingTeam.logo} alt="opposing team logo" />
                        <span className="overflow-hidden text-ellipsis whitespace-nowrap">{data.opposingTeam.name}</span>
                      </Link>
                    </td>
                    <td className="text-center">{data.statistics[0].games.minutes}</td>
                    <td className="text-center">{data.statistics[0].goals.total ? data.statistics[0].goals.total : 0}</td>
                    <td className="text-center">{data.statistics[0].goals.assists ? data.statistics[0].goals.assists : 0}</td>
                    <td className="text-center">{data.statistics[0].cards.yellow ? data.statistics[0].cards.yellow : 0}</td>
                    <td className="text-center">{data.statistics[0].cards.red ? data.statistics[0].cards.red : 0}</td>
                    <td className="text-center ">
                      <span className="w-6 p-1 bg-gray-500 rounded-lg text-primary ">{data.statistics[0].games.rating ? data.statistics[0].games.rating : 0}</span>
                      
                    </td>

                  </tr>
                ))
                :
                <div>No available matches</div>
                }
              </tbody>
            </table>
            
            
          </div>

          

            {/* <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold text-primary text-opacity-60">Nationality</span>
                <span>{playerDetails.player.nationality}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold text-primary text-opacity-60">Position</span>
                <span>{playerDetails.statistics[0].games.position}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="text-xs font-semibold text-primary text-opacity-60">Overall Rating</span>
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