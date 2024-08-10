import { configureStore } from '@reduxjs/toolkit';
import idReducer from './reducer'; 

const store = configureStore({
  reducer: {
    ids: idReducer, 
  },
});

export default store;
