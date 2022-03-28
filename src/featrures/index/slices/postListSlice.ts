import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getPostList } from '../actions/postListActions';
import { NetPostListData, PostList } from '../types';

export type State = {
  list: PostList[];
  loading: boolean;
}

export const initialState: State = {
  list: [],
  loading: false,
}

export type CaseReducer = {
  // setFirstState: (state: State, action: PayloadAction<string>) => State
}

const postListSlice = createSlice<State, CaseReducer>({
  name: '/postListSlice',
  initialState,
  reducers: {
    // setFirstState(state: State, action: PayloadAction<string>) {
    //   return {
    //     ...state,
    //     firstState: action.payload
    //   }
    // }
  },
  extraReducers: {
    [getPostList.pending.toString()]: (state) => {
      state.loading = true;
    },
    [getPostList.fulfilled.toString()]: (state, action: PayloadAction<NetPostListData>) => {
      const { data } = action.payload
      const newList = state.list.concat(data);

      state.list = newList;
      state.loading = false;
    },
  },
});

export const {
  // setFirstState
} = postListSlice.actions;

export default postListSlice.reducer;
