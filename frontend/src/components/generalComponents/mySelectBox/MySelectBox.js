import "./MySelectBox.css";

import { useState, useEffect } from "react";

const MySelectBox = ({
	txt,
	filled,
	vaar,
	items,
	setItems,
	disabled,
	all_items,
	star
}) => {
	// const [items, setItems] = useState([
	// 	"First",
	// 	"Second",
	// 	"Third",
	// 	"Fourth",
	// 	"Fifth",
	// ]);
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);

	useEffect(() => {}, [items]);

	// const [curr, setCurr] = useState([]);
	function setActiveElement(event) {
		if (!disabled) {
			event.preventDefault();
			// let el = event.currentTarget.querySelector('.container-options-select');
			let el = event.currentTarget.nextElementSibling;
			let inpu = event.currentTarget.querySelector(".expandInput");
			if (
				event.target.classList.contains("expandButton") ||
				event.target.classList.contains("expand-item")
			) {
				if (el.classList.contains("active")) {
					el.classList.remove("active");
					inpu.parentElement.blur();
					inpu.blur();
				} else {
					el.classList.add("active");
					inpu.focus();
				}
			} else {
				el.classList.add("active");
				inpu.focus();
			}
		}
	}
	function removeActiveElement(event) {
		if (!disabled) {
			event.preventDefault();
			let el =
				event.currentTarget.parentElement.parentElement
					.nextElementSibling;
			el.classList.toggle("active");
		}
	}

	function filter(event) {
		vaar(event);

		let tmp = all_items;

		setItems(
			tmp.filter((name) => {
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
							<span>{!star && (<span id="star-select">*</span>)}<label htmlFor={id}>{txt}</label></span>
						</div>
						<div
							className={
								"expandBox" + (disabled ? " disabled" : "")
							}
						>
							<input
								className="expandInput"
								type="text"
								name="q"
								placeholder="??????????????????..."
								autoComplete="off"
								// onChange={(e) => vaar(e.target.value)}
								id={id}
								onChange={(e) => filter(e.target.value)}
								value={filled}
								onBlur={(e) => {
									removeActiveElement(e);
								}}
								disabled={disabled}
							/>
							<button
								className="expandButton"
								type="submit"
								disabled={disabled}
							>
								<i className="material-icons expand-item">
									{" "}
									expand_more{" "}
								</i>
							</button>
						</div>
					</div>
					<div className="container-options-select">
						{!disabled && (
							items.map((item, index) => (
								<div className="option-select-div" key={index}>
									<input
										type="radio"
										className="radio"
										id={id+"test"+index}
										value={item}
										name="test"
									/>
									<label
										className="option-select"
										htmlFor={id+"test"+index}
										onClick={(e) => {
											vaar(e.target.previousSibling.value);
										}}
									>
										{item}
									</label>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		)
	);
};

export default MySelectBox;
