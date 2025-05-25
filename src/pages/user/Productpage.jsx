import React, { useEffect, useState, useRef } from 'react'
import { getItems } from '../../services/itemApi';
import { addToCart } from '../../services/cartApi';
import { toast } from 'sonner';

function Productpage() {
  const [item, setItem] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    getItems()
      .then((res) => {
        setItem(res?.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const handleAddtoCart = (id) => {
    addToCart(id).then((res) => {
      toast.success("Product added to cart");
      // Optionally, you can refresh the items list here to get new items:
      // getItems().then(res => setItem(res?.data))
    }).catch((res) => {
      toast.error(res?.response?.data?.error);
    });
  }

  // Scroll left and right handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Automatically scroll to right end whenever item list changes (e.g., new items added)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: 'smooth',
      });
    }
  }, [item]); // run this effect when 'item' changes

  return (
  <div className="m-10 bg-gray-200 p-6 rounded-lg">
    <p className='font-bold text-lg mb-4'>Popular Dishes</p>

    <div className="relative">
      {/* Scroll buttons */}
      <button 
        onClick={scrollLeft} 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
        aria-label="Scroll Left"
      >
        ❮
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide px-8"
        style={{ scrollBehavior: 'smooth' }}
      >
        {
          item.map((item) => (
            <div key={item?._id} className="flex-none w-60 bg-white shadow-md rounded-lg p-4">
              <figure>
                <img
                  src={item?.image}
                  alt={item?.item_name}
                  className="h-36 w-full object-cover rounded-md"
                />
              </figure>
              <div className="mt-2">
                <h2 className="font-semibold">{item?.item_name}</h2>
                <p className="text-gray-700">${item?.price}</p>
                <button
                  className="mt-3 btn btn-primary w-full"
                  onClick={() => handleAddtoCart(item._id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <button 
        onClick={scrollRight} 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
        aria-label="Scroll Right"
      >
        ❯
      </button>
    </div>
  </div>
)

}

export default Productpage;
