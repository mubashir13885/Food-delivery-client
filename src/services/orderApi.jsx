import { userinstance } from "../axios/axiosinstance";


export const placeOrder = () => {
  return userinstance.post("/order/place-order");
};
export const getOrders = () => {
  return userinstance.get("/order/orders");
};
export const updateOrderStatus = (orderId, status) => {
  return userinstance.patch(`/order/update-status/${orderId}`, { status });
};
