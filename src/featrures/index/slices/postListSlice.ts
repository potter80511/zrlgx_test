import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getPostList } from '../actions/postListActions';
import { NetPostListData, PostList } from '../types';

export type State = {
  list: PostList[];
  loading: boolean;
  hasMore: boolean;
  page: number;
}

export const initialState: State = {
  list: [],
  loading: true,
  hasMore: false,
  page: 1,
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
    // [getPostList.pending.toString()]: (state) => {
    //   state.loading = true;
    // },
    [getPostList.fulfilled.toString()]: (state, action: PayloadAction<NetPostListData>) => {
      const { data, meta: { pagination: { total } } } = action.payload
      const newList = state.list.concat(data);

      state.hasMore = newList.length < total

      state.list = newList;
      state.loading = false;
      state.page = state.page + 12;
    },
  },
});

export const {
  // setFirstState
} = postListSlice.actions;

export default postListSlice.reducer;
