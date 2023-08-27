import { useEffect, useState } from "react";
import { TeamSquadType, TeamSquadTypePlayer } from "../../types";
import { Link } from "react-router-dom";

type TeamSquadProps = {
  teamSquad: TeamSquadType;
}

function TeamSquad ({teamSquad} : TeamSquadProps){
  
  const [squad, setSquad] = useState<{[key: string]: TeamSquadTypePlayer[]} | null>(null)

  useEffect(()=>{
    if(teamSquad){
      const squad:{[key: string]: TeamSquadTypePlayer[]} = {
        'Attacker': [],
        'Midfielder': [],
        'Defender': [],
        'Goalkeeper': []

      }


      teamSquad.players.forEach(player => {
        if(squad[player.position]){
          squad[player.position].push(player)
        } 
      })
      
      setSquad(squad)
    }
    console.log(squad);
  },[teamSquad])

  useEffect(()=> {
    console.log(squad);
  },[squad])
  return (
    <div className="flex flex-col w-full">
      {
       squad && 
       Object.keys(squad).map((key, index) => (
        <div className="flex flex-col w-full ">
          <div className="flex items-center h-12 border-b border-stone-300">
            <span className="text-sm">{key}s</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 p-4 md:justify-start">
            {
            squad[key].map((player, index) => (
              <Link 
              className="relative flex flex-col items-center w-32 gap-2 p-2 hover:opacity-70"
              to={`/player/${player.id}`}>
                <img className="object-contain w-20 h-20 rounded-full" src={player.photo} alt="" />
                <span className="text-xs font-semibold whitespace-nowrap">{player.name}</span>
                <span className="absolute top-0 left-0 w-8 p-2 text-xs font-semibold text-center text-white bg-black rounded-full">{player.number}</span>

              </Link>

            ))
            }
            

          </div>
        </div>
       ))
      }
    </div>
  )
}

export default TeamSquad;