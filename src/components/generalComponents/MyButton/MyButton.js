import { Button } from "react-bootstrap";

import { useState, useEffect } from "react";

const MyButton = ({btn_color}) => 
{
	const [msg, setMsg] = useState([]);

	useEffect(() => {
		setMsg("123")
		console.log(msg);
	}, [msg]);

    return (
		<Button variant="primary" style={{ "backgroundColor": btn_color}}>{msg}</Button>
	);
};

export default MyButton;
