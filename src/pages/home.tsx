import { useEffect, useState } from "react";
import { top5Leagues } from "../constants/top5Leagues";
import { getLeagueTopScorers } from "../features/leagueDetails/services/getLeagueTopScorers";
import { Player } from "../types/types";
import { ResponsiveBar, ResponsiveBarCanvas } from "@nivo/bar";

function Home () {

  // const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([])
  const [topGoalContributors, setTopGoalContributors] = useState<Player[]>([])


  useEffect(()=>{
    const fetchTopPlayers = async () => {
      const allTopPlayers = await Promise.all(
        top5Leagues.map(async (league) => {
          const data = await getLeagueTopScorers(league.id);
          return data.response;
        })
      );

      const topPlayers = allTopPlayers.flat()
      const sortedPlayers = topPlayers.sort((a: Player, b: Player) => 
        (b.statistics[0].goals.total + b.statistics[0].goals.assists) 
        - (a.statistics[0].goals.total + a.statistics[0].goals.assists)
      ) 
      const top10Players = sortedPlayers.splice(0, 10)
      console.log(top10Players);
      const formattedData = top10Players.map((player: Player) => {
        return {
          player : player.player.name,
          clubLogo : player.statistics[0].team.logo,
          clubID : player.statistics[0].team.id,
          leagueLogo : player.statistics[0].league.logo,
          leagueID : player.statistics[0].league.id,
          goals : player.statistics[0].goals.total,
          assists: player.statistics[0].goals.assists
        }
      })
      // setTopGoalContributors(formattedData.reverse());
      setTopGoalContributors(top10Players)
    };
  
    fetchTopPlayers();
  },[])

  useEffect(()=> {
    console.log(topGoalContributors);
  },[topGoalContributors])

  const returnContributionWidthPct = (player: Player) => {
    const highestContribution = topGoalContributors[0].statistics[0].goals.total + topGoalContributors[0].statistics[0].goals.assists;
    const currentContribution = player.statistics[0].goals.total + player.statistics[0].goals.assists;
    return `${((currentContribution / highestContribution) * 100).toFixed(0)}%`
  }

  const returnSubContributionWidthPct = (contributions: number, subcontribution: number) => {
    console.log(`${((subcontribution / contributions) * 100).toFixed(0)}%`);
    return `${((subcontribution / contributions) * 100).toFixed(0)}%`
  }

  return (
    <div className="flex flex-col w-full gap-4 p-4 text-primary">
      <p className="text-black">TOP PLAYERS</p>
      <div className="flex flex-col w-full gap-2 p-4 border rounded-md shadow-lg border-slate-300 shadow-slate-300">
      {
      topGoalContributors && topGoalContributors.length &&
      topGoalContributors.map((player: Player, index) => (
        <div className="flex items-center h-6 gap-2 text-xs">
          <div className="flex items-center h-6 gap-2">
            <p className="w-4 text-center text-primary">{index + 1}</p>
            <img className="h-full rounded-full w-fit" src={player.statistics[0].team.logo} alt="team-icon"/>
            <img className="h-full rounded-full w-fit" src={player.player.photo} alt="player-photo"/>
            <div className="w-44 whitespace-nowrap min-w-max">{player.player.name}</div>
          </div>
         
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 flex items-center h-full"
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
          <div className="flex items-center justify-center w-8 h-full p-1 bg-yellow-300 rounded-sm">
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

export default Home;