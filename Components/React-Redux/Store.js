import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import CardReducer from './CardReducer'; // Make sure this path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: CardReducer,  // Add auth slice to the store
  },
});

export default store;
