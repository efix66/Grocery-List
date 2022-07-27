import React from "react";
import "./style.css";

const Square = ({ colorValue, hexValue, darkText }) => {
	return (
		<section
			className="square"
			style={{ background: colorValue, color: darkText ? "#000" : "#FFF" }}>
			<p>{colorValue ? colorValue : "Empty Value"}</p>
			<p>{hexValue ? hexValue : null}</p>
		</section>
	);
};

Square.defaultProps = {
	colorValue: "Empty Color Value",
};

export default Square;
