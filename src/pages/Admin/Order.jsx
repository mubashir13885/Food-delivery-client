import React, { useEffect, useState } from 'react'
import { getCart } from '../../services/cartApi';

function Order() {
      const [cartItems , setCartItems]=useState([])
      useEffect(()=>{
        getCart().then((res)=>{
          console.log(res);
          setCartItems(res?.data?.items)
        
    
        }).catch((err)=>{
          console.log(err);
          
        })
      },[])
  return (
    <div>
         <div>
        <div class="overflow-x-auto ">
  <table class="table w-full ">
  
    <thead >
      <tr className='text-black'>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        cartItems.map((items)=>(
            <tr  className='text-black'>
            <td><img src={items.itemId.image} alt="Food" class="w-12 h-12 rounded object-cover" /></td>
            <td>{items.itemId.item_name}</td>
            <td>{items.itemId.description}</td>
            <td>{items.price}</td>
            <td><button class="btn btn-ghost btn-xs text-red-500">×</button></td>
          </tr>
        ))
     }

     
     
    </tbody>
  </table>
</div>

    </div>
    </div>
  )
}

export default Order