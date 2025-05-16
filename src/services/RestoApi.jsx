
import { userinstance } from "../axios/axiosinstance";

export const showResto=()=>{
    return userinstance.get("/restaurant/showrestaurants")
}