import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteApi, getApi } from "../../../api/Fetcher";

type GetPostListParams = {
  per_page: number;
  page: number;
  favourited?: number;
  token?: string;
}

type DeletePostParams = {
  token: string;
  id: number;
}

export const getPostList = createAsyncThunk(
  'postList/getPostList',
  async (params: GetPostListParams, thunkAPI) => {
    try {
      const response = await getApi('/posts', {params});
      const { data } = response;
      const result = data;
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error })
    }
  }
);

export const unFavoritePosts = createAsyncThunk(
  'postList/unFavoritePosts',
  async (params: DeletePostParams, thunkAPI) => {
    const { id, token } = params;
    try {
      await deleteApi(`/favourites/post/${id}`, { params: { token } });
      return { id };
    } catch (error) {
      return thunkAPI.rejectWithValue({ error })
    }
  }
);
