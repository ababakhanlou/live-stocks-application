import { PRICE_RECEIVED, PRICE_CLEARED, SHOW_MODAL } from "./../actions/stocks";

const initialState = {
  price: "Awaiting Price",
  showModal: false,
  modalData: null,
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRICE_RECEIVED:
      return { ...state, price: action.payload };
    case PRICE_CLEARED:
      return { ...initialState };
    case SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
        modalData: action.payload,
      };
    default:
      return state;
  }
};

export default stocksReducer;
