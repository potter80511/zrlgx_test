import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {firstReducer, CombinedState as FirstCombinedState} from './components/first_component/combinedReducer'
import {indexReducer, CombinedState as IndexCombinedState} from './featrures/index/combinedReducer'

const appReducer = combineReducers<StoreState>({
  first: firstReducer,
  index: indexReducer,
});

export type StoreState = {
  first: FirstCombinedState,
  index: IndexCombinedState
}

const store = configureStore({
  reducer: appReducer
});

export default store;
