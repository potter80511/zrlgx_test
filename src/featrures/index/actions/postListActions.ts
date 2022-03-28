import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../../api/Fetcher";

type Params = {
  per_page: number;
  page: number;
}

export const getPostList = createAsyncThunk(
  'postList/getPostList',
  async (params: Params, thunkAPI) => {
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
