// export const getLeaguePlayersAll = async (leagueId: number) => {
//   const currentSeason = new Date().getFullYear()
//   const previousYear = currentSeason - 1
//   const players = []
//   let page = 1
//   let pageTotal: number = 0

//   while(pageTotal === 0 || page < pageTotal){
//     const fetchedPlayers = await fetch(`https://api-football-v1.p.rapidapi.com/v3/players?league=${leagueId}&season=${previousYear}&page=${page}`,{
//       headers: {
//         'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
//         'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST
//       }
//     })
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       if(data) {
//         page++
//         if(!pageTotal) pageTotal = data.paging.total
//       }
//       console.log(page, pageTotal);
//       return data.response
//     })
//     .catch(error => {
//       console.error(error)
//     })

//     players.push(fetchedPlayers)
//   }

//   return players.flat()
  
// }

// export const getLeaguePlayersAll = async (leagueId: number) => {
//   const currentSeason = new Date().getFullYear()
//   const previousYear = currentSeason - 1
//   const players = []
//   let page = 1
//   let pageTotal: number = 0
//   const promises = []

//   while (pageTotal === 0 || page < pageTotal) {
//     promises.push(
//       fetch(
//         `https://api-football-v1.p.rapidapi.com/v3/players?league=${leagueId}&season=${previousYear}&page=${page}`,
//         {
//           headers: {
//             'X-RapidAPI-Key': import.meta.env.VITE_X_RAPID_API_KEY,
//             'X-RapidAPI-Host': import.meta.env.VITE_X_RAPID_API_HOST,
//           },
//         }
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data)
//           if (data) {
//             page++
//             if (!pageTotal) pageTotal = data.paging.total
//           }
//           console.log(page, pageTotal)
//           return data.response
//         })
//         .catch((error) => {
//           console.error(error)
//         })
//     )
//   }

//   const fetchedPlayers = await Promise.all(promises)
//   players.push(...fetchedPlayers)
//   return players
// }


