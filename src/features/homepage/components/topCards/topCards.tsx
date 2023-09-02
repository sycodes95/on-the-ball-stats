import { Link } from "react-router-dom";
import { Player } from "../../../../types/types";
import ListClubImage from "../../../../components/ui/listClubImage";
import { bgMain } from "../../../../constants/colors";
import { getURLFriendlyString } from "../../../../utils/getURLFriendlyString";

type TopCardsProps = {
  topCards: Player[];
  cardType: string;
}

function TopCards ({topCards, cardType}: TopCardsProps) {

  
  return (
    <div className={`flex flex-col w-full text-xs gap-2 p-2 ${bgMain}`}>
      <div className="h-8 border-b-2 border-stone-300">
        <p className="w-full pl-2 mb-4 text-xl text-black rounded-sm font-display">TOP {cardType} CARDS</p>
      </div>
      <div className="flex flex-col gap-1">
      {
        topCards.map((player: Player, index) => (
        <div className="flex items-center justify-between gap-1 text-xs "
        key={player.player.id}>
          <div className="flex items-center h-6 gap-2">
            <p className="w-4 text-center text-primary">{index + 1}</p>
            <Link className="hover:opacity-70"
            to={`/team/${player.statistics[0].league.id}/${player.statistics[0].team.id}/${getURLFriendlyString(player.statistics[0].team.name)}`}>
              <ListClubImage src={player.statistics[0].team.logo}/>
            </Link>
            <Link className="flex items-center gap-1 hover:underline" to={`/player/${player.player.id}`} >
              <img className="object-contain w-6 h-6 rounded-full" src={player.player.photo} alt="player-photo"/>
              <div className="flex items-center w-40 h-full whitespace-nowrap min-w-max">{player.player.name}</div>
            </Link>
            
          </div>
         
          <div className="relative w-8 h-full overflow-hidden min-w-fit">
            <p className={`flex justify-center items-center h-full p-2 font-semibold rounded-sm transition-all duration-500 
            ${cardType === `YELLOW`? 'bg-yellow-400' : 'bg-red-500'} 
            ${cardType === `YELLOW`? 'text-primary' : 'text-white'}
            `}>
              {cardType === 'YELLOW'? player.statistics[0].cards.yellow : player.statistics[0].cards.red}
            </p>
          </div>
        </div>
      ))
      }
      </div>
      
      </div>
  )
}

export default TopCards;