import { combineReducers, Reducer } from '@reduxjs/toolkit'
import postListReducer, {State as PostListState, initialState as postListState} from './slices/postListSlice'

export type CombinedState = {
  postListState: PostListState
}

export const indexReducer: Reducer<CombinedState> = combineReducers({
  postListState: postListReducer,
})

export const defaultState: CombinedState = {
  postListState,
}
