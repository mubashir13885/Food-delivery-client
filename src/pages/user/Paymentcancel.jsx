import React from 'react'
import { useNavigate } from 'react-router-dom'

function Paymentcancel() {
    const navigate = useNavigate()
  return (
    <div>
         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="card w-full max-w-md bg-white shadow-xl p-6 text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-red-100 text-red-600 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Payment Failed</h2>
        <p className="text-gray-500">Unfortunately, your payment could not be processed. Please try again or contact support.</p>
        <div className="space-x-4">
         
          <button className="btn btn-outline" onClick={()=>navigate("/")}>Go Home</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Paymentcancel