import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRestoById } from '../../services/RestoApi';
import Productpage from './Productpage';

function Spinner() {
  return (
    <div className="flex justify-center items-center p-10">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function Restodetails() {
  const { id } = useParams();
  const [resto, setResto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    setResto(null);
    setError('');
    setLoading(true);

    getRestoById(id)
      .then((res) => {
        setResto(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load restaurant details:", err);
        setError('Failed to load restaurant details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;

  if (error)
    return (
      <div className="text-red-500 text-center p-10 font-semibold">
        {error}
      </div>
    );

  if (!resto) return null;

  return (
    <div className="w-full px-6 py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
       


        <div className="p-6 space-y-3">
          <p className="text-gray-700 text-lg">
            <strong>Cuisine:</strong> { 'YES'}
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Location:</strong> {resto.location}
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Operating Hours:</strong> {resto.operating_hours}
          </p>
          <span className="inline-block mt-2 px-4 py-2 bg-green-600 text-white rounded-full font-semibold text-lg">
            Rating: {resto.rating}★
          </span>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto">
        <Productpage restaurantId={id} />
      </div>
    </div>
  );
}

export default Restodetails;
