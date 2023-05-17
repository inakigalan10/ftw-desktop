import { configureStore } from '@reduxjs/toolkit'
import matchingSlice from './matching/slice/matchingSlice'
import matchSlice from './Matches/slice/matchSlice'
import profileSlice from './Profile/slice/profileSlice'

import messageSlice from './chat/Message/slice/messageSlice'
import chatSlice from './chat/slice/chatSlice'



export const store = configureStore({
  reducer: {
    profile:profileSlice,
    matching:matchingSlice,
    match:matchSlice,
    message:messageSlice,
    chat:chatSlice
    
  },
})