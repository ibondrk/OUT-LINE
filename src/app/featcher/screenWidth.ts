import { createSlice } from '@reduxjs/toolkit';

type menuState = {
  isWidthPC: boolean;
};

const initialState: menuState = {
  isWidthPC: false,
};

const screenWidthSlice = createSlice({
  name: 'screenWidth',
  initialState,
  reducers: {
    setScreenWidth: (state) => {
      const width = window.innerWidth;
      state.isWidthPC = width >= 1550;
    },
  },
});

export const { setScreenWidth } = screenWidthSlice.actions;

export default screenWidthSlice.reducer;
