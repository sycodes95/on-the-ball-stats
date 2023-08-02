
type PlayerCardProps = {
  number: number;
  teamLogo: string;
  playerPhoto: string;
  playerName: string;
  playerID: number;
  topValue: number;
  topValueColor: string
}

function PlayerCard ({ 
  number, 
  teamLogo, 
  playerPhoto, 
  playerName, 
  playerID, 
  topValue,
  topValueColor
}: PlayerCardProps) {


  return (
    
    <div className="flex items-center justify-between w-full gap-2 p-1 transition-all border-l-4 border-black border-opacity-25 rounded-sm shadow-md shadow-slate-300 hover:cursor-pointer hover:bg-black hover:bg-opacity-20">
      
      <div className="flex items-center gap-2 text-xs text-gray-700 whitespace-nowrap">
        <p className="w-6 whitespace-nowrap"> # {number}</p>
        <img className="h-6" src={teamLogo} alt="league-logo"/>
        <img className="h-6 rounded-full" src={playerPhoto} alt="player-photo" />
        <p>{playerName}</p>
      </div>
      
      <div className="flex items-center ">
        <p className={`${topValueColor} flex items-center h-6 pl-2 pr-2 text-2xl font-bold rounded-md whitespace-nowrap font-display`}>
          {topValue}
        </p>
      </div>
      
      
    </div>
    
    
  )
}

export default PlayerCard;