export const PRICE_RECEIVED = "PRICE_RECEIVED";
export const PRICE_CLEARED = "PRICE_CLEARED";

export const receivePrice = (price) => ({
  type: PRICE_RECEIVED,
  payload: price,
});

export const clearPrice = () => ({
  type: PRICE_CLEARED,
});
