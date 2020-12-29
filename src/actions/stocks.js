export const PRICE_RECEIVED = "PRICE_RECEIVED";
export const PRICE_CLEARED = "PRICE_CLEARED";
export const SHOW_MODAL = "SHOW_MODAL";

export const receivePrice = (price) => ({
  type: PRICE_RECEIVED,
  payload: price,
});

export const clearPrice = () => ({
  type: PRICE_CLEARED,
});

export const setShowModal = (data) => ({
  type: SHOW_MODAL,
  payload: data,
});
