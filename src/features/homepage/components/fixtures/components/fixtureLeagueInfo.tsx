type FixtureHeaderProps = {
  leagueLogo: string;
  leagueName: string;
  countryFlag: string;
}

function FixtureHeader ({leagueLogo, leagueName, countryFlag} : FixtureHeaderProps) {
  return (
    <div className="flex justify-between w-full gap-2">

      <div className="flex items-center gap-2">
        <div className="relative flex w-full gap-1 overflow-hidden">
          <img className="object-contain w-4 h-4" src={leagueLogo} alt="team-icon"/>
          <p className="flex items-center pl-2 pr-2 text-xs font-semibold rounded-md ">{leagueName.toUpperCase()}</p>
        </div>
      </div>
      {
      countryFlag &&
      <div>
        <img className="object-contain w-4 h-4 rounded-md" src={countryFlag} alt="" />
      </div>
      }
      
    </div>
  )
}

export default FixtureHeader;