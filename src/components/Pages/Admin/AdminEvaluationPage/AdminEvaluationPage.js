import "./MyNewAppFirst.css";
import "./MyNewAppSecond.css";
import "./MyNewAppThird.css";

import MyBreadcrumb from "../../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import MyRadioButton from "../../../generalComponents/MyRadioButton/MyRadioButton";
import MySelectBox from "../../../generalComponents/mySelectBox/MySelectBox";
import MyFileCard from "../../components/myFileCard/MyFileCard";

import MyButton from "../../../generalComponents/MyButton/MyButton";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import axiosInstance from "../../../../axios.js";
import MyTextArea from "../../../generalComponents/MyTextArea/MyTextArea";
import AdminEvalBreadcrumbs from "./AdminEvalBreadcrumbs/AdminEvalBreadcrumbs";

const AdminEvaluationPage = ({ loggedIn }) => {
	const params = useParams();

	const [currPage, setCurrPage] = useState(1);

	const [typeOfDiploma, settypeOfDiploma] = useState("");
	const [country, setCountry] = useState("");
	const [myUni, setMyUni] = useState("");
	const [myDep, setMyDep] = useState("");

	const [otherUni, setOtherUni] = useState("");
	const [otherDep, setOtherDep] = useState("");

	const [diploma, setDiploma] = useState("");


	const [countries, setCountries] = useState([]);


	const [reject, setReject] = useState("");
	

	const [classToTake, setclassToTake] = useState([{id: 0, value:""}]);
	const [classFinal, setclassFinal] = useState([]);
	const [classMaxID, setclassMaxID] = useState(1);

	const [redirect, setRedirect] = useState(false);

	const acceptRequest = async () =>{
		axiosInstance
		.patch('applications/'+params.id+'/', {
			progress: 'A'
		})
		.then(()=>{
			setRedirect(true);
		})
	}

	const makeUsuableArray = () =>{
		var t = ""
		classFinal.map((e)=>{
			t = t + e.value + ', '
		})

		return t.slice(0,-2);
	}

	const declineRequest = async () =>{
		axiosInstance
		.patch('applications/'+params.id+'/', {
			progress: 'D',
			reasons_for_declination: reject,
			extra_subject: makeUsuableArray()
		})
		.then(()=>{
			setRedirect(true);
		})
	}

	const RemoveItem = (id)=>{
		setclassToTake(classToTake.filter(d => d.id !== id));
		setclassFinal(classToTake.filter(i=> i.value !== ""));
	}

	const AppendItem = () =>{
		setclassToTake(classToTake => [...classToTake,{id: classMaxID+1, value: ""}]);
		setclassFinal(classToTake.filter(i=> i.value !== ""));
		setclassFinal(classToTake.filter(i=> i.value !== ""));
		setclassMaxID(classMaxID+1);
	}

	const updateCurrItemTxt = (item, e) => {
		item.value = e;
		setclassFinal(classToTake.filter(i=> i.value !== ""));
	}

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
				setCountry(res.data.origin_country_1);
				setMyUni(res.data.origin_university_1);
				setMyDep(res.data.origin_department_1);

				setOtherUni(res.data.destination_university_1);
				setOtherDep(res.data.destination_department_1);

				setDiploma(res.data.diploma);
			});
		}
	}, []);

	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Κάνε αίτηση" },
	];
	const radioFin = [
		{ item: "Βασικό πτυχίο", value: "B" },
		{ item: "Μεταπτυχιακό", value: "P" },
		{ item: "Διδακτορικό", value: "D" },
	];

	if(redirect === true){
		return <Navigate to="/myAdminApplications"/>;
	}
	

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
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
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
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
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
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
							/>
							<div className="middle-items">
								<MyFileCard
									name="Πτυχίο φοίτησης"
									desc="Αφορά το πτυχίου που παραλάβατε αφού ολοκληρώσατε την φοίτησή σας."
									link={diploma}
									setLink={setDiploma}
									disabled={true}
								/>
							</div>
						</div>
						<div className="lower">

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
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={()=>{}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
							/>
							<div className="middle-items">
							{classToTake.map((item, index)=>{
								if(classToTake.length === 1){//only +
									return(
									<div key={index} className="classes-boxes class-boxes-first">
										<button
											className="chevronButton"
											type="submit"
											onClick={()=>{AppendItem()}}
											disabled={!item.value}
											>
											<i className="material-icons chevron-item add">
												{" "}
												add{" "}
											</i>
										</button>
										<MySelectBox
											txt="Μαθημα"
											vaar={(e)=>{updateCurrItemTxt(item, e)}}
											filled={item.value}
											items={countries}
											setItems={setCountries}
										/>
									</div>
									);
								}else{
									if(classToTake.length === index+1){ // - +
										return(
											<div key={index} className="classes-boxes">
											<button
												className="chevronButton"
												type="submit"
												onClick={()=>{AppendItem()}}
												disabled={!item.value}
												>
												<i className="material-icons chevron-item add">
													{" "}
													add{" "}
												</i>
											</button>					
											<MySelectBox
												txt="Μαθημα"
												vaar={(e)=>{updateCurrItemTxt(item, e)}}
												filled={item.value}
												items={countries}
												setItems={setCountries}
											/>
											<button
												className="chevronButton"
												type="submit"
												onClick={()=>{RemoveItem(item.id)}}
												>
												<i className="material-icons chevron-item">
													{" "}
													close{" "}
												</i>
											</button>
										</div>
										);
									}else{
										return(
											<div key={index} className="classes-boxes class-boxes-end">					
											<MySelectBox
												txt="Μαθημα"
												vaar={(e)=>{updateCurrItemTxt(item, e)}}
												filled={item.value}
												items={countries}
												setItems={setCountries}
											/>
											<button
												className="chevronButton"
												type="submit"
												onClick={()=>{RemoveItem(item.id)}}
												>
												<i className="material-icons chevron-item">
													{" "}
													close{" "}
												</i>
											</button>
										</div>
										);
									}
								}
							})}
							</div>

							<MyTextArea txt={"Γράψε τον λόγο απορριψης:"} filled={reject} setFilled={setReject}/>
						</div>
						<div className="lower-admin-fourth">
							<MyButton
							btn_color="#6EC501"
							txt_color="#FFFFFF"
							curr_msg="Αποδοχή"
							disable={classFinal.length > 0 || reject.length !== 0}
							funcc={()=>{acceptRequest()}}
							/>

							<MyButton
								btn_color="#E37171"
								txt_color="#FFFFFF"
								curr_msg="Απόρριψη"
								disable={reject.length === 0 && classFinal.length === 0}
								funcc={()=>{declineRequest()}}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default AdminEvaluationPage;
