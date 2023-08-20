export type PlayerStatistics = {
  cards: {
    yellow: number | null;
    yellowred: number | null;
    red: number | null;
  };
  dribbles: {
    attempts: number | null;
    success: number | null;
    past: number | null;
  };
  duels: {
    total: number | null;
    won: number | null;
    
  };
  fouls: {
    drawn: number | null;
    committed: number | null;
  };
  games: {
    appearances: number | null;
    captain: boolean;
    lineups: number | null;
    minutes: number | null;
    number: number | null;
    position: string;
    rating: string | null;
  };
  goals: {
    assists: number | null;
    condeded: number | null;
    saves: number | null;
    total: number | null;

  };
  league: {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;

  };
  passes: {
    accuracy: number | null;
    key: number | null;
    total: number | null;

  };
  penalty: {
    committed: number | null;
    missed: number | null;
    saved: number | null;
    scored: number | null;
    won: number | null;

  };
  shots: {
    on: number | null;
    total: number | null;
  };
  substitutes: {
    bench: number | null;
    in: number | null;
    out: number | null;

  };
  tackles: {
    blocks: number | null;
    interceptions: number | null;
    total: number | null;
  };
  team: {
    id: number;
    logo: string;
    name: string;
  };
}