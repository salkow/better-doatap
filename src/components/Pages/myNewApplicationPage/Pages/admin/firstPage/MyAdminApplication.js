import "./MyNewAppFirst.css";
import "./MyNewAppSecond.css";
import "./MyNewAppThird.css";

import MyBreadcrumb from "../../../../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import MyNewAppBreadcrumbs from "../../../components/myNewAppBreadcrumbs/MyNewAppBreadcrumbs";
import MyRadioButton from "../../../../../generalComponents/MyRadioButton/MyRadioButton";
import MySelectBox from "../../../../../generalComponents/mySelectBox/MySelectBox";
import MyFileCard from "../../../components/myFileCard/MyFileCard";

import MyButton from "../../../../../generalComponents/MyButton/MyButton";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import axiosInstance from "../../../../../../axios.js";

const MyAdminApp = ({ loggedIn }) => {
	const params = useParams();

	const [currPage, setCurrPage] = useState(1);
	const [firstPage, setfirstPage] = useState(1);
	const [secondPage, setsecondPage] = useState(1);
	const [thirdPage, setthirdPage] = useState(1);

	const [typeOfDiploma, settypeOfDiploma] = useState("");
	const [country, setCountry] = useState("");
	const [myUni, setMyUni] = useState("");
	const [myDep, setMyDep] = useState("");

	const [otherUni, setOtherUni] = useState("");
	const [otherDep, setOtherDep] = useState("");

	const [diploma, setDiploma] = useState("");
	const [updatedFile, setUpdated] = useState(null);

	const [hasToLogIn, setHasToLogIn] = useState(false);

	const [countries, setCountries] = useState([]);

	const validate = () => {
		if (typeOfDiploma && country && myUni && myDep) {
			setfirstPage(2);
		} else {
			setfirstPage(1);
		}

		if (otherUni && otherDep) {
			setsecondPage(2);
		} else {
			setsecondPage(1);
		}
		if (diploma || updatedFile) {
			setthirdPage(2);
		} else {
			setthirdPage(1);
		}
	};

	const save_on_local_storage = () => {
		localStorage.setItem("typeOfDiploma", typeOfDiploma);
		localStorage.setItem("country", country);
		localStorage.setItem("myUni", myUni);
		localStorage.setItem("myDep", myDep);
		localStorage.setItem("otherUni", otherUni);
		localStorage.setItem("otherDep", otherDep);
		localStorage.setItem("diploma", diploma);
		localStorage.setItem("updatedFile", updatedFile);
	};

	useEffect(() => {
		axiosInstance
			.get(`countries/`)
			.then((res) => {
				return res.data.map((i) => i.name);
			})
			.then((res) => {
				setCountries(res);
			});

		if (params.id !== "-1") {
			axiosInstance.get(`applications/${params.id}`).then((res) => {
				settypeOfDiploma(res.data.type_of_diploma);
				setCountry(res.data.origin_country);
				setMyUni(res.data.origin_university);
				setMyDep(res.data.origin_department);

				setOtherUni(res.data.destination_university);
				setOtherDep(res.data.destination_department);

				setDiploma(res.data.diploma);

				if (
					res.data.type_of_diploma &&
					res.data.origin_country &&
					res.data.origin_university &&
					res.data.origin_department
				) {
					setfirstPage(2);
				} else {
					setfirstPage(1);
				}

				if (
					res.data.destination_university &&
					res.data.destination_department
				) {
					setsecondPage(2);
				} else {
					setsecondPage(1);
				}
				if (res.data.diploma) {
					setthirdPage(2);
				} else {
					setthirdPage(1);
				}
			});
		} else {
			settypeOfDiploma(localStorage.getItem("typeOfDiploma") ?? "");
			setCountry(localStorage.getItem("country") ?? "");
			setMyUni(localStorage.getItem("myUni") ?? "");
			setMyDep(localStorage.getItem("myDep") ?? "");
			setOtherUni(localStorage.getItem("otherUni") ?? "");
			setOtherDep(localStorage.getItem("otherDep") ?? "");
			setDiploma(localStorage.getItem("diploma") ?? "");
			setUpdated(localStorage.getItem("updatedFile") ?? "");

			if (
				localStorage.getItem("typeOfDiploma") &&
				localStorage.getItem("country") &&
				localStorage.getItem("myUni") &&
				localStorage.getItem("myDep")
			) {
				setfirstPage(2);
			} else {
				setfirstPage(1);
			}

			if (
				localStorage.getItem("otherUni") &&
				localStorage.getItem("otherDep")
			) {
				setsecondPage(2);
			} else {
				setsecondPage(1);
			}
			if (
				localStorage.getItem("diploma") ||
				localStorage.getItem("updatedFile")
			) {
				setthirdPage(2);
			} else {
				setthirdPage(1);
			}

			localStorage.removeItem("typeOfDiploma");
			localStorage.removeItem("country");
			localStorage.removeItem("myUni");
			localStorage.removeItem("myDep");
			localStorage.removeItem("otherUni");
			localStorage.removeItem("otherDep");
			localStorage.removeItem("diploma");
			localStorage.removeItem("updatedFile");
		}
	}, []);

	const login = () => {
		save_on_local_storage();
		setHasToLogIn(true);
	};

	if (hasToLogIn) {
		return <Navigate to="/loginPage" />;
	}

	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Κάνε αίτηση" },
	];
	const radioFin = [
		{ item: "Βασικό πτυχίο", value: "B" },
		{ item: "Μεταπτυχιακό", value: "P" },
		{ item: "Διδακτορικό", value: "D" },
	];
	if (currPage === 1) {
		return (
			<div className="content">
				<MyBreadcrumb array={myBread} />
				<div className="external">
					<div className="internal">
						<div className="top">
							<span id="underlined">Λεπτομέρειες Αίτησης: {params.id}</span>
						</div>
						<div className="middle">
							<MyNewAppBreadcrumbs
								setCurr={setCurrPage}
								val={validate}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
							/>
							<div className="middle-items">
								<MyRadioButton
									txt="Επίπεδο Σπουδών"
									items={radioFin}
									vaar={settypeOfDiploma}
									selected={typeOfDiploma}
									disabled={true}
								/>
								<MySelectBox
									txt="Χωρα Σπουδών"
									vaar={setCountry}
									filled={country}
									items={countries}
									setItems={setCountries}
								/>
								<div className="grouped">
									<MySelectBox
										txt="Πανεπιστήμιο"
										vaar={setMyUni}
										filled={myUni}
										items={countries}
										setItems={setCountries}
										disabled={true}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setMyDep}
										filled={myDep}
										items={countries}
										setItems={setCountries}
									/>
								</div>
							</div>
						</div>
						<div className="lower">
							<div className="controls">
								<button
									className="chevronButton"
									type="submit"
									disabled
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_left{" "}
									</i>
								</button>
								<button
									onClick={() => {
										setCurrPage(2);
										validate();
									}}
									className="chevronButton"
									type="submit"
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_right{" "}
									</i>
								</button>
							</div>

							{!loggedIn && (
								<div className="login-promt">
									<span className="login-promt-txt">
										<span id="star">*</span>Απαιτείται
										σύνδεση για
										αποθήκευση/υποβολή/διαγραφή/επαναπεξεργασία
										της αίτησης σας
									</span>
									<MyButton
										btn_color="#A8A8A8"
										txt_color="white"
										curr_msg="Κάνε σύνδεση"
										funcc={login}
									/>
								</div>
							)}

							<div className="buttons">
								<MyButton
									btn_color="#1FAEFF"
									txt_color="white"
									curr_msg="Προσωρινή Αποθήκευση"
									disable={!loggedIn}
								/>
								<MyButton
									btn_color="#DD9F00"
									txt_color="white"
									curr_msg="Οριστική Υποβολή"
									disable={!loggedIn}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (currPage === 2) {
		return (
			<div className="content">
				<MyBreadcrumb array={myBread} />
				<div className="external">
					<div className="internal">
						<div className="top">
							<span id="underlined">Λεπτομέρειες Αίτησης: {params.id}</span>
						</div>
						<div className="middle">
							<MyNewAppBreadcrumbs
								setCurr={setCurrPage}
								val={validate}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
							/>
							<div className="middle-items">
								<div className="grouped">
									<MySelectBox
										txt="Πανεπιστήμιο"
										vaar={setOtherUni}
										filled={otherUni}
										items={countries}
										setItems={setCountries}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setOtherDep}
										filled={otherDep}
										items={countries}
										setItems={setCountries}
									/>
								</div>
							</div>
						</div>
						<div className="lower">
							<div className="controls">
								<button
									onClick={() => {
										setCurrPage(1);
										validate();
									}}
									className="chevronButton"
									type="submit"
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_left{" "}
									</i>
								</button>
								<button
									onClick={() => {
										setCurrPage(3);
										validate();
									}}
									className="chevronButton"
									type="submit"
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_right{" "}
									</i>
								</button>
							</div>
							{!loggedIn && (
								<div className="login-promt">
									<span className="login-promt-txt">
										<span id="star">*</span>Απαιτείται
										σύνδεση για
										αποθήκευση/υποβολή/διαγραφή/επαναπεξεργασία
										της αίτησης σας
									</span>
									<MyButton
										btn_color="#A8A8A8"
										txt_color="white"
										curr_msg="Κάνε σύνδεση"
										funcc={login}
									/>
								</div>
							)}

							<div className="buttons">
								<MyButton
									btn_color="#1FAEFF"
									txt_color="white"
									curr_msg="Προσωρινή Αποθήκευση"
									disable={!loggedIn}
								/>
								<MyButton
									btn_color="#DD9F00"
									txt_color="white"
									curr_msg="Οριστική Υποβολή"
									disable={!loggedIn}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	} else if (currPage === 3) {
		return (
			<div className="content">
				<MyBreadcrumb array={myBread} />
				<div className="external">
					<div className="internal">
						<div className="top">
							<span id="underlined">Λεπτομέρειες Αίτησης: {params.id}</span>
						</div>
						<div className="middle">
							<MyNewAppBreadcrumbs
								setCurr={setCurrPage}
								val={validate}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
							/>
							<div className="middle-items">
								<MyFileCard
									name="Πτυχίο φοίτησης"
									desc="Αφορά το πτυχίου που παραλάβατε αφού ολοκληρώσατε την φοίτησή σας."
									link={diploma}
									setLink={setDiploma}
									setUpdated={setUpdated}
								/>
							</div>
						</div>
						<div className="lower">
							<div className="controls">
								<button
									onClick={() => {
										setCurrPage(2);
										validate();
									}}
									className="chevronButton"
									type="submit"
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_left{" "}
									</i>
								</button>
								<button
									className="chevronButton"
									type="submit"
									disabled
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_right{" "}
									</i>
								</button>
							</div>
							{!loggedIn && (
								<div className="login-promt">
									<span className="login-promt-txt">
										<span id="star">*</span>Απαιτείται
										σύνδεση για
										αποθήκευση/υποβολή/διαγραφή/επαναπεξεργασία
										της αίτησης σας
									</span>
									<MyButton
										btn_color="#A8A8A8"
										txt_color="white"
										curr_msg="Κάνε σύνδεση"
										funcc={login}
									/>
								</div>
							)}

							<div className="buttons">
								<MyButton
									btn_color="#1FAEFF"
									txt_color="white"
									curr_msg="Προσωρινή Αποθήκευση"
									disable={!loggedIn}
								/>
								<MyButton
									btn_color="#DD9F00"
									txt_color="white"
									curr_msg="Οριστική Υποβολή"
									disable={!loggedIn}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default MyAdminApp;
