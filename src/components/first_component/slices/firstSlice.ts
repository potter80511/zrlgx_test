import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type State = {
  firstState: string;
}

export const initialState: State = {
  firstState: 'first-state'
}

export type CaseReducer = {
  setFirstState: (state: State, action: PayloadAction<string>) => State
}

const firstSlice = createSlice<State, CaseReducer>({
  name: '/firstSlice',
  initialState,
  reducers: {
    setFirstState(state: State, action: PayloadAction<string>) {
      return {
        ...state,
        firstState: action.payload
      }
    }
  }
});

export const {
  setFirstState
} = firstSlice.actions;

export default firstSlice.reducer;
