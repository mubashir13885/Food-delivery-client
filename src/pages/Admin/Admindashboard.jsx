import React from 'react'
import { useNavigate } from 'react-router-dom'

function Admindashboard() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="grid grid-cols-3 m-10 container p-6 gap-6">
        {/* Add Items */}
        <div className="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Add New Items</h2>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/add')}>
            Add Items
          </button>
        </div>

        {/* List Items */}
        <div className="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-green-600 mb-2">List Items</h2>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/list')}>
            See Items
          </button>
        </div>

        {/* See Orders */}
        <div className="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-green-600 mb-2">See Orders</h2>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/order')}>
            Orders
          </button>
        </div>

        {/* Add Restaurants */}
        <div className="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Add Restaurants</h2>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/add-restaurant')}>
            Add Restaurant
          </button>
        </div>

        {/* List Restaurants */}
        <div className="card bg-white-100 shadow-lg p-6 rounded-lg w-80">
          <h2 className="text-2xl font-bold text-green-600 mb-2">List Restaurants</h2>
          <button className="btn btn-primary mt-4" onClick={() => navigate('/admin/restaurants')}>
            See Restaurants
          </button>
        </div>
      </div>
    </div>
  )
}

export default Admindashboard
