import { PRICE_RECEIVED, PRICE_CLEARED } from "./../actions/stocks";

const initialState = {
  price: "N/A",
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRICE_RECEIVED:
      return { ...state, price: action.payload };
    case PRICE_CLEARED:
      return { ...initialState };
    default:
      return state;
  }
};

export default stocksReducer;
