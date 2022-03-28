import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../../api/Fetcher";

type Params = {
  email: string;
  password: string;
}

export const loginAction = createAsyncThunk(
  'login',
  async (params: Params, thunkAPI) => {
    try {
      const response = await postApi('/auth/email/login', { ...params });
      const { data } = response;
      const result = data;
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error })
    }
  }
);
