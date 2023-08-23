import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamStatistics } from "../features/team/services/getTeamStatistics";
import { TeamStatistics } from "../features/team/types";



function Team () {
  const { teamId, leagueId } = useParams()

  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics | null>(null)
  useEffect(()=>{
    if(teamId && leagueId){
      getTeamStatistics(Number(teamId), Number(leagueId)).then(data => {
        setTeamStatistics(data)
      })
    }
  },[teamId, leagueId])  
  return (
    <div className="flex flex-col text-black">
      {`${teamId}${leagueId}`}
    </div>
  )
}

export default Team;