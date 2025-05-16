
import { userinstance } from "../axios/axiosinstance";

export const addToCart=(id)=>{
    return userinstance.post(`/cart/addtocart/${id}`)
}
export const removeItem=(itemId)=>{
    return userinstance.delete(`/cart/removefromcart/${itemId}`)
}
export const getCart=()=>{
    return userinstance.get(`/cart/getcart`)
}
export const makePayment = (data) => {
    return userinstance.post("/payment/checkout", data)
}