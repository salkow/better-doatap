import "./MySelectBox.css";

import { useState, useEffect } from "react";

const MySelectBox = ({ txt, filled, vaar, items, setItems }) => {
	// const [items, setItems] = useState([
	// 	"First",
	// 	"Second",
	// 	"Third",
	// 	"Fourth",
	// 	"Fifth",
	// ]);
	const [allItems, setAllItems] = useState([]);

	useEffect(() => {
		if (allItems.length === 0) {
			setAllItems(items);
		}
	}, [items]);

	// const [curr, setCurr] = useState([]);
	function setActiveElement(event) {
		// console.log(event.target)
		event.preventDefault();
		// let el = event.currentTarget.querySelector('.container-options-select');
		let el = event.currentTarget.nextElementSibling;
		let inpu = event.currentTarget.querySelector(".expandInput");
		if (
			event.target.classList.contains("expandButton") ||
			event.target.classList.contains("expand-item")
		) {
			// console.log("test")
			if (el.classList.contains("active")) {
				el.classList.remove("active");
				inpu.parentElement.blur();
				console.log(inpu.parentElement);
				inpu.blur();
			} else {
				el.classList.add("active");
				inpu.focus();
			}
		} else {
			el.classList.add("active");
			inpu.focus();
		}

		// console.log(el)
	}
	function removeActiveElement(event) {
		event.preventDefault();
		let el =
			event.currentTarget.parentElement.parentElement.nextElementSibling;
		// console.log(el);
		el.classList.toggle("active");
	}

	function filter(event) {
		vaar(event);

		setItems(
			allItems.filter((name) => {
				return name.includes(event);
			})
		);
	}

	return (
		items !== undefined && (
			<div className="external-select">
				<div className="external-txt-select">
					<div
						className="internal-txt-select"
						onClick={setActiveElement}
					>
						<div className="top-txt-select">
							<span>
								<span id="star-select">*</span>
								{txt}
							</span>
						</div>
						<div className="expandBox">
							<input
								className="expandInput"
								type="text"
								name="q"
								placeholder="Αναζήτηση..."
								autoComplete="off"
								// onChange={(e) => vaar(e.target.value)}
								onChange={(e) => filter(e.target.value)}
								value={filled}
								onBlur={(e) => {
									removeActiveElement(e);
								}}
							/>
							<button className="expandButton" type="submit">
								<i className="material-icons expand-item">
									{" "}
									expand_more{" "}
								</i>
							</button>
						</div>
					</div>
					<div className="container-options-select">
						{items.map((item, index) => (
							<div className="option-select-div" key={index}>
								<input
									type="radio"
									className="radio"
									id="test1"
									value={item}
									name="test"
								/>
								<label
									className="option-select"
									htmlFor="test1"
									onClick={(e) => {
										vaar(e.target.previousSibling.value);
									}}
								>
									{item}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default MySelectBox;
