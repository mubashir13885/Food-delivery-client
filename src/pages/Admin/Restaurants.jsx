import React, { useEffect, useState } from 'react'
import { deleteRestaurant, showResto, updateRestaurant } from '../../services/RestoApi'

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([])
  const [editId, setEditId] = useState(null)
  const [form, setForm] = useState({
    name: '',
    location: '',
    contact: '',
    rating: '',
    operating_hours: ''
  })

  useEffect(() => {
    fetchRestaurants()
  }, [])

  const fetchRestaurants = async () => {
    try {
      const res = await showResto()
      setRestaurants(res.data)
    } catch (err) {
      console.error('Failed to fetch restaurants:', err)
    }
  }

  const handleEdit = (restaurant) => {
    setEditId(restaurant._id)
    setForm({
      name: restaurant.name,
      location: restaurant.location,
      contact: restaurant.contact,
      rating: restaurant.rating,
      operating_hours: restaurant.operating_hours
    })
  }

  const handleUpdate = async (id) => {
    try {
      await updateRestaurant(id, form)
      setEditId(null)
      fetchRestaurants()
    } catch (err) {
      console.error('Update failed:', err)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this restaurant?')) return
    try {
      await deleteRestaurant(id)
      fetchRestaurants()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Restaurant List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full text-left">
          <thead>
            <tr className="text-black">
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Rating</th>
              <th>Operating Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((r) => (
              <tr key={r._id} className="text-black">
                {editId === r._id ? (
                  <>
                    <td><input name="name" value={form.name} onChange={handleChange} className="input bg-white border-black input-sm" /></td>
                    <td><input name="location" value={form.location} onChange={handleChange} className="input bg-white border-black input-sm" /></td>
                    <td><input name="contact" value={form.contact} onChange={handleChange} className="input input-sm bg-white border-black" /></td>
                    <td><input name="rating" value={form.rating} onChange={handleChange} className="input input-sm bg-white border-black" /></td>
                    <td><input name="operating_hours" value={form.operating_hours} onChange={handleChange} className="input input-sm bg-white border-black" /></td>
                    <td>
                      <button className="btn btn-sm btn-success mr-2" onClick={() => handleUpdate(r._id)}>Save</button>
                      <button className="btn btn-sm btn-secondary" onClick={() => setEditId(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{r.name}</td>
                    <td>{r.location}</td>
                    <td>{r.contact}</td>
                    <td>{r.rating}</td>
                    <td>{r.operating_hours}</td>
                    <td>
                      <button className="btn btn-sm btn-warning mr-2" onClick={() => handleEdit(r)}>Edit</button>
                      <button className="btn btn-sm btn-error" onClick={() => handleDelete(r._id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RestaurantList
