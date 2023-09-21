import { Link } from "react-router-dom";
import { getURLFriendlyString } from "../../../../../utils/getURLFriendlyString";
import TeamLink from "../../../../../components/links/teamLink";
import LazyLoad from "react-lazy-load";

type TableRowProps = { 
  description: string;
  rank : number;
  teamLogo: string;
  teamName: string;
  played: number;
  win: number;
  draw: number;
  lose: number;
  goalsFor: number;
  goalsAgainst: number;
  goalsDiff: number;
  points: number;
  form: string;
  teamId: number;
  leagueId: number;
  highlightRow: boolean;
  
}

function TableRow ({
  description,
  rank,
  teamLogo,
  teamName,
  played,
  win,
  draw,
  lose,
  goalsFor,
  goalsAgainst,
  goalsDiff,
  points,
  form,
  teamId,
  leagueId,
  highlightRow
}: TableRowProps) {
  return (
    <tr className={`hover:bg-stone-300 hover:bg-opacity-80 
    ${highlightRow && 'bg-emerald-200'}

    ${description && !highlightRow ? 'bg-yellow-300 bg-opacity-30 border-l-2 border-stone-400  border-opacity-100' : 'border-l-2 border-white  border-opacity-0'}

    
    `}>
      <td className="flex items-center h-8">
        <span className="text-center rounded-l-sm w-32px">{rank}</span>
        <TeamLink
        className="flex items-center hover:underline"
        teamId={teamId}
        teamName={teamName}
        >
          <LazyLoad offset={100} >
            <img className="object-contain w-8 h-8 p-2" src={teamLogo} alt="team-logo"/>
          </LazyLoad>
          <span className="overflow-hidden whitespace-nowrap text-ellipsis">{teamName}</span>
        </TeamLink>
        
      </td>
      <td className="text-center ">
        <span>{played}</span>
      </td>
      <td className="text-center">
        <span>{win}</span>
      </td>
      <td className="text-center">
        <span>{draw}</span>
      </td>
      <td className="text-center">
        <span>{lose}</span>
      </td>
      <td className="text-center ">
        <span>{goalsFor}</span>
      </td>
      <td className="text-center">
        <span>{goalsAgainst}</span>
      </td>
      <td className="text-center">
        <span>{goalsDiff}</span>
      </td>
      <td className="text-center">
        <span>{points}</span>
      </td>
      <td className="text-center ">
        <div className="grid w-32 grid-cols-5 gap-1 pl-1 pr-1">
        {
        form && form.length > 0 &&
        Array.from(form).map((result, index) => (
          <span className={`
          w-5 rounded-md text-white text-xs text-center
          ${result.toLowerCase() === 'w'&& 'bg-emerald-400'}
          ${result.toLowerCase() === 'l' && 'bg-red-400'}
          ${result.toLowerCase() === 'd' && 'bg-gray-400'}
          `}
          key={index}>{result}</span>
        ))
        }
        </div>
      </td>


    </tr>
  )
}

export default TableRow;