import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTeamStatistics } from "../features/team/services/getTeamStatistics";
import { TeamInfo, TeamSquadType, TeamStatistics } from "../features/team/types";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import TeamHeader from "../features/team/components/teamHeader/teamHeader";
import { getTeamInfo } from "../features/team/services/getTeamInfo";
import { season } from "../constants/season";
import { getTeamFixtures } from "../features/team/services/getTeamFixtures";
import { Fixture, Player } from "../types/types";
import { getLeagueTeamStandings } from "../services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/league/components/leagueTeamStandings/leagueTeamStandings";
import TeamVenue from "../features/team/components/teamVenue/teamVenue";
import TeamSeasonStats from "../features/team/components/teamSeasonStats/teamSeasonStats";
import TeamFixtures from "../features/team/components/teamFixtures/teamFixtures";
import { getPlayersStatisticsByFixtureId } from "../features/player/services/getPlayersStatisticsByFixtureId";
import { getPlayersStatsByTeamId } from "../features/team/services/getPlayersStatsByTeamId";
import { getTeamSquad } from "../features/team/services/getTeamSquad";
import TeamSquad from "../features/team/components/teamSquad/teamSquad";



function TeamPage () {
  const teamViewOptions = [
    'Overview',
    'Squad',
  ];


  const { teamId, leagueId } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics | null>(null)
  const [teamInfo, setTeamInfo] = useState<TeamInfo | null>(null)
  const [teamFixtures, setTeamFixtures] = useState<Fixture[] | []>([])
  const [teamStandings, setTeamStandings] = useState(null)
  const [teamViewMode, setTeamViewMode] = useState(teamViewOptions[0])
  const [teamPlayersStats, setTeamPlayersStats] = useState<Player[] | []>()
  const [teamSquad, setTeamSquad] = useState<TeamSquadType | null>(null)

  
  
  useEffect(()=>{
    if(teamId && leagueId){
      setIsLoading(true)
      Promise.all([
        getTeamStatistics(Number(teamId), Number(leagueId)),
        getTeamInfo(Number(teamId)),
        getTeamFixtures(Number(teamId), season),
        getLeagueTeamStandings(Number(leagueId), season),
        getPlayersStatsByTeamId(Number(teamId), season),
        getTeamSquad(Number(teamId))
      ])
      .then(([teamStatisticsData, teamInfoData, teamFixturesData, leagueTeamStandingsData, teamPlayersStatsData, teamSquadData]) => {
        setTeamStatistics(teamStatisticsData)
        setTeamInfo(teamInfoData)
        setTeamFixtures(teamFixturesData)
        setTeamStandings(leagueTeamStandingsData)
        setTeamPlayersStats(teamPlayersStatsData)
        setTeamSquad(teamSquadData)
        setIsLoading(false)
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
      <>
      
      <div className="flex flex-col w-full gap-8 p-2 text-black">
        {
        teamStatistics &&
          <TeamHeader teamStatistics={teamStatistics}/>
        }

        <div className="h-12 ">
          {
          teamViewOptions.map((option, index) => (
            <button className={` w-20 h-full
            border-b-2 border-black border-opacity-0 text-black text-opacity-80
            ${teamViewMode === option && 'border-opacity-100 text-black text-opacity-100 font-semibold'}
            `}
            onClick={()=> setTeamViewMode(option)}
            key={index}>
              <span>{option}</span>
            </button>
          ))
          }
        </div>

        {
        teamViewMode === 'Overview' && 
          <div className="flex flex-col gap-8">
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
            teamFixtures.length > 0 &&
            <TeamFixtures fixtures={teamFixtures}/>
            }
            
            {
            teamStandings &&
            <LeagueTeamStandings leagueId={Number(leagueId)} leagueTeamStandings={teamStandings} teamId={Number(teamId)}/>
            }
          </div>
        }

        {
        teamViewMode === 'Squad' && teamSquad &&
          <div className="flex flex-col gap-4">
            <TeamSquad teamSquad={teamSquad} />
          </div>
        }

      </div>
        
      </>
      }
    </div>
  )
}

export default TeamPage;