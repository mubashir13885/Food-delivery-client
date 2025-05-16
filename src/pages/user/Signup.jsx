import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { userSignup } from '../../services/userApi'

function Signup() {
    const navigate = useNavigate()
       const[values,setvalues]=useState({
        name:"",
        email:"",
        password:"",
        phoneNumber:""
       })


    const handleSubmit = (e)=>{
      e.preventDefault()
      userSignup(values).then((res)=>{
         console.log(res);

        localStorage.setItem("token",res?.data?.token)
        toast.success(res?.data?.message)
        navigate("/")
      }).catch((err)=>{
         toast.error(err?.response?.data);
         
        
      })
      
    }

    const handleChange = (e)=>{
        setvalues({...values,[e.target.name]:e.target.value})

    }
  return (
    <div className="hero bg-#fef9c3 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold text-black ">Signup now!</h1>
      </div>
      <div>
        <p>
        From Local Kitchens to Your Table.
        </p>
      </div>
      <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text ">Name</span>
            </label>
            <input type="name" name='name' placeholder="name" className="input input-bordered bg-white border-black" onChange={handleChange} required />
          </div>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text ">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered bg-white border-black" onChange={handleChange} required />
          </div>
          <div className="form-control ">
            <label className="label ">
              <span className="label-text ">Phone Number</span>
            </label>
            <input type="tel" name='phoneNumber' placeholder="Phone Number" className="input input-bordered bg-white border-black" onChange={handleChange} required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white border-black"onChange={handleChange} required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Signup</button>
            <p class="text-center text-sm mt-6"onClick={()=>navigate("/login")}>
          Already have an account?
          <a href="#" class="font-semibold text-red-600 hover:underline">Login</a>
        </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup