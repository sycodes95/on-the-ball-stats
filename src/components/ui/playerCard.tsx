
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
    
    <div className="flex items-center justify-between w-full h-8 gap-2 transition-all border-black border-opacity-25 rounded-sm shadow-md shadow-slate-300 hover:cursor-pointer hover:bg-slate-300 hover:bg-opacity-70">
      
      <div className="flex items-center h-full gap-2 text-xs text-gray-700 whitespace-nowrap">
        <p className="w-4 text-center whitespace-nowrap">{number}</p>
        <div className="flex items-center justify-center w-6 h-6">
          <img className="object-fit" src={teamLogo} alt="league-logo"/>
        </div>
        <img className="object-contain h-6 rounded-full" src={playerPhoto} alt="player-photo" />
        <p>{playerName}</p>
      </div>
      
      <div className="flex items-center ">
        <p className={`${topValueColor} flex items-center text-white h-6 p-1 w-6 justify-center text-xs font-semibold rounded-md whitespace-nowrap`}>
          {topValue}
        </p>
      </div>
      
      
    </div>
    
    
  )
}

export default PlayerCard;