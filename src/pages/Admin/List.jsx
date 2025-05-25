import React, { useEffect, useState } from 'react'
import { getItems, deleteItemById, updateItemById } from '../../services/itemApi'

function List() {
  const [list, setList] = useState([])
  const [editId, setEditId] = useState(null)
  const [editForm, setEditForm] = useState({
    item_name: '',
    description: '',
    price: ''
  })

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const res = await getItems()
      setList(res?.data || [])
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteItemById(id)
      setList(list.filter(item => item._id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const handleEdit = (item) => {
    setEditId(item._id)
    setEditForm({
      item_name: item.item_name,
      description: item.description,
      price: item.price
    })
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditForm(prev => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async (id) => {
    try {
      await updateItemById(id, editForm)
      setEditId(null)
      fetchItems()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="overflow-x-auto p-6">
      <table className="table w-full">
        <thead>
          <tr className="text-black">
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <tr key={item._id} className="text-black">
              <td><img src={item.image} alt="Food" className="w-12 h-12 rounded object-cover" /></td>
              <td>
                {editId === item._id ? (
                  <input
                    type="text"
                    name="item_name"
                    value={editForm.item_name}
                    onChange={handleEditChange}
                    className="input bg-white border-black input-bordered"
                  />
                ) : (
                  item.item_name
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <input
                    type="text"
                    name="description"
                    value={editForm.description}
                    onChange={handleEditChange}
                    className="input bg-white border-black input-bordered"
                  />
                ) : (
                  item.description
                )}
              </td>
              <td>
                {editId === item._id ? (
                  <input
                    type="number"
                    name="price"
                    value={editForm.price}
                    onChange={handleEditChange}
                    className="input bg-white border-black input-bordered w-20"
                  />
                ) : (
                  item.price
                )}
              </td>
              <td className="space-x-2">
                {editId === item._id ? (
                  <button
                    className="btn btn-success btn-xs"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-info btn-xs"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="btn btn-error btn-xs"
                  onClick={() => handleDelete(item._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List
