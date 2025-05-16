import React, { useEffect, useState } from 'react'
import { userProfile } from '../../services/userApi';


function Profilepage() {
   const [profile,setProfile]=useState([])
useEffect(()=>{
    userProfile().then((res)=>{
        console.log(res);
        setProfile(res?.data)
    }).catch((err)=>{
        console.log(err);
        
    })
},[])
   
      
    
  return (
    <div>
     
<div className="hero min-h-screen b py-10 px-6">
  <div className="hero-content w-full flex-col lg:flex-row gap-10">

    <div className="card w-full lg:w-1/3 bg-white shadow-lg">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-32 rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="User Avatar" />
          </div>
        </div>
      </figure>
        
            <div className="card-body items-center text-center">
                <h2 className="card-title">{profile.name}</h2>
                <p className="text-gray-500">{profile.email}</p>
            <div className="card-actions mt-4">
              <button className="btn btn-outline btn-error btn-sm">Logout</button>
            </div>
          </div>
        
      <div className="divider m-0"></div>
      <ul className="menu menu-vertical p-4 text-sm">
        <li><a className="active">Edit Profile</a></li>
        <li><a>Order History</a></li>
        <li><a>Saved Addresses</a></li>
        <li><a>Payment Methods</a></li>
      </ul>
    </div>

 
    <div className="w-full lg:w-2/3 space-y-6">

      
      <div className="card bg-white  ">
        <div className="card-body">
          <h3 className="text-xl font-semibold mb-4">Profile Details</h3>
          <form className="space-y-4 ">
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Full Name</span></label>
              <input type="text" value={profile.name} className="input text-white input-bordered w-full" />
            </div>
            <div className="form-control ">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" value={profile.email} className="input text-white input-bordered w-full" />
            </div>
            <div className="form-control w-full">
              <label className="label"><span className="label-text">Phone Number</span></label>
              <input type="tel" value={profile.phoneNumber} className="input text-white input-bordered w-full" />
            </div>
           
            <div className="form-control mt-6">
              <button className="btn btn-error w-full">Save Changes</button>
            </div>
          </form>
        </div>
      </div>

      
        
      </div>

    </div>

  </div>
</div>

  )
}

export default Profilepage