import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {};

export const fetchTopStories = createAsyncThunk(
  "dropdown/fetchTopStories",
  async (days) => {
    const apiKey = process.env.REACT_APP_NYT_TECH_CX;
    const response = await fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/${days}.json?api-key=${apiKey}`
    ); // Replace with your API endpoint
    console.log(response);
    return response.json();
  }
);

const dataSlice = createSlice({
  name: "stories",
  initialState,
  reducers: {}, // No reducers defined in this example
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopStories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopStories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.results;
      })
      .addCase(fetchTopStories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the slice and its actions
// export const { fetchDataSuccess } = storiesSlice.actions;
// export default storiesSlice.reducer;
export const { actions, reducer } = dataSlice;
