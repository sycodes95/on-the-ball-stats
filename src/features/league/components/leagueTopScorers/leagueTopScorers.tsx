import PlayerCard from "../../../../components/ui/playerCard";
import { Player } from "../../../../types/types";

type LeagueTopScorersProps = {
  leagueTopScorers: Player[]
}

function LeagueTopScorers ({ leagueTopScorers }: LeagueTopScorersProps) {
  console.log(leagueTopScorers);
  return (
    <div className="flex flex-col w-full gap-2 p-2">
      <p className="text-xl text-primary font-display"> TOP SCORERS</p>
      <div className="grid w-full h-full grid-cols-1 gap-y-1 gap-x-8 md:grid-flow-col md:grid-cols-2 grid-rows-10">
      {
      leagueTopScorers && leagueTopScorers.length &&
      leagueTopScorers.map((player, index) => (
        <PlayerCard 
        number={index + 1}
        teamLogo={player.statistics[0].team.logo}
        playerPhoto={player.player.photo}
        playerName={player.player.name}
        playerID={player.player.id}
        topValue={player.statistics[0].goals.total ? player.statistics[0].goals.total : 0}
        topValueColor={`bg-emerald-500`}
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

export default LeagueTopScorers;