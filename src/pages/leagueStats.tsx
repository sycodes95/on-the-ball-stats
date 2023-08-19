import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { getLeagueInfo } from "../features/leagueStats/services/getLeagueInfo";
import LeagueHeader from "../features/leagueStats/components/leagueHeader/leagueHeader";
import { League } from "./leagues";
import LeagueTopScorers from "../features/leagueStats/components/leagueTopScorers/leagueTopScorers";
import { TeamStanding } from "../features/leagueStats/types/types";
import { getLeagueTopAssists } from "../features/leagueStats/services/getLeagueTopAssists";
import LeagueTopAssists from "../features/leagueStats/components/leagueTopAssists/leagueTopAssists";
import { getLeagueTeamStandings } from "../features/leagueStats/services/getLeagueTeamStandings";
import LeagueTeamStandings from "../features/leagueStats/components/leagueTeamStandings/leagueTeamStandings";
import '../features/leagueStats/styles/styles.css'
import { Player } from "../types/types";
import { Oval } from "react-loader-spinner";
import { season } from "../constants/season";

function LeagueStats () {
  const [loading, setLoading] = useState(true);
  const [leagueTopScorers, setLeagueTopScorers] = useState<Player[]>([])
  const [leagueTopAssists, setLeagueTopAssists] = useState<Player[]>([])
  const [leagueTeamStandings, setLeagueTeamStandings] = useState<TeamStanding[]>([])
  const [leagueInfo, setLeagueInfo] = useState<League | null>(null)

  const { leagueId } = useParams()

  

  useEffect(() => {
    Promise.all([
      getLeagueInfo(Number(leagueId)),
      getLeagueTopScorers(Number(leagueId), season),
      getLeagueTopAssists(Number(leagueId), season),
      getLeagueTeamStandings(Number(leagueId), season),
    ])
    .then(([infoData, topScorersData, topAssistsData, teamStandingsData]) => {
      setLeagueInfo(infoData.response[0]);
      setLeagueTopScorers(topScorersData.response);
      setLeagueTopAssists(topAssistsData.response);
      setLeagueTeamStandings(teamStandingsData);
      setLoading(false); // Set loading to false after all fetches are complete
    })
    .catch((err) => console.error(err));
  }, [leagueId]);
  
  useEffect(()=> {
  },[leagueTeamStandings])

  const hasLeagueTopScorers = !loading && leagueTopScorers.length > 0;
  const hasLeagueTopAssists = !loading && leagueTopAssists.length > 0;
  const hasLeagueTeamStadnings = !loading && leagueTeamStandings.length > 0;
  return (
    <div className="flex flex-col w-full pb-16 text-black">
      {
      loading &&
      <div className="flex items-center justify-center w-full h-full text-black">
      <Oval
      height={80}
      width={80}
      color="#A5B2BE"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#A9A9A9"
      strokeWidth={4}
      strokeWidthSecondary={4}
      />
      </div>
      }
      {
      !loading && leagueInfo && 
      <LeagueHeader leagueInfo={leagueInfo}/>
      }
      {
      !loading &&
      <>
      {
      hasLeagueTeamStadnings && 
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
export default LeagueStats;