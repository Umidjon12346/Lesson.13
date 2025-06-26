import React from "react";

function Cart({ item, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border">
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-center text-lg font-semibold">{item.name}</h3>

        <div className="flex justify-between text-sm text-gray-700">
          <p>Price: {item.price}</p>
          <p>Qty: {item.quantity}</p>
        </div>

        <div className="flex justify-between gap-2 mt-3">
          <button
            onClick={() => onEdit(item)}
            className="flex-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Update
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="flex-1 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
