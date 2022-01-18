import "./MyNewAppFirst.css";
import "./MyNewAppSecond.css";
import "./MyNewAppThird.css";

import MyBreadcrumb from "../../../../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import MyRadioButton from "../../../../../generalComponents/MyRadioButton/MyRadioButton";
import MySelectBox from "../../../../../generalComponents/mySelectBox/MySelectBox";
import MyFileCard from "../../../components/myFileCard/MyFileCard";

import MyButton from "../../../../../generalComponents/MyButton/MyButton";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import axiosInstance from "../../../../../../axios.js";
import MyTextArea from "../../../../../generalComponents/MyTextArea/MyTextArea";
import MyAdminAppBreadcrumbs from "../../../components/myAdminAppBreadcrumbs/MyAdminAppBreadcrumbs";

const MyAdminApp = ({ loggedIn }) => {
	const params = useParams();

	const [currPage, setCurrPage] = useState(1);
	const [firstPage, setfirstPage] = useState(3);
	const [secondPage, setsecondPage] = useState(3);
	const [thirdPage, setthirdPage] = useState(3);

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


	const [reject, setReject] = useState([]);



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
							<span id="underlined">Λεπτομέρειες Αίτησης: {params.id}</span>
						</div>
						<div className="middle">
							<MyAdminAppBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
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
									disabled={true}
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
										disabled={true}
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
							<MyAdminAppBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
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
										disabled={true}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setOtherDep}
										filled={otherDep}
										items={countries}
										setItems={setCountries}
										disabled={true}
									/>
								</div>
							</div>
						</div>
						<div className="lower">
							<div className="controls">
								<button
									onClick={() => {
										setCurrPage(1);
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
							<MyAdminAppBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
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
									disabled={true}
								/>
								<MyTextArea txt={"Γράψε τον λόγο απορριψης:"} filled={reject} setFilled={setReject}/>
								<MyButton
									btn_color="#E37171"
									txt_color="#FFFFFF"
									curr_msg="Απόρριψη"
									disable={!reject}
								/>
							</div>
						</div>
						<div className="lower">
							<div className="controls">
								<button
									onClick={() => {
										setCurrPage(2);
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
									onClick={() =>{
										setCurrPage(4)
									}}
								>
									<i className="material-icons chevron-item">
										{" "}
										chevron_right{" "}
									</i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}else if (currPage === 4) {
		return (
			<div className="content">
				<MyBreadcrumb array={myBread} />
				<div className="external">
					<div className="internal">
						<div className="top">
							<span id="underlined">Λεπτομέρειες Αίτησης: {params.id}</span>
						</div>
						<div className="middle">
							<MyAdminAppBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
								curr={currPage}
								first={firstPage}
								second={secondPage}
								third={thirdPage}
							/>
							<div className="middle-items">
								<MySelectBox
									txt="Μαθημα"
									vaar={setOtherDep}
									filled={otherDep}
									items={countries}
									setItems={setCountries}
								/>
							</div>
						</div>
						<div className="lower">
							<div className="controls">
								<button
									onClick={() => {
										setCurrPage(3);
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
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default MyAdminApp;
