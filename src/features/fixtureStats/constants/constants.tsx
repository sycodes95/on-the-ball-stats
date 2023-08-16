
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

export const fixtureTimelineEventsImages: FixtureTimelineEventsImages = {
  'Yellow Card' : yellowCard,
  'Red Card' : redCard,
  'subst': substitutionIcon,
  'Goal' : soccerBallGoalIcon
}


export const translateMatchStatisticTypes : TranslateMatchStatisticTypes = {
  'expected_goals' : 'Expected Goals',
  'Shots insidebox' : 'Shots Inside Box',
  'Shots outsidebox' : 'Shots Outside Box',
  'Passes accurate' : 'Accurate Passes',
}


