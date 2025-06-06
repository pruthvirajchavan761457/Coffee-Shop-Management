import { REMOVE_FROM_CART } from './CardAction';

const initialState = {
  items: [],
  totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_FROM_CART:
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.length,
      };
    // other cases...
    default:
      return state;
  }
};

export default cartReducer;