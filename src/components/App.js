import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackageList from "./PackageList";
import Stats from "./Stats";

export default function App() {
  const [items, setitems] = useState([]);
  function handleAddItems(item) {
    setitems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all Items?"
    );
    if (confirmed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackageList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
