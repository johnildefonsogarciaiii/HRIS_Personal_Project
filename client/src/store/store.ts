import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './authSlice';
import userReducer from './userSlice';
import leaveReducer from './leaveSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    leave: leaveReducer
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;