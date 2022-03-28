import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginAction, checkUserToken } from '../actions/loginActions';
import { NetLoginResponse, UserInfo } from '../types'
import jsCookie from 'js-cookie';

export type State = {
  userInfo: UserInfo | null;
  token: string;
  unAuthorized: boolean;
}

export const initialState: State = {
  userInfo: null,
  token: '',
  unAuthorized: false,
}

export type CaseReducer = {
  setUserInfo: (state: State, action: PayloadAction<Partial<State>>) => State
  reset: () => void
}

const userSlice = createSlice<State, CaseReducer>({
  name: '/userSlice',
  initialState,
  reducers: {
    setUserInfo(state: State, action: PayloadAction<Partial<State>>) {
      return {
        ...state,
        ...action.payload
      }
    },
    reset() {
      jsCookie.remove('user_token');

      return initialState
    }
  },
  extraReducers: {
    // [getPostList.pending.toString()]: (state) => {
    //   state.loading = true;
    // },
    [loginAction.fulfilled.toString()]: (state, action: PayloadAction<NetLoginResponse>) => {
      const { user, token } = action.payload

      jsCookie.set('user_token', token);

      state.userInfo = user;
      state.token = token;
      state.unAuthorized = false;
    },
    [loginAction.rejected.toString()]: (state) => {
      console.log('fail')
      state.unAuthorized = true;
    },

    [checkUserToken.fulfilled.toString()]: (state, action: PayloadAction<Pick<NetLoginResponse, 'user'>>) => {
      const { user } = action.payload
      state.userInfo = user;
    },
  },
});

export const {
  setUserInfo,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
