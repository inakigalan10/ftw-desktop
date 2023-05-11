import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Profile/CreateProfile/slice/profileSlice'


export const store = configureStore({
  reducer: {
    profile:profileSlice,
  },
})