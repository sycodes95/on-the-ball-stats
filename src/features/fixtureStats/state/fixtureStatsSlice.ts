import { createSlice }   from "@reduxjs/toolkit";
import { Fixture } from "../../../types/types";

type FixtureStats = {
  fixture : Fixture | null;
}

const initialState : FixtureStats = {
  fixture : null,
}

export const fixtureStatsSlice = createSlice({
  name: 'fixtureStatsSlice',
  initialState,
  reducers : {
    setFixture: (state, action) => {
      state.fixture = action.payload;
    },
    clearFixture: (state) => {
      state.fixture = null
    }
  }
})

export const {
  setFixture,
  clearFixture,

} = fixtureStatsSlice.actions

export default fixtureStatsSlice.reducer