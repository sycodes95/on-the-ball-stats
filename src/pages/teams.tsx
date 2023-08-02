// import { useEffect, useState } from "react";
// import { getTeams } from "../features/teams/services/getTeams";
// import { topLeagueIds } from "../features/leagues/constants";
// import { getLeagues } from "../features/leagues/services/getLeagues";

// type League = {
//   country: {name : string, code: string, flag: string},
//   league: {id: number, name: string, type: string, logo: string},
//   seasons: []
// }

// function Teams () {
//   const [isLoading, setIsLoading] = useState(false)
//   const [leagues, setLeagues] = useState<League[]>([])

//   useEffect(()=> {  

//     setIsLoading(true)

//     getLeagues()
//     .then(data => {
//       setIsLoading(false)
//       if (data === "N/A") {
//         setLeagues([]);
//       } else {
//         const topLeagues = data.filter(data => topLeagueIds.some(league => league.id === data.league.id))
//         setLeagues(topLeagues);
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
    
//   },[])
//   useEffect(()=> {
//     getTeams()
//   },[])
//   return (
//     <div className="w-full">
//       <div id="league-nav" className="grid grid-cols-4 p-2 bg-emerald-500 rounded-b-md">
        
//       {
//       leagues && leagues.length && 
//       leagues.map((data, index) => (
//         <div className="flex items-center h-6 gap-2" key={index}>
//           <div>
//             <img className="h-4 rounded-sm" src={data.country.flag} />
//           </div>
//           <div className="text-xs font-semibold text-white">
//             <p>{data.league.name}</p>
//           </div>

//         </div>
//       ))
//       }
//       </div>
//     </div>
//   )
// }

// export default Teams;