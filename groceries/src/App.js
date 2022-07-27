import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import Footer from "./components/Footer";
import Content from "./components/Content";
// import ColorAppComponent from "./Color names/ColorAppComponent";

function App() {
	const API_URL = " http://localhost:3500/items";

	const [items, setItems] = useState([]);

	const [newItem, setNewItem] = useState("");

	const [search, setSearch] = useState("");

	const [fetchError, setFetchError] = useState(null);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error("Did not received expected data");
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (err) {
				setFetchError(err.message);
			} finally {
				setIsLoading(false);
			}
		};
		setTimeout(() => {
			fetchItems();
		}, 2000);
	}, []);

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setItems(listItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem("");
	};

	return (
		<div>
			{/* <ColorAppComponent /> */}
			<Header title="Groceries List" />

			<AddItem
				handleSubmit={handleSubmit}
				newItem={newItem}
				setNewItem={setNewItem}
				addItem={addItem}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.item.toLowerCase().includes(search.toLowerCase())
						)}
						setItems={setItems}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</div>
	);
}

export default App;
