import React, { useState, useEffect } from "react";
import { ref, set, push, onValue } from "firebase/database";
import { database } from "../utils/firebase";

interface MenuItem {
  id?: string;
  category: string;
  name: string;
  options?: string[];
  price: number;
  cost: number;
  stock: number;
}

const MenuManager: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [currentItem, setCurrentItem] = useState<MenuItem>({
    category: "",
    name: "",
    options: [],
    price: 0,
    cost: 0,
    stock: 0,
  });

  useEffect(() => {
    const menuRef = ref(database, "menu/");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const items = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setMenuItems(items);
      }
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const menuRef = ref(database, "menu/");
    if (currentItem.id) {
      set(ref(database, `menu/${currentItem.id}`), currentItem);
    } else {
      const newItemRef = push(menuRef);
      set(newItemRef, currentItem);
    }
    setCurrentItem({
      category: "",
      name: "",
      options: [],
      price: 0,
      cost: 0,
      stock: 0,
    });
  };

  const handleEdit = (item: MenuItem) => {
    setCurrentItem(item);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Menu Manager</h1>
        <input
          type="text"
          name="category"
          value={currentItem.category}
          onChange={handleChange}
          placeholder="Category"
          className="input"
        />
        <input
          type="text"
          name="name"
          value={currentItem.name}
          onChange={handleChange}
          placeholder="Name"
          className="input"
        />
        <input
          type="text"
          name="options"
          value={currentItem.options?.join(", ")}
          onChange={(e) =>
            setCurrentItem({
              ...currentItem,
              options: e.target.value.split(", "),
            })
          }
          placeholder="Options (comma separated)"
          className="input"
        />
        <input
          type="number"
          name="price"
          value={currentItem.price}
          onChange={handleChange}
          placeholder="Price"
          className="input"
        />
        <input
          type="number"
          name="cost"
          value={currentItem.cost}
          onChange={handleChange}
          placeholder="Cost"
          className="input"
        />
        <input
          type="number"
          name="stock"
          value={currentItem.stock}
          onChange={handleChange}
          placeholder="Stock"
          className="input"
        />
        <button onClick={handleSave} className="btn btn-primary mt-2">
          Save Item
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold">Menu Items</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              {item.name} ({item.category}) - ${item.price}
              <button
                onClick={() => handleEdit(item)}
                className="btn btn-secondary ml-2"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuManager;
