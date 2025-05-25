
import { userinstance } from "../axios/axiosinstance";

export const getItems=()=>{
    return userinstance.get("/menu/showitems")
}

export const deleteItemById = (id) => userinstance.delete(`/menu/itemdelete/${id}`)

export const updateItemById = (id, data) =>
  userinstance.patch(`/menu/itemupdate/${id}`, data)

export const itemCreate=(formData)=>{
    return userinstance.post("/menu/create",formData,{ headers: { 'Content-Type': 'multipart/form-data' } } )
      
}