import React from "react";
import colorNames from "colornames";

const Input = ({
	colorValue,
	setColorValue,
	setHexValue,
	darkText,
	setDarkText,
}) => {
	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<input
				autoFocus
				type="text"
				name=""
				id=""
				value={colorValue}
				onChange={(e) => {
					setColorValue(e.target.value);
					setHexValue(colorNames(e.target.value));
				}}
			/>
			<button
				className="button"
				type="button"
				onClick={() => setDarkText(!darkText)}>
				Toggle text Color{" "}
			</button>
		</form>
	);
};

export default Input;
