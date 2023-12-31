import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { getFixturesDrawPct } from "../../../../utils/getFixturesDrawPct";
import { Fixture } from "../../../../../../types/types";

type H2HWinPctCircleBarHomeProps = {
  headToHeadFixtures: Fixture[];
}

function H2HDrawPctCircleBar ({headToHeadFixtures} : H2HWinPctCircleBarHomeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <CircularProgressbar className="w-10 font-semibold md:w-16"
      text={`${getFixturesDrawPct(headToHeadFixtures)}%`} 
      value={getFixturesDrawPct(headToHeadFixtures)}
      strokeWidth={12}
      styles={buildStyles({
        rotation: 0,
        textSize: '18px',
        pathTransitionDuration: 1,
        textColor: '#999999',
        trailColor: '#C4BCA7',
        backgroundColor: '#999999',
        pathColor: '#999999'
      })}
      />

      <span className="p-1 text-xs font-semibold text-center text-white bg-gray-400 rounded-md">Draw %</span>
    </div>
  )
}

export default H2HDrawPctCircleBar;
