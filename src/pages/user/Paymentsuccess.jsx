import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Loader2 } from 'lucide-react';
import { clearCart } from '../../services/cartApi'; // Make sure the path is correct
import { toast } from 'sonner';

function Paymentsuccess() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const clearUserCart = async () => {
      try {
        await clearCart();
        toast.success('Cart has been successfully cleared.');
        console.log('Cart cleared after payment.');
      } catch (err) {
        console.error('Failed to clear cart:', err);
        toast.error('Failed to clear the cart.');
      } finally {
        setLoading(false);
      }
    };

    clearUserCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center p-6">
      <div className="card bg-white shadow-xl p-8 rounded-2xl max-w-md w-full">
        {loading ? (
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin text-blue-500" size={48} />
            <p className="mt-4 text-gray-600">Finalizing your order...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <CheckCircle className="text-green-500" size={64} />
            </div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for your purchase. Your transaction has been completed successfully.
            </p>

            <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>
              Go to Homepage
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Paymentsuccess;
