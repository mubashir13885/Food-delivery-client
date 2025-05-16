import { userinstance } from "../axios/axiosinstance";

export const userSignup=(data)=>{
    return userinstance.post("/user/signup",data)
}