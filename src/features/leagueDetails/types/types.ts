

export type TeamStanding = {
  all: {
    draw: number;
    goals: { for: number; against: number };
    lose: number;
    played: number;
    win: number;
  };
  away: {
    draw: number;
    goals: { for: number; against: number };
    lose: number;
    played: number;
    win: number;
  };
  description: string;
  form: string;
  goalsDiff: number;
  group: string;
  home: {
    draw: number;
    goals: { for: number; against: number };
    lose: number;
    played: number;
    win: number;
  };
  points: number;
  rank: number;
  status: string;
  team: {
    id: number;
    logo: string;
    name: string;
  };
  update: string;
}


// export type PlayerStatistics = {
//   cards: {
//     yellow: number;
//     yellowred: number;
//     red: number;
//   };
//   dribbles: {
//     attempts: number;
//     success: number;
//     past: null; // Update 'any' with the appropriate type if possible
//   };
//   duels: {
//     total: number;
//     won: number;
//   };
//   fouls: {
//     drawn: number;
//     committed: number;
//   };
//   games: {
//     appearences: number;
//     lineups: number;
//     minutes: number;
//     number: null | number;
//     position: string;
//   };
//   goals: {
//     total: number;
//     conceded: number;
//     assists: number;
//     saves: null | number;
//   };
//   league: {
//     id: number;
//     name: string;
//     country: string;
//     logo: string;
//     flag: string;
//   };
//   passes: {
//     total: number;
//     key: number;
//     accuracy: number;
//   };
//   penalty: {
//     won: null | number;
//     commited: null | number;
//     scored: number;
//     missed: number;
//     saved: null | number;
//   };
//   shots: {
//     total: number;
//     on: number;
//   };
//   substitutes: {
//     in: number;
//     out: number;
//     bench: number;
//   };
//   tackles: {
//     total: number;
//     blocks: number;
//     interceptions: number;
//   };
//   team: {
//     id: number;
//     logo: string;
//     name: string;
    
//   };
// }
