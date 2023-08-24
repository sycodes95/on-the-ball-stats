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
  form
}: TableRowProps) {
  return (
    <tr className={`hover:bg-slate-300 hover:bg-opacity-70 
    ${description ? 'bg-yellow-300 bg-opacity-30 border-l-2 border-stone-300  border-opacity-100' : 'border-l-2 border-white  border-opacity-100'}`}>
      <td className="flex items-center h-8">
        <span className="flex items-center justify-center w-6 h-full rounded-l-sm">{rank}</span>
        <img className="h-8 p-2" src={teamLogo} alt="team-logo"/>
        <span className="whitespace-nowrap">{teamName}</span>
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
        Array.from(form).map((result) => (
          <span className={`
          w-5 rounded-md text-white text-xs text-center
          ${result.toLowerCase() === 'w'&& 'bg-emerald-400'}
          ${result.toLowerCase() === 'l' && 'bg-red-400'}
          ${result.toLowerCase() === 'd' && 'bg-gray-400'}
          `}>{result}</span>
        ))
        }
        </div>
      </td>


    </tr>
  )
}

export default TableRow;