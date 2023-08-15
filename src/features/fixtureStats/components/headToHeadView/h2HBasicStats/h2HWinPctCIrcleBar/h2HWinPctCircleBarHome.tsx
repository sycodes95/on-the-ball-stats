import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Fixture } from "../../../../../homepage/types/types";
import { getFixturesTeamWinPct } from "../../../../utils/getFixturesTeamWinPct";

type H2HWinPctCircleBarHomeProps = {
  headToHeadFixtures: Fixture[];
}

function H2HWinPctCircleBarHome ({headToHeadFixtures} : H2HWinPctCircleBarHomeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <CircularProgressbar className="w-10 font-semibold md:w-16"
      text={`${getFixturesTeamWinPct(headToHeadFixtures, headToHeadFixtures[0].teams.home.id)}%`} 
      value={getFixturesTeamWinPct(headToHeadFixtures, headToHeadFixtures[0].teams.home.id)}
      strokeWidth={12}
      styles={buildStyles({
        rotation: 0,
        textSize: '18px',
        pathTransitionDuration: 1,
        textColor: '#10b981',
        trailColor: '#d6d6d6',
        backgroundColor: '#10b981',
        pathColor: '#10b981'
      })}
      />

      <span className="p-1 text-xs font-semibold text-center text-white rounded-md bg-emerald-500">Win %</span>
    </div>
  )
}

export default H2HWinPctCircleBarHome;
