import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamStatistics } from "../features/team/services/getTeamStatistics";
import { TeamInfo, TeamStatistics } from "../features/team/types";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import LeagueHeader from "../features/league/components/leagueHeader/leagueHeader";
import TeamHeader from "../features/team/components/teamHeader/teamHeader";
import { getTeamInfo } from "../features/team/services/getTeamInfo";



function TeamPage () {
  const { teamId, leagueId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics | null>(null)
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null)

  
  useEffect(()=>{
    if(teamId && leagueId){
      setIsLoading(true)
      Promise.all([
        getTeamStatistics(Number(teamId), Number(leagueId)),
        getTeamInfo(Number(teamId))
      ])
      .then(([teamStatisticsData, teamInfoData]) => {
        setTeamStatistics(teamStatisticsData)
        setTeamInfo(teamInfoData)
        setIsLoading(false)
      })
    }
  },[teamId, leagueId])  

  useEffect(()=> {
    console.log(teamStatistics);
    console.log(teamInfo);

  },[teamStatistics, teamInfo])
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

export default TeamPage;