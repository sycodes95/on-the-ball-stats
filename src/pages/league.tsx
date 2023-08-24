import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { getLeagueInfo } from "../features/league/services/getLeagueInfo";
import LeagueHeader from "../features/league/components/leagueHeader/leagueHeader";
import LeagueTopScorers from "../features/league/components/leagueTopScorers/leagueTopScorers";
import { TeamStanding } from "../features/league/types/types";
import { getLeagueTopAssists } from "../features/league/services/getLeagueTopAssists";
import LeagueTopAssists from "../features/league/components/leagueTopAssists/leagueTopAssists";
import { getLeagueTeamStandings } from "../features/league/services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/league/components/leagueTeamStandings/leagueTeamStandings";
import '../features/league/styles/styles.css'
import { Fixture, Player } from "../types/types";
import { season } from "../constants/season";
import OvalLoadingSpinner from "../components/ui/ovalLoadingSpinner";
import { League } from "./leagues";
import { getLeagueFixtures } from "../features/league/services/getLeagueFixtures";
import LeagueFixtures from "../features/league/components/leagueFixtures/leagueFixtures";

function LeaguePage () {
  const { leagueId } = useParams()

  const [isLoading, setIsLoading] = useState(true);
  const [leagueTopScorers, setLeagueTopScorers] = useState<Player[]>([])
  const [leagueTopAssists, setLeagueTopAssists] = useState<Player[]>([])
  const [leagueTeamStandings, setLeagueTeamStandings] = useState<TeamStanding[]>([])
  const [leagueFixtures, setLeagueFixtures] = useState<Fixture[]>([])
  const [leagueInfo, setLeagueInfo] = useState<League | null>(null)
  
  useEffect(() => {
    Promise.all([
      getLeagueInfo(Number(leagueId)),
      getLeagueTopScorers(Number(leagueId), season),
      getLeagueTopAssists(Number(leagueId), season),
      getLeagueTeamStandings(Number(leagueId), season),
      getLeagueFixtures(Number(leagueId), season)
    ])
    .then(([infoData, topScorersData, topAssistsData, teamStandingsData, fixturesData]) => {
      setLeagueInfo(infoData.response[0]);
      setLeagueTopScorers(topScorersData.response);
      setLeagueTopAssists(topAssistsData.response);
      setLeagueTeamStandings(teamStandingsData);
      setLeagueFixtures(fixturesData)
      setIsLoading(false); // Set loading to false after all fetches are complete
    })
    .catch((err) => console.error(err));
  }, [leagueId]);
  
  useEffect(()=> {
  },[leagueTeamStandings])

  const hasLeagueTopScorers = leagueTopScorers.length > 0;
  const hasLeagueTopAssists = leagueTopAssists.length > 0;
  const hasLeagueTeamStandings = leagueTeamStandings.length > 0;
  const hasLeagueFixtures = leagueFixtures.length > 0;
  return (
    <div className="flex flex-col w-full gap-4 pb-16 text-black">
      {
      isLoading &&
      <div className="flex items-center justify-center w-full h-full text-black">
      <OvalLoadingSpinner />
      </div>
      }
      {
      !isLoading && leagueInfo && 
      <LeagueHeader leagueInfo={leagueInfo}/>
      }
      {
      !isLoading &&
      <>
      {
      hasLeagueFixtures &&
      <LeagueFixtures leagueFixtures={leagueFixtures}/>
      }
      {
      hasLeagueTeamStandings && 
      <LeagueTeamStandings leagueTeamStandings={leagueTeamStandings} leagueID={Number(leagueId)}/>
      }
      {
      hasLeagueTopScorers && 
      <LeagueTopScorers leagueTopScorers={leagueTopScorers} />
      }
      {
      hasLeagueTopAssists && 
      <LeagueTopAssists leagueTopAssists={leagueTopAssists} />
      }
      </>
      }
      
      
    </div>
  )
}
export default LeaguePage;