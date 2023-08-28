import { Player } from "../../../../types/types";

type PlayerDetailsProps = {
  playerDetails: Player;
}

function PlayerInfo ({playerDetails} : PlayerDetailsProps) {

  const playerDetailsMap = [
    {title: 'Age', value: playerDetails?.player.age},
    {title: 'Height', value: playerDetails?.player.height},
    {title: 'Weight', value: playerDetails?.player.weight},
    {title: 'Nationality', value: playerDetails?.player.nationality},
    {title: 'Birthplace', value: playerDetails?.player.birth.country},
    {title: 'Position', value: playerDetails?.statistics[0].games.position},
  ];

  return (
    <div className="grid grid-cols-3 gap-8 md:grid-cols-6 ">
      {
        playerDetailsMap.filter(details => details.value).map((details, index) => (
          <div className="flex flex-col items-center w-full gap-2" key={index}>
            <span className="w-full p-2 text-xs font-semibold text-center border-b text-primary border-stone-300">{details.title}</span>
            <span className="flex items-center justify-center w-full h-8 text-sm font-semibold text-black rounded-2xl ">{details.value}</span>
          </div>
        ))
      }
    </div>
    
  )
}

export default PlayerInfo;