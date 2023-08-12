type FixtureScore = {
  homeGoals: number;
  awayGoals: number;
}

function FixtureScore ({homeGoals, awayGoals} : FixtureScore) {
  return (
    <div className="flex items-center h-8 gap-2">
      <p className="flex items-center justify-center w-8 h-full text-lg font-semibold text-black border rounded-md shadow-md text-md shadow-slate-300 border-slate-300">{homeGoals}</p>
      <p className="flex items-center justify-center w-8 h-full text-lg font-semibold text-black border rounded-md shadow-md border-slate-300 text-md shadow-slate-300">{awayGoals}</p>
    </div>
  )
}

export default FixtureScore;