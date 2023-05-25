import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './featcher/theme';
import menuSlice from './featcher/menu';
import screenWidthSlice from './featcher/screenWidth';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    menu: menuSlice,
    screenWidth: screenWidthSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
