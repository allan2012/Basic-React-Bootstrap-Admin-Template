import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        // Handle non-200 responses
        if(response.status === 403)
          toast.error('Error fetching Posts: Access denied, 403 Forbidden');
        return rejectWithValue('Forbidden');
        if(response.status === 404)
          return rejectWithValue('Not found');
        if(response.status === 500)
          return rejectWithValue('Internal server error');
        if(response.status === 503)
          return rejectWithValue('Service unavailable');
        if(response.status === 504)
          return rejectWithValue('Gateway timeout');

        return rejectWithValue('Failed to fetch posts');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Unknown error occurred');
    }
  }
);


const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state) => {
      state.status = 'loading';
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
    });
  }
})


export const { setPosts } = postSlice.actions;
export default postSlice.reducer;