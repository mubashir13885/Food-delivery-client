import React from 'react'
import { useNavigate } from 'react-router-dom'

function Heropage() {
    const navigate = useNavigate()
  return (

    
    <div>
        
        <div id='homepage' >   
        <h1 className='fw-light text-6xl text-red-500 font-bold p-2'>Express</h1>
        <p className='fs-4 text-white font-bold text-4xl'>india's #1 Food Delivery Website</p>
        <p className='fs-4 text-white  text-lg'>Good Food At Your Doorstep</p>

<div className="hero">

  <div class="hero-content text-center text-neutral-content">
  
       
    
    <div class="max-w-lg">
      <div className="input-group ">
        

        <button class="btn btn-error" onClick={()=>navigate("/signup")}>Signup</button>
        <button class="btn btn-error m-4"onClick={()=>navigate("/login")}>Login</button>
      </div>
    </div>
  </div>
</div>
</div>


    </div>
  )
}

export default Heropage