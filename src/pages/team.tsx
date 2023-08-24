import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamStatistics } from "../features/team/services/getTeamStatistics";
import { TeamStatistics } from "../features/team/types";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import LeagueHeader from "../features/leagueStats/components/leagueHeader/leagueHeader";
import TeamHeader from "../features/team/components/teamHeader/teamHeader";



function Team () {
  const { teamId, leagueId, teamName } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics | null>(null)
  useEffect(()=>{
    if(teamId && leagueId){
      setIsLoading(true)
      getTeamStatistics(Number(teamId), Number(leagueId)).then(data => {
        setIsLoading(false)
        setTeamStatistics(data)
      })
    }
  },[teamId, leagueId])  
  return (
    <div className="flex flex-col w-full gap-4 text-primary">
      {
      isLoading ? 
      <div className="flex items-center justify-center w-full h-full">
        <OvalLoadingSpinner/>
      </div>
      :
      <div className="flex flex-col w-full gap-8 p-2 text-black">
      {
      teamStatistics &&
        <TeamHeader teamStatistics={teamStatistics}/>
      }
      </div>
      
      }
    </div>
  )
}

export default Team;