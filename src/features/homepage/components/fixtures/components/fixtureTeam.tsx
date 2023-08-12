type FixtureTeamProps = {
  teamLogo: string;
  teamName: string;
  side: string;
}


function FixtureTeam ({teamLogo, teamName, side} : FixtureTeamProps) {
  return (
    <>
    {
    side === 'home' ?
    <div className={`flex flex-col md:justify-end w-full items-center h-full gap-2 md:flex-row`}>

      <div className="flex items-center w-8 h-8 md:hidden ">
        <img className="object-contain" src={teamLogo} alt="Away team logo"/>
      </div>
      
      <div className="relative w-full h-4 overflow-hidden text-ellipsis whitespace-nowrap">
        <span className={`text-center min-w-min absolute right-1/2 translate-x-1/2 top-0 md:right-0 md:-translate-x-0 
        ${side === 'home' ? 'md:text-right' : 'md:text-left'}`}>{teamName}</span>
      </div>

      <div className="items-center hidden w-8 h-8 md:flex ">
        <img className="object-contain" src={teamLogo} alt="Away team logo"/>
      </div>
      
    </div>

    :
    
    <div className={`flex flex-col items-center h-full gap-2 md:flex-row w-full overflow-hidden`}>
    
      <div className="flex items-center w-8 h-8">
        <img className="object-contain" src={teamLogo} alt="Away team logo"/>
      </div>
      <div className="relative w-full h-4">
        <span className={`text-center whitespace-nowrap min-w-min absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-0 top-0 
        ${side === 'home' ? 'md:text-right' : 'md:text-left'}`}>{teamName}</span>
      </div>
      
    </div>


    }

    </>
    
  )
}

export default FixtureTeam;