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
import axiosInstanceFD from "../../../../axios.js";


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

	const [diplomaFile, setDiplomaFile] = useState("");
	const [diplomaName, setDiplomaName] = useState("");

	const [uploaded, setUploaded] = useState(null);

	const [hasToLogIn, setHasToLogIn] = useState(false);

	const [allCountries, setAllCountries] = useState([]);
	const [allUniversities, setAllUniversities] = useState([]);
	const [allDepartments, setAllDepartments] = useState([]);

	const [countries, setCountries] = useState([]);
	const [myUniversities, setMyUniversities] = useState([]);
	const [myDepartments, setMyDepartments] = useState([]);

	const [otherUniversities, setOtherUniversities] = useState([]);
	const [otherDepartments, setOtherDepartments] = useState([]);


	const [submited, setSubmited] = useState(false);
	const [reddirect, setReddirect] = useState(false);

	const TempSave = () => {
		const fd = new FormData();
		if(uploaded !== null){
			fd.append('diploma', uploaded);
		}
		fd.append("name", getName());
		fd.append("is_submitted", false);
		fd.append("origin_country_1", country);
		fd.append("origin_university_1", myUni);
		fd.append("origin_department_1", myDep);
		fd.append("destination_university_1", otherUni);
		fd.append("destination_department_1", otherDep);
		fd.append("type_of_diploma", typeOfDiploma);

		if(params.id !== "-1"){
			axiosInstanceFD.patch("applications/"+params.id+"/", fd);
		}else{
			axiosInstanceFD.post("applications/x/", fd);			
		}

		setReddirect(true);
	};

	const FullSubmit =  () =>{
		const fd = new FormData();
		if(uploaded !== null){
			fd.append('diploma', uploaded);
		}
		fd.append("name", getName());
		fd.append("is_submitted", true);
		fd.append("progress", "P");
		fd.append("origin_country_1", country)
		fd.append("origin_university_1", myUni);
		fd.append("origin_department_1", myDep);
		fd.append("destination_university_1", otherUni);
		fd.append("destination_department_1", otherDep);
		fd.append("type_of_diploma", typeOfDiploma);
		if(params.id !== "-1"){
			axiosInstanceFD.patch("applications/"+params.id+"/", fd);
		}else{
			axiosInstanceFD.post("applications/x/", fd);			
		}

		setReddirect(true);
	};

	const getName = () =>{
		if(typeOfDiploma === "B"){
			return 'Αιτηση βασικου πτυχιου'
		}else if(typeOfDiploma === "P"){
			return 'Αιτηση μεταπτυχιακου πτυχιου'
		}else{
			return 'Αιτηση διδακτορικου πτυχιου'
		}
	}

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
						setAllUniversities(res);
						// setMyUni("");
						// setMyDep("");
					});
			}
		}, 500);

		return () => clearTimeout(delayDebounceFn);
	}, [country]);

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			if (myUni.length !== 0) {
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
						setAllDepartments(res);
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
		if (typeOfDiploma === "" ||
			country === "" ||
			myUni === "" ||
			myDep === "") {
			setsecondPageDisabled(true);
			setthirdPageDisabled(true);
		}else {
			setsecondPageDisabled(false);
			setfirstPage(2);
			setsecondPage(2);
			setthirdPageDisabled(false);
			if (uploaded === null) {
				setfirstPage(2);
				setthirdPage(1);
				return true;
			} else {
				setfirstPage(2);
				setsecondPage(2);
				setthirdPage(2);
			}
		}
		return false;
	};

	useEffect(() => {
		validate();
	}, [
		typeOfDiploma,
		country,
		myUni,
		myDep,
		otherUni,
		otherDep,
		diplomaFile,
		uploaded,
	]);

	const fieldsOK = () => {
		if (
			typeOfDiploma === "" ||
			country === "" ||
			myUni === "" ||
			myDep === ""
		) {
		} else {
			if (uploaded === null){
				return true;
			}
		}
		return false;
	};

	function blobToFile(theBlob, fileName){
		//A Blob() is almost a File() - it's just missing the two properties below which we will add
		theBlob.lastModifiedDate = new Date();
		theBlob.name = fileName;
		return theBlob;
	}

	const save_on_local_storage = () => {
		console.log("I saved the data.");
		localStorage.setItem("was_in_new_app", true);
		localStorage.setItem("typeOfDiploma", typeOfDiploma);
		localStorage.setItem("country", country);
		localStorage.setItem("myUni", myUni);
		localStorage.setItem("myDep", myDep);
		localStorage.setItem("otherUni", otherUni);
		localStorage.setItem("otherDep", otherDep);
		if(uploaded !== null){
			// /* */
			localStorage.setItem("uploaded", URL.createObjectURL(uploaded));
			console.log(uploaded.name)
			localStorage.setItem("uploadedName", uploaded.name);
			// /* */
		}else{
			localStorage.setItem("diploma", diplomaFile);
		}
	};

	useEffect(async() => {
		axiosInstance
			.get(`countries/`)
			.then((res) => {
				const arr = res.data.map((i) => i.name);
				return arr.filter((item) => item !== "Greece");
			})
			.then((res) => {
				setCountries(res);
				setAllCountries(res);
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
				setSubmited(res.data.is_submitted);
				settypeOfDiploma(res.data.type_of_diploma);
				setCountry(res.data.origin_country_1);
				setMyUni(res.data.origin_university_1);
				setMyDep(res.data.origin_department_1);

				setOtherUni(res.data.destination_university_1);
				setOtherDep(res.data.destination_department_1);

				
				setDiplomaFile(res.data.diploma);
				setDiplomaName(res.data.diploma.substring(res.data.diploma.lastIndexOf('/') + 1))
			});
		} else {
			settypeOfDiploma(localStorage.getItem("typeOfDiploma") ?? "");
			setCountry(localStorage.getItem("country") ?? "");
			setMyUni(localStorage.getItem("myUni") ?? "");
			setMyDep(localStorage.getItem("myDep") ?? "");
			setOtherUni(localStorage.getItem("otherUni") ?? "");
			setOtherDep(localStorage.getItem("otherDep") ?? "");

			if(localStorage["uploaded"]){
				/* */
				var url = localStorage.getItem("uploaded");
				var myblob = await fetch(url).then(r => r.blob())
				console.log(localStorage.getItem("uploadedName"))
				var file = new File([myblob], localStorage.getItem("uploadedName"), {type: myblob.type});
				setUploaded(file);
				/* */

				setDiplomaFile(window.URL.createObjectURL(file));
				setDiplomaName(file.name);
				localStorage.removeItem("uploaded");
				localStorage.removeItem("uploadedName");
			}else if(localStorage.getItem("diploma")){
				setDiplomaFile(localStorage.getItem("diploma") ?? "");
				setDiplomaName(localStorage.getItem("diploma").substring(localStorage.getItem("diploma").lastIndexOf('/') + 1))
				localStorage.removeItem("diploma");
			}else{
				setDiplomaName("");
				setDiplomaFile("");
			}

			localStorage.removeItem("typeOfDiploma");
			localStorage.removeItem("country");
			localStorage.removeItem("myUni");
			localStorage.removeItem("myDep");
			localStorage.removeItem("otherUni");
			localStorage.removeItem("otherDep");
		}
	}, []);

	const login = () => {
		save_on_local_storage();
		setHasToLogIn(true);
	};

	if (reddirect) {
		return <Navigate to="/myApplications" />;
	}

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
									disabled={submited}
								/>
								<MySelectBox
									txt="Χωρα Σπουδών"
									vaar={setCountry}
									filled={country}
									items={countries}
									setItems={setCountries}
									all_items={allCountries}
									disabled={submited}
								/>
								<div className="grouped">
									<MySelectBox
										txt="Πανεπιστήμιο"
										vaar={setMyUni}
										filled={myUni}
										items={myUniversities}
										setItems={setMyUniversities}
										all_items={allUniversities}
										disabled={submited}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setMyDep}
										filled={myDep}
										items={myDepartments}
										setItems={setMyDepartments}
										all_items={allDepartments}
										disabled={submited}
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
										all_items={allUniversities}
										disabled={submited}
										star={true}
									/>
									<MySelectBox
										txt="Τμήμα"
										vaar={setOtherDep}
										filled={otherDep}
										items={otherDepartments}
										setItems={setOtherDepartments}
										all_items={allDepartments}
										disabled={submited}
										star={true}
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
									link={diplomaFile}
									file_name={diplomaName}
									setLink={setDiplomaFile}
									setFileName={setDiplomaName}
									setUploaded={setUploaded}
									disabled={submited}
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
										btn_color="#3069fc"
										txt_color="white"
										curr_msg="Προσωρινή Αποθήκευση"
										disable={submited || !loggedIn}
										funcc={TempSave}
									/>
									<MyButton
										btn_color="#DD9F00"
										txt_color="white"
										curr_msg="Οριστική Υποβολή"
										disable={submited || fieldsOK() || !loggedIn}
										funcc={FullSubmit}
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
