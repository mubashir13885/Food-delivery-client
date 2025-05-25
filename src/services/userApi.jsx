
import { userinstance } from "../axios/axiosinstance";

export const userLogin=(data ,role)=>{
    return userinstance.post(`/user/login?role=${role}`,data)
}

export const userSignup=(data)=>{
    return userinstance.post("/user/signup",data)
}

export const userProfile=()=>{
    return userinstance.get("/user/profile")
}
export const userLogout=()=>{
    return userinstance.post("/user/logout")
}
export const userUpdate = (userId, data) => userinstance.patch(`/user/update/${userId}`, data)
