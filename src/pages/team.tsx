import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamStatistics } from "../features/team/services/getTeamStatistics";
import { TeamInfo, TeamStatistics } from "../features/team/types";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import LeagueHeader from "../features/league/components/leagueHeader/leagueHeader";
import TeamHeader from "../features/team/components/teamHeader/teamHeader";
import { getTeamInfo } from "../features/team/services/getTeamInfo";
import { season } from "../constants/season";
import { getTeamFixtures } from "../features/team/services/getTeamFixtures";
import { Fixture } from "../types/types";
import { TeamStanding } from "../features/league/types/types";
import { getLeagueTeamStandings } from "../services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/league/components/leagueTeamStandings/leagueTeamStandings";
import TeamVenue from "../features/team/components/teamVenue/teamVenue";
import TeamSeasonStats from "../features/team/components/teamSeasonStats/teamSeasonStats";



function TeamPage () {
  const { teamId, leagueId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics | null>(null)
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null)
  const [teamFixtures, setTeamFixtures] = useState<Fixture[] | []>([])
  const [teamStandings, setTeamStandings] = useState(null)
  
  useEffect(()=>{
    if(teamId && leagueId){
      setIsLoading(true)
      Promise.all([
        getTeamStatistics(Number(teamId), Number(leagueId)),
        getTeamInfo(Number(teamId)),
        getTeamFixtures(Number(teamId), season),
        getLeagueTeamStandings(Number(leagueId), season)
      ])
      .then(([teamStatisticsData, teamInfoData, teamFixturesData, leagueTeamStandingsData]) => {
        setTeamStatistics(teamStatisticsData)
        setTeamInfo(teamInfoData)
        setTeamFixtures(teamFixturesData)
        setTeamStandings(leagueTeamStandingsData)
        setIsLoading(false)
      })
    }
  },[teamId, leagueId])  

  useEffect(()=> {
    console.log(teamStatistics);
    console.log(teamInfo);
    console.log(teamFixtures);
    console.log(teamStandings);

  },[teamStatistics, teamInfo])
  return (
    <div className="flex flex-col w-full gap-4 text-primary">
      {
      isLoading ? 
      <div className="flex items-center justify-center w-full h-full">
        <OvalLoadingSpinner/>
      </div>
      :
      <>
      
      <div className="flex flex-col w-full gap-8 p-2 text-black">
      
      {
      teamStatistics &&
        <TeamHeader teamStatistics={teamStatistics}/>
      }
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {
        teamStatistics && 
        <TeamSeasonStats teamStatistics={teamStatistics}/>
        }
        {
        teamInfo && 
        <TeamVenue teamInfo={teamInfo}/>
        }
        

      </div>
      
      {
      teamStandings &&
        <LeagueTeamStandings leagueId={Number(leagueId)} leagueTeamStandings={teamStandings} teamId={Number(teamId)}/>
      }
      </div>
      </>
      }
    </div>
  )
}

export default TeamPage;