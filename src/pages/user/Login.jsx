import React, { useState } from 'react'
import { userLogin } from '../../services/userApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Login({role = "user "}) {
    const navigate = useNavigate()
       const[values,setvalues]=useState({
        email:"",
        password:""
       })


    const handleSubmit = (e)=>{
      e.preventDefault()
      userLogin(values , role).then((res)=>{
         console.log(res);
         if (role == "admin") {
          localStorage.setItem("admin-token", res?.data?.token)
          toast.success(res?.data?.message)
          navigate("/admin/dashboard")
      } else {
          localStorage.setItem("token", res?.data?.token)
          toast.success(res?.data?.message)
          navigate("/")
      }
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
    < h1 className="text-5xl font-bold">{role == "admin" ? "Admin Login" : "Login now!"}</h1>
    </div>
    <div>
      <p>
      Good Food. Great Mood. Right to You.
      </p>
    </div>
    <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control ">
          <label className="label ">
            <span className="label-text ">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered bg-white border-black" onChange={handleChange} required />
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
          <button className="btn btn-primary">Login</button>
          <p class="text-center text-sm mt-6"onClick={()=>navigate("/signup")}>
        Don’t have an account?
        <a href="#" class="font-semibold text-red-600 hover:underline">Sign Up</a>
      </p>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Login