type FixtureStatusProps = {
  fixtureStatus: {
    elapsed: number | null;
    long: string | null;
    short: string | null;
  }
}


function FixtureStatus ({ fixtureStatus }: FixtureStatusProps) {
  const date = new Date()
  return (
    <div className="flex items-center">
      {
      fixtureStatus.short === 'FT' && 
      <p>FT</p>
      }
      {
      fixtureStatus.short !== 'FT' && fixtureStatus.short !== 'NS' &&
      <div className="flex items-center justify-center w-full gap-2 ">
        <p className="w-2 h-2 bg-red-600 rounded-full"></p>
        <p>Live</p>
      </div>
      
      }
      {
      fixtureStatus.short === 'NS' && 
      <p>Not Started</p>
      }
    </div>
  )
}

export default FixtureStatus;