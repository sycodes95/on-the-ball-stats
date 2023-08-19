import { configureStore } from '@reduxjs/toolkit'
import fixtureStatsSlice from '../features/fixtureStats/state/fixtureStatsSlice'

export const store = configureStore({
  reducer: {
    fixtureStatsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;