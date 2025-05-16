import React from 'react'

function Add() {
  return (
    <div>
        <form class="p-6 m-4 bg-white-100 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6">
 
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Upload image</label>
    <input type="file" accept="image/*" class="file-input file-input-bordered bg-white w-full max-w-xs" />
    <img src="<!-- preview URL here -->" alt="Preview" class="mt-4 w-32 h-32 object-cover  rounded" />
  </div>


  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Product name</label>
    <input type="text" placeholder="Cooked Noodles" class="input bg-white border-black  input-bordered w-full" />
  </div>


  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1 ">Product description</label>
    <textarea placeholder="Food provides essential nutrients for overall health and well-being" class="textarea textarea-bordered bg-white border-black w-full h-32"></textarea>
  </div>

  <div class="flex flex-wrap  gap-4">
    <div class="flex-1 min-w-[200px] ">
      <label class="block text-sm font-medium text-gray-700 mb-1">Product category</label>
      <select class="select select-bordered w-full bg-white">
        <option>Noodles</option>
        <option>Pizza</option>
        <option>Burger</option>
        <option>Dessert</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Product Price</label>
      <input type="tel" placeholder="15" class="input bg-white input-bordered w-24" />
    </div>
  </div>

 
  <div>
    <button class="btn bg-primary text-white w-full max-w-xs">ADD</button>
  </div>
</form>







    </div>
  )
}

export default Add