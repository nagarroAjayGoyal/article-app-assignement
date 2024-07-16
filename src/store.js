import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './Slices/storiesSlice';
// import emailPreferenceReducer from './path-to/emailPreferenceSlice';

const store = configureStore({
  reducer: {
     stories: reducer,
  },
});

export default store;

