import React, { useEffect, useState } from "react";

function AddCart({ isOpen, toggle, product, setProduct, editItem, onSave }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg",
  });

  useEffect(() => {
    if (editItem) {
      setForm({
        id: editItem.id,
        name: editItem.name || "",
        price: editItem.price || "",
        sale: editItem.sale || "",
        quantity: editItem.quantity || "",
        img:
          editItem.img ||
          "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
      });
    } else {
      setForm({
        name: "",
        price: "",
        sale: "",
        quantity: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg",
      });
    }
  }, [editItem, isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editItem) {
      onSave({ ...form });
    } else {
      const newItem = {
        ...form,
        id: Date.now(),
      };
      setProduct([...product, newItem]);
    }

    toggle();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={toggle}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">
          {editItem ? "Mahsulotni tahrirlash" : "Yangi mahsulot qo'shish"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Nomi</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Narxi</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Chegirma (%)</label>
            <input
              type="number"
              name="sale"
              value={form.sale}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium">Soni</label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={toggle}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Bekor qilish
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {editItem ? "Saqlash" : "Qo‘shish"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCart;
