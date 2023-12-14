import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackaingList from "./PackaingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Shirt", quantity: 12, packed: false },
//   { id: 4, description: "Pant", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    console.log(items);
    setItems((items) => [...items, item]);
  }
  console.log(items);

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleCheckedItems(id) {
    console.log(id);

    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackaingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onCheckedItems={handleCheckedItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
