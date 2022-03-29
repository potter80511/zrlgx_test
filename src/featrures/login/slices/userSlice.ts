import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginAction, logoutAction, checkUserToken } from '../actions/loginActions';
import { NetLoginResponse, UserInfo } from '../types'
import jsCookie from 'js-cookie';

export type State = {
  userInfo: UserInfo | null;
  token: string;
  unAuthorized: boolean;
  isLoading: boolean;
}

export const initialState: State = {
  userInfo: null,
  token: '',
  unAuthorized: false,
  isLoading: false,
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
    [loginAction.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [loginAction.fulfilled.toString()]: (state, action: PayloadAction<NetLoginResponse>) => {
      const { user, token } = action.payload

      jsCookie.set('user_token', token);
      jsCookie.set('isLogin', 'true');

      state.userInfo = user;
      state.token = token;
      state.unAuthorized = false;
      state.isLoading = false;
    },
    [loginAction.rejected.toString()]: (state) => {
      console.log('fail')
      state.unAuthorized = true;
      state.isLoading = false;
    },
    
    [logoutAction.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [logoutAction.fulfilled.toString()]: (state) => {
      jsCookie.remove('user_token');
      jsCookie.remove('isLogin');
      return initialState;
    },

    [checkUserToken.pending.toString()]: (state) => {
      state.isLoading = true;
    },
    [checkUserToken.fulfilled.toString()]: (state, action: PayloadAction<Pick<NetLoginResponse, 'user'>>) => {
      const { user } = action.payload
      state.userInfo = user;
      state.isLoading = false;
    },
  },
});

export const {
  setUserInfo,
  reset,
} = userSlice.actions;

export default userSlice.reducer;
