// In a file like "teamSlice.js"
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teamList: [],
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teamList.push(action.payload);
    },
  },
});


export const { addTeam } = teamSlice.actions;
export default teamSlice.reducer;
