// import { Button } from "react-bootstrap";

import { useState, useEffect } from "react";

import "./MyButton.css";

const MyButton = ({btn_color, txt_color, curr_msg}) => 
{
	const [msg, setMsg] = useState([]);

	// useEffect(() => {
	// 	setMsg("123")
	// 	console.log(msg);
	// }, [msg]);

	// <Button variant="primary" style={{ "backgroundColor": btn_color}}>{msg}</Button>
    return (
		<div class="btn">
			<button type="submit" style={{ "backgroundColor": btn_color, "color": txt_color }}>
				{curr_msg}
			</button>
		</div>
	);
};

export default MyButton;
