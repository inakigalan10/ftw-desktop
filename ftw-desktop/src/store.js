import { configureStore } from '@reduxjs/toolkit'
import userAdminSlices from './slices/admin/AdminUserSlice'


export const store = configureStore({
  reducer: {
    userAdmin:userAdminSlices

  },
})