import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginAction } from '../actions/loginActions';
import { NetLoginResponse, UserInfo } from '../types'

export type State = {
  userInfo: UserInfo | null;
  token: string;
}

export const initialState: State = {
  userInfo: null,
  token: '',
}

export type CaseReducer = {
  setFirstState: (state: State, action: PayloadAction<string>) => State
}

const userSlice = createSlice<State, CaseReducer>({
  name: '/userSlice',
  initialState,
  reducers: {
    setFirstState(state: State, action: PayloadAction<string>) {
      return {
        ...state,
        firstState: action.payload
      }
    }
  },
  extraReducers: {
    // [getPostList.pending.toString()]: (state) => {
    //   state.loading = true;
    // },
    [loginAction.fulfilled.toString()]: (state, action: PayloadAction<NetLoginResponse>) => {
      const { user, token } = action.payload

      state.userInfo = user;
      state.token = token;
    },
  },
});

export const {
  setFirstState
} = userSlice.actions;

export default userSlice.reducer;
