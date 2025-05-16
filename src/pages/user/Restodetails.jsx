import React from 'react'
import Productpage from './Productpage'

function Restodetails() {
  return (
    <div>
        <div class="card bg-white-100 bg-cover  shadow-lg p-6 max-w-3x2 mx-auto">
  
  <div class="flex justify-between items-start">
    <div class="space-y-1">
      
      <p class="text-sm text-gray-500">Biryani, Andhra, North Indian, Chinese, Desserts, Ice Cream, Beverages</p>
      <p class="text-sm text-gray-500">4034, HAL 2nd Stage, 100 Feet Road, Indiranagar, Bangalore</p>
    </div>
    <div class="flex space-x-4">
      <div class="text-center">
        <span class="badge badge-success text-white text-lg">4.1★</span>
        <p class="text-xs text-gray-500 mt-1">Dining Ratings</p>
      </div>
     
    </div>
  </div>

 
  <div class="flex items-center space-x-4 mt-6 flex-wrap">
    <span class="badge badge-success">Open now</span>
    <span class="text-sm text-gray-600">12midnight – 1am, 11am – 12midnight (Today)</span>
    <button class="btn btn-ghost btn-circle btn-sm tooltip tooltip-bottom" data-tip="More info">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
      </svg>
    </button>

    <div class="flex items-center space-x-1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.6c.89 0 1.67.39 2.23 1.02l1.3 1.56a1 1 0 01-.2 1.4l-2.6 2.3a11.05 11.05 0 005.5 5.5l2.3-2.6a1 1 0 011.4-.2l1.56 1.3c.63.56 1.02 1.34 1.02 2.23V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
      </svg>
      <span class="text-sm text-blue-600">+919663578800</span>
      <button class="text-sm text-blue-600 underline">+1 more</button>
    </div>
  </div>
</div>
<Productpage/>
    </div>
  )
}

export default Restodetails