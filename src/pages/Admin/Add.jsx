import React, { useState } from 'react'
import { itemCreate } from '../../services/itemApi'

function Add() {
   const [form, setForm] = useState({
    item_name: '',
    description: '',
    price: ''
  })
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState('')

  // update text inputs
  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  // handle file selection & preview
  const handleFileChange = e => {
    const img = e.target.files[0]
    setFile(img)
    setPreview(URL.createObjectURL(img))
  }

  // submit handler
  const handleSubmit = async e => {
    e.preventDefault()
    if (!file) {
      return alert('Please select an image')
    }

    // build FormData
    const formData = new FormData()
    formData.append('image', file)
    formData.append('item_name', form.item_name)
    formData.append('description', form.description)
    formData.append('price', form.price)
 
    try {
      const res = await itemCreate(formData)
      console.log('Created item:', res.data)
      setStatus('✅ Item added successfully!')
      // reset form
      setForm({ item_name: '', description: '', price: '' })
      setFile(null)
      setPreview(null)
    } catch (err) {
      console.error(err)
      setStatus(err.response?.data?.error || '❌ Upload failed')
    }
  }

  return (
    <div className="p-6 m-4 bg-gray-50 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Add New Item</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image Upload & Preview */}
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Item Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="item_name"
            value={form.item_name}
            onChange={handleChange}
            placeholder="Cooked Noodles"
            className="w-full px-3 py-2 bg-white border rounded"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="What makes this special..."
            className="w-full px-3 py-2 bg-white border rounded h-32"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="tell"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="15"
            className="w-24 px-3 py-2 bg-white  border rounded"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          ADD
        </button>
      </form>

      {status && (
        <p className="mt-4 text-center">
          {status}
        </p>
      )}
    </div>
  )
}


export default Add