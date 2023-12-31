import PlayerCard from "../../../../components/ui/playerCard";
import { bgMain } from "../../../../constants/colors";
import { Player } from "../../../../types/types";

type LeagueTopAssistsProps = {
  leagueTopAssists: Player[]
}

function LeagueTopAssists ({ leagueTopAssists }: LeagueTopAssistsProps) {
  return (
    <div className={`flex flex-col w-full gap-2 p-4 ${bgMain}`}>
      <p className="text-xl text-primary font-display"> TOP ASSISTS</p>
      <div className="grid w-full h-full grid-cols-1 gap-y-1 gap-x-8 md:grid-flow-col md:grid-cols-2 grid-rows-10">
      {
      leagueTopAssists && leagueTopAssists.length &&
      leagueTopAssists.map((player, index) => (
        <PlayerCard 
        number={index + 1}
        teamLogo={player.statistics[0].team.logo}
        playerPhoto={player.player.photo}
        playerName={player.player.name}
        playerID={player.player.id}
        topValue={player.statistics[0].goals.assists ? player.statistics[0].goals.assists : 0}
        topValueColor={`bg-blue-400`}
        teamName={player.statistics[0].team.name}
        leagueId={player.statistics[0].league.id}
        teamId={player.statistics[0].team.id}
        key={index}/>
      ))
      }
      </div>
    </div>
  )
}

export default LeagueTopAssists;