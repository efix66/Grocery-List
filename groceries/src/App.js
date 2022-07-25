import React, { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("shoppinglist"))
	);

	const [newItem, setNewItem] = useState("");

	const setAndSaveItems = (newItems) => {
		setItems(newItems);
		localStorage.setItem("shoppinglist", JSON.stringify(newItems));
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setAndSaveItems(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setAndSaveItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem("");
	};

	return (
		<div>
			<Header title="Groceries List" />
			<AddItem
				handleSubmit={handleSubmit}
				newItem={newItem}
				setNewItem={setNewItem}
				addItem={addItem}
			/>
			<Content
				items={items}
				setItems={setItems}
				handleCheck={handleCheck}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
