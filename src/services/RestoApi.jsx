
import { userinstance } from "../axios/axiosinstance";

export const showResto=()=>{
    return userinstance.get("/restaurant/showrestaurants")
}
export const updateRestaurant = (id, data) => userinstance.patch(`/restaurant/update/${id}`, data)
export const deleteRestaurant = (id) => userinstance.delete(`/restaurant/delete/${id}`)

export const restaurantCreate = (formData) => {
  return userinstance.post('/restaurant/create', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const getRestoById =(id)=> {
  return userinstance.get(`/restaurant/restodetails/${id}`); 
}