import { combineReducers, Reducer } from '@reduxjs/toolkit'
import firstStateReducer, {State as FirstStateState, initialState as firstStateState} from './slices/firstSlice'

export type CombinedState = {
  firstReducerState: FirstStateState
}

export const firstReducer: Reducer<CombinedState> = combineReducers({
  firstReducerState: firstStateReducer,
})

export const defaultState: CombinedState = {
  firstReducerState: firstStateState,
}
