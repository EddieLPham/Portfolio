import React, { useState, useEffect } from "react";
import "../css/Style.scss"; // You'll create this CSS file for styling

const Background = () => {
	return (
		<div className="container">
			<div className="stars">
				{Array.from({ length: 100 }, (_, index) => (
					<div className="star" key={index}></div>
				))}
			</div>
		</div>
	);
};

export default Background;
