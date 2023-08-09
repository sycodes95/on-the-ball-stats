import { useSearchParams } from "react-router-dom";
import { Player } from "../../../../types/types";
import { useEffect, useState } from "react";
import ListClubImage from "../../../../components/ui/listClubImage";

type TopCardsProps = {
  topCards: Player[];
  cardType: string;
}

function TopCards ({topCards, cardType}: TopCardsProps) {

  useEffect(()=> {

  },[])
  return (
    <div className="flex flex-col w-full gap-2 p-2 text-xs border rounded-md ">
      <p className="mb-4 text-3xl text-slate-600 font-display">TOP {cardType} CARDS</p>
      <div className="flex flex-col gap-1">
      {
        topCards.map((player: Player, index) => (
        <div className="flex items-center justify-between gap-1 text-xs shadow-md shadow-slate-300">
          <div className="flex items-center h-6 gap-2">
            <p className="w-4 text-center text-primary">{index + 1}</p>
            <ListClubImage src={player.statistics[0].team.logo}/>
            <img className="h-full rounded-full w-fit" src={player.player.photo} alt="player-photo"/>
            <div className="flex items-center w-40 h-full whitespace-nowrap min-w-max">{player.player.name}</div>
          </div>
         
          <div className="relative w-8 h-full overflow-hidden min-w-fit">
            <p className={`flex justify-center items-center h-full p-2 font-semibold transition-all duration-500 
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