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
import { RotatingSquare } from "react-loader-spinner";



function PlayerStats () {
  const { playerId } = useParams()

  const [playerDetails, setPlayerDetails] = useState<Player | null>(null)
  const [playerStatisticsForAllFixtures, setPlayerStatisticsForAllFixtures] = useState<PlayerStatisticsForAllFixtures[] | []>([])
  const [isLoading, setIsLoading] = useState(true)
  const [playerStatisticsForAllFixturesIsLoading, setPlayerStatisticsForAllFixturesIsLoading] = useState(false)

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
      setPlayerStatisticsForAllFixturesIsLoading(true)
      getPlayerStatisticsForAllFixtures(Number(playerId), playerDetails.statistics[0].team.id).then(playerStatistics => {
        setPlayerStatisticsForAllFixtures(playerStatistics)
        setPlayerStatisticsForAllFixturesIsLoading(false)

      })
    }
    console.log(playerDetails);
  },[playerDetails])

  useEffect(()=> {
    console.log(playerStatisticsForAllFixtures);
  },[playerStatisticsForAllFixtures])

  const playerDetailsMap = [
    {title: 'Age', value: playerDetails?.player.age},
    {title: 'Height', value: playerDetails?.player.height},
    {title: 'Weight', value: playerDetails?.player.weight},
    {title: 'Nationality', value: playerDetails?.player.nationality},
    {title: 'Birthplace', value: playerDetails?.player.birth.country},
    {title: 'Position', value: playerDetails?.statistics[0].games.position},
  ]
  
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
            <div className="flex flex-col justify-center gap-2">
              <div className="flex flex-col gap-1 text-sm font-semibold text-black md:flex-row">
                <span className="flex items-center whitespace-nowrap">{playerDetails.player.firstname}</span>
                <span className="flex items-center">{playerDetails.player.lastname}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
                <span className="text-sm ">{playerDetails.statistics[0].team.name}</span>
              </div>
              
            </div>
          </div>


          <div className="grid grid-cols-3 gap-4 p-2 md:grid-cols-6 ">
            {
            playerDetailsMap.map((details, index) => (
              <div className="flex flex-col items-center w-full gap-2" key={index}>
                <span className="text-xs font-semibold text-primary ">{details.title}</span>
                <span className="flex items-center justify-center w-full h-12 text-lg font-semibold text-white bg-black rounded-sm font-display">{details.value}</span>
              </div>
            ))
            }
          </div>


          <div className="flex flex-col w-full gap-2 p-2 overflow-x-scroll">
            <div className="flex items-center h-8 gap-2 font-semibold">
              <span>Latest Matches</span>
              {
              playerStatisticsForAllFixturesIsLoading && playerStatisticsForAllFixtures.length === 0 &&
              <RotatingSquare
              height="32"
              width="32"
              color="#999999"
              ariaLabel="rotating-square-loading"
              strokeWidth="4"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              />
              }
            </div>
            {
            playerStatisticsForAllFixtures.length > 0 &&
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
                    <td className="">
                      <div className="flex justify-center ">
                      <span className="w-8 text-center text-white bg-gray-500 rounded-lg text-primary">{data.statistics[0].games.rating ? data.statistics[0].games.rating : 0}</span>
                      </div>
                      
                    </td>

                  </tr>
                ))
                }
              </tbody>
            </table>
            }

            {
            !playerStatisticsForAllFixturesIsLoading && playerStatisticsForAllFixtures.length === 0 &&
            <div className="flex items-center justify-center w-full h-full text-center">No available matches</div>
            }

            
            
            
            
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