import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { getPostList, unFavoritePosts } from '../actions/postListActions';
import { NetPostListData } from '../types';
import { SinglePost } from '../../webinar_detail/types';

export type State = {
  list: SinglePost[];
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
  reset: () => State
}

const postListSlice = createSlice<State, CaseReducer>({
  name: '/postListSlice',
  initialState,
  reducers: {
    reset() {
      return {
        ...initialState,
      }
    }
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
      state.page = state.page + 1;
    },

    [unFavoritePosts.fulfilled.toString()]: (state, action: PayloadAction<{id: number}>) => {
      const { id } = action.payload
      const newList = state.list.filter((post) => post.id !== id);

      state.list = newList;
    },
  },
});

export const {
  reset
} = postListSlice.actions;

export default postListSlice.reducer;
