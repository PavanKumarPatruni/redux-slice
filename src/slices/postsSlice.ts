import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TInitialState = {
  data: TPost[];
  loading: boolean;
  error?: string | null;
};

const INIT_STATE: TInitialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchPostsApi = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", fetchPostsApi);

const postsSlice = createSlice({
  name: "posts",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPosts.fulfilled,
        (state, action: PayloadAction<TPost[]>) => {
          state.data = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(fetchPosts.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const postsSelector = createSelector(
  (state: RootState) => state.posts,
  (data) => ({ ...data })
);

export default postsSlice;
