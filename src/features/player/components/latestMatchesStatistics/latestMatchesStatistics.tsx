import { RotatingSquare } from "react-loader-spinner";
import { PlayerStatisticsForAllFixtures } from "../../types/types";
import { Link } from "react-router-dom";
import { formatYMD } from "../../../../utils/formatYMD";
import { bgMain } from "../../../../constants/colors";

type LatestMatchesStatisticsProps = {
  playerStatisticsForAllFixtures: PlayerStatisticsForAllFixtures[] | [];
  playerStatisticsForAllFixturesIsLoading: boolean;
}

function LatestMatchesStatistics ({
  playerStatisticsForAllFixtures, 
  playerStatisticsForAllFixturesIsLoading
} : LatestMatchesStatisticsProps) {
  
  return (
    <div className={`flex flex-col w-full gap-4 ${bgMain} p-4`}>
      <div className="flex items-center h-8 gap-2 font-semibold border-b-2 border-stone-300">
        <span className="text-xl font-semibold text-black font-display">LATEST MATCHES</span>
        {
        playerStatisticsForAllFixturesIsLoading && playerStatisticsForAllFixtures.length === 0 &&
        <RotatingSquare
        height="32"
        width="32"
        color="#999999"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
        }
      </div>
      {
      playerStatisticsForAllFixtures.length > 0 &&
      <div className="flex flex-col w-full overflow-x-scroll">
        <table className="overflow-x-scroll">
          <thead>
            <tr className="h-12 font-semibold text-left text-black">
              <th className="min-w-69">Date</th>
              <th className="p-2">VS</th>
              <th className="w-12 text-center">M</th>
              <th className="w-12 text-center">G</th>
              <th className="w-12 text-center">A</th>
              <th className="w-12 text-center">Y</th>
              <th className="w-12 text-center">R</th>
              <th className="w-12 text-center">Rating</th>
            </tr>
          </thead>

          <tbody>
            {
            playerStatisticsForAllFixtures.map((data, index) => (
              <tr className="w-full h-12 font-semibold " key={index}>
                <td className="text-gray-400 whitespace-nowrap w-36">
                  {formatYMD(new Date(data.fixture.date))}
                  </td>
                <td className="text-center">
                  <Link to={`/fixture-statistics/${data.fixture.id}`} 
                  className="flex items-center gap-2 p-2 min-w-100 hover:opacity-70">
                    <img className="object-contain w-6 h-6" src={data.opposingTeam.logo} alt="opposing team logo" />
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">{data.opposingTeam.name}</span>
                  </Link>
                </td>
                <td className="text-center">{data.statistics[0].games.minutes}</td>
                <td className="text-center">{data.statistics[0].goals.total ? data.statistics[0].goals.total : 0}</td>
                <td className="text-center">{data.statistics[0].goals.assists ? data.statistics[0].goals.assists : 0}</td>
                <td className="text-center">{data.statistics[0].cards.yellow ? data.statistics[0].cards.yellow : 0}</td>
                <td className="text-center">{data.statistics[0].cards.red ? data.statistics[0].cards.red : 0}</td>
                <td className="">
                  <div className="flex justify-center ">
                  <span className="w-8 text-center text-white bg-gray-500 rounded-lg text-primary">{data.statistics[0].games.rating ? data.statistics[0].games.rating : 0}</span>
                  </div>
                  
                </td>

              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      }

      {
      !playerStatisticsForAllFixturesIsLoading && playerStatisticsForAllFixtures.length === 0 &&
      <div className="flex items-center justify-center w-full h-full text-center">No available matches</div>
      }
      
    </div>
  )
}

export default LatestMatchesStatistics;