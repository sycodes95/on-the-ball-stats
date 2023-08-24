type FixtureScore = {
  homeGoals: number;
  awayGoals: number;
}

function FixtureScore ({homeGoals, awayGoals} : FixtureScore) {
  return (
    <div className="flex items-center h-8 gap-2">
      <p className="flex items-center justify-center w-8 h-full text-xs font-semibold text-black border rounded-md shadow-md shadow-stone-300 border-stone-400">{homeGoals}</p>
      <p className="flex items-center justify-center w-8 h-full text-xs font-semibold text-black border rounded-md shadow-md border-stone-400 shadow-stone-300">{awayGoals}</p>
    </div>
  )
}

export default FixtureScore;