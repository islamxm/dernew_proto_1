import { configureStore } from "@reduxjs/toolkit";
import main from './slices/mainSlice'

const store = configureStore({
  reducer: {
    main
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  devTools: process.env.NODE_ENV !== 'production'
})

export default store;

