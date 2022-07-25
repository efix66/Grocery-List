import React from "react";

const SearchItem = () => {
	return (
		<form className="searchForm" onSubmit={(e) => e.preventDefault()}>
			<label htmlFor="search">Search</label>
			<input
				type="text"
				id="search"
				role="searchbox"
				placeholder="Search Items"
			/>
		</form>
	);
};

export default SearchItem;