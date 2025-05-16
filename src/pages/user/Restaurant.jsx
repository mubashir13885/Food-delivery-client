import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { showResto } from '../../services/RestoApi';

function Restaurant() {
  const navigate = useNavigate()
  const[restaurant,setrestaurant]= useState([])
    useEffect(()=>{
      showResto().then((res)=>{
        console.log(res?.data);
        setrestaurant(res?.data)
        
      }).catch((err)=>{
        console.log(err);
        
      })
    },[])

  return (
    <div>
       <div>
        
         
        <p className='font-bold size-lg m-10  flex p-4'>Popular Restaurants</p>
  <div className='card shadow-md rounded-lg bg-gray-200 p-2 m-6'>
  <div className='flex gap-2 m-10 items-center  ' onClick={()=>navigate("/restodetails")}> 
     
     {
         restaurant.map((restaurant)=>(
           <div key={restaurant._id} className="card bg-white   h-80 ">
     <figure>
       <img 
         src={restaurant.image}
         alt="item"/>
     </figure>
     <div className="card-body ">
       <h2 className="card-title">{restaurant.name}</h2>
       

       <p>{restaurant.location}</p>
       <p>Operating Hours :{restaurant.operating_hours}</p>
       <div class="text-left p-2">
        <span class="badge badge-success text-white text-lg">Rating: {restaurant.rating}★</span>
      
      </div>
       
       
 
     </div>
   </div>
         ))
       }
     </div>
  </div>
   </div>
    </div>
  )
}

export default Restaurant