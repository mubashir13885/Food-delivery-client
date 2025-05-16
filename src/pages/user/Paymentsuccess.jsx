import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react';

function Paymentsuccess() {
    const navigate = useNavigate() 
  return (
    <div>
         <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center p-6">
      <div className="card bg-white shadow-xl p-8 rounded-2xl max-w-md w-full">
        <div className="flex justify-center mb-4">
          <CheckCircle className="text-green-500" size={64} />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-4">Thank you for your purchase. Your transaction has been completed successfully.</p>
        
        <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
          Go to Homepage
        </button>
      </div>
    </div>
    </div>
  )
}

export default Paymentsuccess