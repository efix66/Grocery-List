import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem">Add New Item</label>
			<input
				autoFocus
				required
				id="addItem"
				placeholder="Add new Itemd"
				type="text"
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button type="submit" aria-label="Add new Item">
				<FaPlus />
			</button>
		</form>
	);
};

export default AddItem;
