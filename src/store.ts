import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {firstReducer, CombinedState as FirstCombinedState} from './components/first_component/combinedReducer'

const appReducer = combineReducers<StoreState>({
  first: firstReducer
});

export type StoreState = {
  first: FirstCombinedState
}

const store = configureStore({
  reducer: appReducer
});

export default store;
