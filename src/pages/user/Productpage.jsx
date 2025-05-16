import React, { useEffect, useState } from 'react'
import { getItems } from '../../services/itemApi';
import { addToCart } from '../../services/cartApi';
import { toast } from 'sonner';

function Productpage() {
  const[item,setItem]= useState([])
  useEffect(()=>{
    getItems().then((res)=>{
      console.log(res?.data);
      setItem(res?.data)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])

  const handleAddtoCart=(id)=>{
     addToCart(id).then((res)=>{
      console.log(res);
      toast.success("product added to cart")

      
     }).catch((err)=>{
      console.log(err)
      toast.error(err?.response?.data?.error);
      
     });
      
     }

  return (
  
     <div >
        
         
        <p className='font-bold size-lg m-10  flex p-4'>Popular Dishes</p>
          <div className="carousel w-full grid">
  <div id="slide1" className="carousel-item relative w-full  ">
  <div className='card shadow-md rounded-lg bg-gray-200 p-2 m-6   '>
  <div className='flex gap-2 m-10 items-center container  '> 

  <a href="#slide4" className="btn btn-circle">❮</a> 
     
     {
         item.map((item)=>(
          
           <div key={item?._id} className="card bg-white   h-80 ">
           
     <figure>
       <img 
         src={item?.image}
         alt="item"/>
     </figure>
     <div className="card-body ">
       <h2 className="card-title">{item?.item_name}</h2>
       
       <p>{item?.price}</p>
       <div className="card-actions justify-end">
         <button className="btn btn-primary"onClick={()=> handleAddtoCart(item._id)}>Add to cart</button>
         
       </div>
     </div>
    
   </div>
         ))
       }
        <a href="#slide2" className="btn btn-circle ">❯</a>
     </div>
  </div>
   </div>
    
      
    </div>
    </div>

  )
}

export default Productpage