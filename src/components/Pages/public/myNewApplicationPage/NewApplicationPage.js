import "./MyNewAppFirst.css";
import "./MyNewAppSecond.css";
import "./MyNewAppThird.css";

import MyBreadcrumb from "../../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import UserAppBreadcrumbs from "./UserAppBreadcrumbs/UserAppBreadcrumbs";
import MyRadioButton from "../../../generalComponents/MyRadioButton/MyRadioButton";
import MySelectBox from "../../../generalComponents/mySelectBox/MySelectBox";
import MyButton from "../../../generalComponents/MyButton/MyButton";

import MyFileCard from "../../components/myFileCard/MyFileCard";

import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import axiosInstance from "../../../../axios.js";

const NewApplicationPage = ({ loggedIn }) => {
	const params = useParams();

	const [currPage, setCurrPage] = useState(1);
	const [firstPage, setfirstPage] = useState(3);
	const [secondPage, setsecondPage] = useState(3);
	const [secondPageDisabled, setsecondPageDisabled] = useState(true);
	const [thirdPage, setthirdPage] = useState(3);
	const [thirdPageDisabled, setthirdPageDisabled] = useState(true);

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
	const [myUniversities, setMyUniversities] = useState([]);
	const [myDepartments, setMyDepartments] = useState([]);

	const [otherUniversities, setOtherUniversities] = useState([]);
	const [otherDepartments, setOtherDepartments] = useState([]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (country.length !== 0) {
				axiosInstance
					.get("countries/" + country)
					.catch(() => {
						setMyUniversities([]);
						return [];
					})
					.then((res) => {
						return res.data.map((i) => i.name);
					})
					.then((res) => {
						setMyUniversities(res);
						// setMyUni("");
						// setMyDep("");
					});
			}
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [country]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (myUni.length !== 0 && country.length !== 0) {
				axiosInstance
					.get("countries/" + country + "/" + myUni)
					.catch(() => {
						setMyDepartments([]);
						return [];
					})
					.then((res) => {
						return res.data.map((i) => i.name);
					})
					.then((res) => {
						setMyDepartments(res);
					});
			}
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [myUni]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (otherUni.length !== 0) {
				axiosInstance
					.get("countries/Greece/" + otherUni)
					.catch(() => {
						setOtherDepartments([]);
						return [];
					})
					.then((res) => {
						return res.data.map((i) => i.name);
					})
					.then((res) => {
						setOtherDepartments(res);
						// setOtherDep("");
					});
			}
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [otherUni]);

	const validate = () => {
		if (
			typeOfDiploma === "" ||
			country === "" ||
			myUni === "" ||
			myDep === ""
		) {
			setsecondPageDisabled(true);
			setthirdPageDisabled(true);
		} else {
			setsecondPageDisabled(false);
			setfirstPage(2);
			// if(otherUni === "" || otherDep === ""){//TODO switch to this cause these wont ever be null
			if (
				otherUni === "" ||
				otherDep === "" ||
				otherUni === null ||
				otherDep === null
			) {
				setthirdPageDisabled(true);
				setsecondPage(1);
			} else {
				setfirstPage(2);
				setsecondPage(2);
				setthirdPageDisabled(false);
				if (
					diploma === "" &&
					(updatedFile === null || updatedFile === "")
				) {
					setfirstPage(2);
					setthirdPage(1);
					return true;
				} else {
					setfirstPage(2);
					setsecondPage(2);
					setthirdPage(2);
				}
			}
		}
		return false;
	};

	useEffect(() => {
		// save_on_local_storage();
		validate();
	}, [
		typeOfDiploma,
		country,
		myUni,
		myDep,
		otherUni,
		otherDep,
		diploma,
		updatedFile,
	]);

	const fieldsOK = () => {
		if (
			typeOfDiploma === "" ||
			country === "" ||
			myUni === "" ||
			myDep === ""
		) {
		} else {
			if (
				otherUni === "" ||
				otherDep === "" ||
				otherUni === null ||
				otherDep === null
			) {
			} else {
				if (
					diploma === "" &&
					(updatedFile === null || updatedFile === "")
				) {
					return true;
				}
			}
		}
		return false;
	};

	const save_on_local_storage = () => {
		console.log("I saved the data.");
		localStorage.setItem("was_in_new_app", true);
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
				const arr = res.data.map((i) => i.name);
				return arr.filter((item) => item !== "Greece");
			})
			.then((res) => {
				setCountries(res);
			});

		axiosInstance
			.get(`countries/Greece`)
			.then((res) => {
				return res.data.map((i) => i.name);
			})
			.then((res) => {
				setOtherUniversities(res);
			});

		if (params.id !== "-1") {
			axiosInstance.get(`applications/${params.id}`).then((res) => {
				settypeOfDiploma(res.data.type_of_diploma);
				setCountry(res.data.origin_country_1);
				setMyUni(res.data.origin_university_1);
				setMyDep(res.data.origin_department_1);

				setOtherUni(res.data.destination_university_1);
				setOtherDep(res.data.destination_department_1);

				setDiploma(res.data.diploma);
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
							<span id="underlined">Κάνε Αίτηση</span>
						</div>
						<div className="middle">
							<UserAppBreadcrumbs
								setCurr={setCurrPage}
								val={validate}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
								firstdis={false}
								seconddis={secondPageDisabled}
								thirddis={thirdPageDisabled}
							/>
							<div className="middle-items">
								<MyRadioButton
									txt="Επίπεδο Σπουδών"
									items={radioFin}
									vaar={settypeOfDiploma}
									selected={typeOfDiploma}
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
										items={myUniversities}
										setItems={setMyUniversities}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setMyDep}
										filled={myDep}
										items={myDepartments}
										setItems={setMyDepartments}
									/>
								</div>
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
							<span id="underlined">Κάνε Αίτηση</span>
						</div>
						<div className="middle">
							<UserAppBreadcrumbs
								setCurr={setCurrPage}
								val={validate}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
								firstdis={false}
								seconddis={secondPageDisabled}
								thirddis={thirdPageDisabled}
							/>
							<div className="middle-items">
								<div className="grouped">
									<MySelectBox
										txt="Πανεπιστήμιο"
										vaar={setOtherUni}
										filled={otherUni}
										items={otherUniversities}
										setItems={setOtherUniversities}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setOtherDep}
										filled={otherDep}
										items={otherDepartments}
										setItems={setOtherDepartments}
									/>
								</div>
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
							<span id="underlined">Κάνε Αίτηση</span>
						</div>
						<div className="middle">
							<UserAppBreadcrumbs
								setCurr={setCurrPage}
								val={validate}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
								firstdis={false}
								seconddis={secondPageDisabled}
								thirddis={thirdPageDisabled}
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
							{!loggedIn ? (
								<div className="login-promt">
									<span className="login-promt-txt">
										<span id="star">*</span>
										Απαιτείται σύνδεση για
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
							) : (
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
										disable={fieldsOK() || !loggedIn}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default NewApplicationPage;
