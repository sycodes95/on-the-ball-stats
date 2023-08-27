export type TeamStatistics = {
  biggest: Biggest;
  cards: Cards;
  clean_sheet: CleanSheet;
  failed_to_score: FailedToScore;
  fixtures: Fixtures;
  goals: Goals;
  league: League;
  lineups: unknown[];
  penalty: Penalty;
  team: Team;

} 

export type TeamInfo = {
  team: { 
    code: string;
    country: string;
    founded: 1901;
    id: number;
    logo: string;
    name: string;
    national: string;
  };
  venue: {
    address: string;
    capacity: number;
    city: string;
    id: number;
    image: string;
    name: string;
    surface: string;
  };
};

export type TeamSquadType = {
  team: {
    id: number,
    name: string,
    logo: string,
  },
  players: TeamSquadTypePlayer[];
};

export type TeamSquadTypePlayer = {
  id: number,
  name: string,
  age: number,
  number: number,
  position: string,
  photo: string
}

type Biggest = {
  goals : {
    against: {
      home: number | null;
      away: number | null;
    };
    for: {
      home: number | null;
      away: number | null;
    };
  };
  loses: {
    home: number | null;
    away: number | null;
  };
  streak: {
    wins: number | null;
    draws: number | null;

  };
  wins: {
    home: number | null;
    away: number | null;
  };
};

type Cards = {
  cards: {
    red: {
      [key: string] : { total: number | null, percentage: number | null }
    };
    yellow: {
      [key: string] : { total: number | null, percentage: number | null }
    };
  };
};

type CleanSheet = {
  away: number | null;
  home: number | null;
  total: number | null;
};

type FailedToScore = {
  away: number | null;
  home: number | null;
  total: number | null;
};

type Fixtures = {
  draws: {
    away: number | null;
    home: number | null;
    total: number | null;
  };
  loses: {
    away: number | null;
    home: number | null;
    total: number | null;
  };
  played: {
    away: number | null;
    home: number | null;
    total: number | null;
  };
  wins: {
    away: number | null;
    home: number | null;
    total: number | null;
  };
};

type Goals = {
  against: {
    average: {
      home: string;
      away: string;
      total: string;
    };
    minute: {
      [key: string] : { total: number | null, percentage: number | null }
    }
    total: {
      away: number | null;
      home: number | null;
      total: number | null;
    };
  };
  for: {
    average: {
      home: string;
      away: string;
      total: string;
    };
    minute: {
      [key: string] : { total: number | null, percentage: number | null }
    }
    total: {
      away: number | null;
      home: number | null;
      total: number | null;
    };
  };
};

type League = {
  country: string;
  flag: string;
  id: number;
  logo: string;
  name: string;
  season: number;
};

type Penalty = {
  missed: {
    total: number | null;
    percentage: string | null;
  };
  scored: {
    total: number | null;
    percentage: string | null;
  };
  total: number | null;
}

type Team = {
  id: number;
  logo: string;
  name: string;
}

  

