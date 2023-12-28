import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../control/controllerSlice';

export default configureStore({
  reducer: {
    counter: counterSlice
  }
})