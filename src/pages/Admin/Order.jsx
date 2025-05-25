import React, { useEffect, useState } from 'react';
import { getOrders, updateOrderStatus } from '../../services/orderApi';

function Order() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getOrders()
      .then((res) => {
        console.log("Fetched orders:", res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        setError('Failed to fetch orders');
        console.error('Error fetching orders:', err);
      });
  }, []);

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Order ID</th>
              <th className="border border-gray-300 p-2 text-left">Items</th>
              <th className="border border-gray-300 p-2 text-left">Total Price</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
              <th className="border border-gray-300 p-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{order._id}</td>
                <td className="border border-gray-300 p-2">
                  <ul className="list-disc list-inside">
                    {order.items.map((item, index) => (
                      <li key={item.itemId?._id || index}>
                        {item.itemId?.item_name || "Item not found"}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 p-2">
                  ${order.totalPrice ? order.totalPrice.toFixed(2) : '0.00'}
                </td>
                <td className="border border-gray-300 p-2">
                  {order.status}
                  {order.status === 'pending' && (
                    <button
                      onClick={() => {
                        updateOrderStatus(order._id, 'paid')
                          .then((res) => {
                            setOrders((prev) =>
                              prev.map((o) =>
                                o._id === order._id ? res.data : o
                              )
                            );
                          })
                          .catch((err) => {
                            console.error("Failed to update status", err);
                          });
                      }}
                      className="ml-2 text-blue-600 underline"
                    >
                      Mark as Delivered
                    </button>
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Order;
