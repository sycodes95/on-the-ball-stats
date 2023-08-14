type FixtureHeaderProps = {
  leagueLogo: string;
  leagueName: string;
}

function FixtureHeader ({leagueLogo, leagueName} : FixtureHeaderProps) {
  return (
    <div className="flex justify-between w-full gap-2">

      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6 overflow-hidden">
          <img className="object-contain w-full h-full" src={leagueLogo} alt="team-icon"/>
        </div>
        <p className="flex items-center pl-2 pr-2 text-xs font-semibold rounded-md ">{leagueName.toUpperCase()}</p>
      </div>

      
    </div>
  )
}

export default FixtureHeader;