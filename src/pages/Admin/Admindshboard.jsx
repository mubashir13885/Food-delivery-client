import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admindshboard() {
    const navigate = useNavigate()
  return (
    <div>
        <div class="grid grid-cols-3 m-10 conatiner p-6">
        <div class="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
  <h2 className="text-2xl font-bold text-green-600 mb-2">Add New Items</h2>
 
  
  <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/add')}>
          Add Items
        </button>
  </div>
  <div class="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
  <h2 className="text-2xl font-bold text-green-600 mb-2">List Items</h2>
 
  
 <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/list')}>
        See Items
       </button>
 
  </div>
  <div class="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
  <h2 className="text-2xl font-bold text-green-600 mb-2">See Oreders</h2>
 
  
 <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/order')}>
         Orders
       </button>
       </div>
</div>
    </div>
  )
}

export default Admindshboard