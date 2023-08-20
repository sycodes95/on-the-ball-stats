
import redCard from '../../../assets/images/red-card.png'
import yellowCard from '../../../assets/images/yellow-card.png'
import substitutionIcon from '../../../assets/images/substitution.png'
import soccerBallGoalIcon from '../../../assets/images/soccer-ball-goal.png'
type FixtureTimelineEventsImages = {
  [key: string] : string;
}

type TranslateMatchStatisticTypes = {
  [key: string] : string;
}

type PlayerPositionColors = {
  [key: string] : string;
}
// FIXTURE STATS PAGE
export const fixtureViewModeOptions = [
  'H2H',
  'Lineups',
  'Timeline',
  'Stats',
];

// LINEUPS COMPONENT 

export const playerPositionColors : PlayerPositionColors = {
  'F': 'bg-red-600',
  'M': 'bg-pink-600',
  'D': 'bg-blue-600',
  'G': 'bg-orange-600',
};

// TIMELINE COMPONENT
export const fixtureTimelineEventsImages: FixtureTimelineEventsImages = {
  'Yellow Card' : yellowCard,
  'Red Card' : redCard,
  'subst': substitutionIcon,
  'Goal' : soccerBallGoalIcon
}

// STATS COMPONENT
export const translateMatchStatisticTypes : TranslateMatchStatisticTypes = {
  'expected_goals' : 'Expected Goals',
  'Shots insidebox' : 'Shots Inside Box',
  'Shots outsidebox' : 'Shots Outside Box',
  'Passes accurate' : 'Accurate Passes',
}



