import React, { useState } from 'react'
import { restaurantCreate } from '../../services/RestoApi'


function AddRestaurant() {
  const [form, setForm] = useState({
    name: '',
    location: '',
    contact: '',
    rating: '',
    operating_hours: ''
  })
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = e => {
    const img = e.target.files[0]
    setFile(img)
    setPreview(URL.createObjectURL(img))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!file) return alert('Please select an image')

    const formData = new FormData()
    formData.append('image', file)
    formData.append('name', form.name)
    formData.append('location', form.location)
    formData.append('contact', form.contact)
    formData.append('rating', form.rating)
    formData.append('operating_hours', form.operating_hours)

    try {
      const res = await restaurantCreate(formData)
      console.log('Created restaurant:', res.data)
      setStatus('✅ Restaurant added successfully!')
      setForm({ name: '', location: '', contact: '', rating: '', operating_hours: '' })
      setFile(null)
      setPreview(null)
    } catch (err) {
      console.error(err)
      setStatus(err.response?.data?.error || '❌ Upload failed')
    }
  }

  return (
    <div className="p-6 m-4 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Add New Restaurant</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input type="file" accept="image/*" onChange={handleFileChange} required />
          {preview && <img src={preview} alt="Preview" className="mt-4 w-32 h-32 object-cover rounded" />}
        </div>

        <div>
          <label className="block mb-1 font-medium">Restaurant Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-3 bg-white py-2 border border-black rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input type="text" name="location" value={form.location} onChange={handleChange} className="w-full px-3 py-2 border bg-white border-black rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contact</label>
          <input type="text" name="contact" value={form.contact} onChange={handleChange} className="w-full px-3 py-2 border bg-white border-black  rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <input type="number" name="rating" step="0.1" max="5" value={form.rating} onChange={handleChange} className="w-24 px-3 py-2 bg-white border-black  border rounded" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Operating Hours</label>
          <input type="text" name="operating_hours" value={form.operating_hours} onChange={handleChange} className="w-full px-3 py-2 border bg-white border-black  rounded" required />
        </div>

        <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">ADD</button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  )
}

export default AddRestaurant
