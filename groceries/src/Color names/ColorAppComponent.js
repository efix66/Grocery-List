import React from "react";
import Square from "./Square";
import Input from "./Input";
import { useState } from "react";

const ColorAppComponent = () => {
	const [colorValue, setColorValue] = useState("");
	const [hexValue, setHexValue] = useState("");
	const [darkText, setDarkText] = useState(true);
	return (
		<div className="App">
			<Square colorValue={colorValue} hexValue={hexValue} darkText={darkText} />
			<Input
				colorValue={colorValue}
				setColorValue={setColorValue}
				setHexValue={setHexValue}
				darkText={darkText}
				setDarkText={setDarkText}
			/>
    
		</div>
	);
};

export default ColorAppComponent;
