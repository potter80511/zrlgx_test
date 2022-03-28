import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {firstReducer, CombinedState as FirstCombinedState} from './components/first_component/combinedReducer'
import {indexReducer, CombinedState as IndexCombinedState} from './featrures/index/combinedReducer'
import userReducer, { State as UserState} from './featrures/login/slices/userSlice'

const appReducer = combineReducers<StoreState>({
  first: firstReducer,
  index: indexReducer,
  user: userReducer,
});

export type StoreState = {
  first: FirstCombinedState,
  index: IndexCombinedState,
  user: UserState
}

const store = configureStore({
  reducer: appReducer
});

export default store;
