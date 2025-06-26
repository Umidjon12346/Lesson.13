import { useState } from "react";
import AddCart from "./AddCart";
import Cart from "../components/Cart";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    const filtered = product.filter((item) => item.id !== id);
    setProduct(filtered);
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setOpen(true);
  };

  const handleSave = (updatedItem) => {
    const newList = product.map((el) =>
      el.id === updatedItem.id ? updatedItem : el
    );
    setProduct(newList);
    setEditingItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto"
            onClick={() => {
              setEditingItem(null);
              setOpen(true);
            }}
          >
            Yangi mahsulot qo'shish
          </button>
        </div>
        <div className="flex-1">
          <input
            type="text"
            className="w-full border px-4 py-2 rounded"
            placeholder="Qidirish..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Modal */}
      <AddCart
        isOpen={open}
        toggle={() => setOpen(false)}
        product={product}
        setProduct={setProduct}
        editItem={editingItem}
        onSave={handleSave}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {product
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
            <Cart
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
      </div>
    </div>
  );
};

export default Products;
