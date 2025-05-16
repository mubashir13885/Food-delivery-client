import React, { useEffect, useState } from 'react'
import { getItems } from '../../services/itemApi';

function List() {
     const[list,setList]= useState([])
      useEffect(()=>{
        getItems().then((res)=>{
          console.log(res?.data);
          setList(res?.data)
          
        }).catch((err)=>{
          console.log(err);
          
        })
      },[])
  return (
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
        list.map((list)=>(
            <tr  className='text-black'>
            <td><img src={list.image} alt="Food" class="w-12 h-12 rounded object-cover" /></td>
            <td>{list?.item_name}</td>
            <td>{list.description}</td>
            <td>{list.price}</td>
            <td><button class="btn btn-ghost btn-xs text-red-500">×</button></td>
          </tr>
        ))
     }

     
     
    </tbody>
  </table>
</div>

    </div>
  )
}

export default List