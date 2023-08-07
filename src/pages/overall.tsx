import { useEffect, useState } from "react";
import { top5Leagues } from "../constants/top5Leagues";
import { getLeagueTopScorers } from "../services/getLeagueTopScorers";
import { Player } from "../types/types";
import { ResponsiveBar, ResponsiveBarCanvas } from "@nivo/bar";
import { getTopGoalContributors, getTopPlayers } from "../features/overall/services/getTopGoalContributors";
import { getTopDefenders } from "../features/overall/services/getTopDefenders";
import { getLeagueTopYellows } from "../services/getLeagueTopYellows";
import { getTopYellows } from "../features/overall/services/getTopYellows";

function Overall () {

  // const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([])
  const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([]);
  const [topDefenders, setTopDefenders] = useState<Player[]>([]);


  useEffect(()=>{
    getTopGoalContributors().then(topPlayers => setTopGoalContributors(topPlayers))
    getTopYellows()
    // getTopDefenders().then(topPlayers => setTopDefenders(topPlayers))
  },[])

  useEffect(()=> {
    console.log(topGoalContributors);
    console.log(topDefenders);
  },[topGoalContributors, topDefenders])

  const returnContributionWidthPct = (player: Player) => {
    
    const highestContribution = topGoalContributors[0].statistics[0].goals.total + topGoalContributors[0].statistics[0].goals.assists;
    const currentContribution = player.statistics[0].goals.total + player.statistics[0].goals.assists;
    return `${((currentContribution / highestContribution) * 100).toFixed(0)}%`
    
  }

  const returnSubContributionWidthPct = (contributions: number, subcontribution: number) => {
    return `${((subcontribution / contributions) * 100).toFixed(0)}%`
  }

  return (
    <div className="flex flex-col w-full gap-4 p-2 text-primary">
      <p className="text-3xl text-slate-600 font-display ">TOP PLAYERS</p>

      <div className="flex flex-col w-full gap-2 p-2 text-xs border rounded-md shadow-lg border-slate-300 shadow-slate-300">
        <div className="flex items-center gap-4 p-2">
          <div className="flex items-center gap-2">
            <p className="w-4 h-4 bg-blue-300"></p>
            <p>Goals</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="w-4 h-4 bg-green-300"></p>
            <p>Assists</p>
          </div>

          <div className="items-center hidden gap-2 md:flex">
            <p className="w-4 h-4 bg-orange-400"></p>
            <p>Total Contributions</p>
          </div>
          
        </div>
        
      {
      topGoalContributors.map((player: Player, index) => (
        <div className="flex items-center h-6 gap-1 text-xs">
          <div className="flex items-center h-6 gap-2">
            <p className="w-4 text-center text-primary">{index + 1}</p>
            <img className="h-full rounded-full w-fit" src={player.statistics[0].team.logo} alt="team-icon"/>
            <img className="h-full rounded-full w-fit" src={player.player.photo} alt="player-photo"/>
            <div className="flex items-center w-40 h-full border-r-4 border-slate-300 whitespace-nowrap min-w-max">{player.player.name}</div>
          </div>
         
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 flex items-center w-0 h-full transition-all duration-500 bg-white"
            style={{width: `
            ${index === 0 ? '100%' : returnContributionWidthPct(player)}
            `}}>
              <div className="flex items-center justify-center h-full bg-blue-300"
              style={{width: returnSubContributionWidthPct(player.statistics[0].goals.total + player.statistics[0].goals.assists, player.statistics[0].goals.total)}}> 
              {player.statistics[0].goals.total}
              </div>
              <div className="flex items-center justify-center h-full bg-green-300"
              style={{width: returnSubContributionWidthPct(player.statistics[0].goals.total + player.statistics[0].goals.assists, player.statistics[0].goals.assists)}}> 
              {player.statistics[0].goals.assists}
              </div>

            </div>
          </div>
          <div className="items-center justify-center hidden w-8 h-full p-1 font-semibold text-white bg-orange-400 rounded-sm md:flex">
            {player.statistics[0].goals.total + player.statistics[0].goals.assists} 
          </div>
        </div>
      ))
      }
      
      {/* <ResponsiveBar
        data={topGoalContributors}
        keys={[
          'goals',
          'assists',
        ]}
        layout="horizontal"
        indexBy="player"
        margin={{ top: 20, right: 120, bottom: 50, left: 120 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'accent' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
       
        borderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1.6
            ]
          ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Goal Contributions',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -40,
            
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                    itemOpacity: 1
                }
              }
            ]
          }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in player: "+e.indexValue}
        
      /> */}
      </div>
    </div>
  )
}

export default Overall;