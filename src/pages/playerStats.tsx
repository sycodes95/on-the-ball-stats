import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerStatisticsById } from "../features/playerStats/services/getPlayerStatisticsById";
import { Player } from "../types/types";



function PlayerStats () {
  const { playerId } = useParams()

  const [playerDetails, setPlayerDetails] = useState<Player | null>(null)

  useEffect(()=> {
    if(playerId) {
      getPlayerStatisticsById(Number(playerId)).then(data => setPlayerDetails(data))
    }
  },[playerId])

  useEffect(()=> {
    console.log(playerDetails);
  },[playerDetails])


  
  return (
    <div className="flex flex-col w-full h-full gap-4 text-primary">
      {
      playerDetails && playerDetails.statistics &&
      <div className="flex flex-col gap-4 p-2">
        <div className="flex w-full gap-1 text-lg">
          <img className="object-contain w-20 h-20 rounded-full" src={playerDetails.player.photo} alt="" />
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1">
              <span className="font-bold ">{playerDetails.player.firstname}</span>
              <span className="font-bold">{playerDetails.player.lastname}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <img className="object-contain w-6 h-6" src={playerDetails.statistics[0].team.logo} alt="" />
              <span className="text-xs font-semibold">{playerDetails.statistics[0].team.name}</span>
            </div>
            
          </div>
        </div>


        <div className="flex gap-4 p-2 font-semibold rounded-lg">
          <div className="grid w-1/2 grid-cols-3 gap-4 md:grid-cols-6">
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Age</span>
              <span>{playerDetails.player.age}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Height</span>
              <span>{playerDetails.player.height}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Weight</span>
              <span>{playerDetails.player.weight}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Nationality</span>
              <span>{playerDetails.player.nationality}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Position</span>
              <span>{playerDetails.statistics[0].games.position}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Overall Rating</span>
              <span>{Number(playerDetails.statistics[0].games.rating).toFixed(1)}</span>
            </div>

          </div>

          {/* <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Nationality</span>
              <span>{playerDetails.player.nationality}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Position</span>
              <span>{playerDetails.statistics[0].games.position}</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <span className="font-bold text-md text-primary text-opacity-60">Overall Rating</span>
              <span>{Number(playerDetails.statistics[0].games.rating).toFixed(1)}</span>
            </div>

          </div> */}
        </div>



      </div>
      }
      

    </div>
  )
}

export default PlayerStats;