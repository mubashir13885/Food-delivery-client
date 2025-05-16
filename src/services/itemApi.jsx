
import { userinstance } from "../axios/axiosinstance";

export const getItems=()=>{
    return userinstance.get("/menu/showitems")
}