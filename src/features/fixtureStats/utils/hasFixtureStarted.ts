import { Fixture } from "../../../types/types"


export const hasFixtureStarted = (fixture: Fixture) => {
  const fixtureStartDate = new Date(fixture.fixture.date)
  const userCurrentDate = new Date()
  if((fixtureStartDate.getTime() - userCurrentDate.getTime()) > 0){
    return false
  }
  return true
}