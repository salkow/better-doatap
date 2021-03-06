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
import MyTextBox from "../../../generalComponents/MyTextBox/MyTextBox";

const AdminEvaluationPage = ({ loggedIn }) => {
	const params = useParams();

	const [currPage, setCurrPage] = useState(1);

	const [typeOfDiploma, settypeOfDiploma] = useState("");
	const [country, setCountry] = useState("");

	const [myUni, setMyUni] = useState("");
	const [myDep, setMyDep] = useState("");

	const [otherUni, setOtherUni] = useState("");
	const [otherDep, setOtherDep] = useState("");

	const [otherUniversities, setOtherUniversities] = useState([]);
	const [otherDepartments, setOtherDepartments] = useState([]);

	const [allUniversities, setAllUniversities] = useState([]);
	const [allDepartments, setAllDepartments] = useState([]);

	const [diploma, setDiploma] = useState("");


	const [countries, setCountries] = useState([]);


	const [reject, setReject] = useState("");
	

	const [classToTake, setclassToTake] = useState([{ id: 0, value: "" }]);
	const [classFinal, setclassFinal] = useState([]);
	const [classMaxID, setclassMaxID] = useState(1);

	const [redirect, setRedirect] = useState(false);

	const acceptRequest = async () => {
		axiosInstance
			.patch("applications/admin/" + params.id + "/", {
				progress: "A",
				destination_university_1: otherUni,
				destination_department_1: otherDep,
			})
			.then(() => {
				setRedirect(true);
			});
	};

	const makeUsuableArray = () => {
		var t = "";
		classFinal.map((e) => {
			t = t + e.value + ", ";
		});

		return t.slice(0, -2);
	};

	const holdRequest = async () => {
		axiosInstance
			.patch("applications/admin/" + params.id + "/", {
				progress: "N",
				extra_subject: makeUsuableArray(),
				destination_university_1: otherUni,
				destination_department_1: otherDep,
			})
			.then(() => {
				setRedirect(true);
			});
	};


	const declineRequest = async () => {
		axiosInstance
			.patch("applications/admin/" + params.id + "/", {
				progress: "D",
				reasons_for_declination: reject,
			})
			.then(() => {
				setRedirect(true);
			});
	};

	const RemoveItem = (id) => {
		setclassToTake(classToTake.filter((d) => d.id !== id));
		setclassFinal(classToTake.filter((i) => i.value !== ""));
	};

	const AppendItem = () => {
		setclassToTake((classToTake) => [
			...classToTake,
			{ id: classMaxID + 1, value: "" },
		]);
		setclassFinal(classToTake.filter((i) => i.value !== ""));
		setclassMaxID(classMaxID + 1);
	};

	const updateCurrItemTxt = (item, e) => {
		item.value = e;
		setclassFinal(classToTake.filter((i) => i.value !== ""));
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
				setCountry(res.data.origin_country_1);
				setMyUni(res.data.origin_university_1);
				setMyDep(res.data.origin_department_1);

				setOtherUni(res.data.destination_university_1);
				setOtherDep(res.data.destination_department_1);

				setDiploma(res.data.diploma);
			});
		}

		axiosInstance
			.get("countries/Greece/" + country)
			.catch(() => {
				setOtherUniversities([]);
				return [];
			})
			.then((res) => {
				return res.data.map((i) => i.name);
			})
			.then((res) => {
				setOtherUniversities(res);
				setAllUniversities(res);
				// setMyUni("");
				// setMyDep("");
			});
	}, []);

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

	const myBread = [
		{ first: "/", second: "????????????" },
		{ second: "???????? ????????????" },
	];
	const radioFin = [
		{ item: "???????????? ????????????", value: "B" },
		{ item: "????????????????????????", value: "P" },
		{ item: "??????????????????????", value: "D" },
	];

	if (redirect === true) {
		return <Navigate to="/myAdminApplications" />;
	}

	if (currPage === 1) {
		return (
			<div className="content">
				<MyBreadcrumb array={myBread} />
				<div className="external">
					<div className="internal">
						<div className="top">
							<span id="underlined">
								???????????????????????? ??????????????: {params.id}
							</span>
						</div>
						<div className="middle">
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={() => {}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
							/>
							<div className="middle-items">
								<MyRadioButton
									txt="?????????????? ??????????????"
									items={radioFin}
									vaar={settypeOfDiploma}
									selected={typeOfDiploma}
									disabled={true}
								/>
								<MySelectBox
									txt="???????? ??????????????"
									vaar={setCountry}
									filled={country}
									items={countries}
									setItems={setCountries}
									disabled={true}
								/>
								<div className="grouped">
									<MySelectBox
										txt="????????????????????????"
										vaar={setMyUni}
										filled={myUni}
										items={countries}
										setItems={setCountries}
										disabled={true}
									/>
									<MySelectBox
										txt="??????????"
										vaar={setMyDep}
										filled={myDep}
										items={countries}
										setItems={setCountries}
										disabled={true}
									/>
								</div>
							</div>
						</div>
						<div className="lower"></div>
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
							<span id="underlined">
								???????????????????????? ??????????????: {params.id}
							</span>
						</div>
						<div className="middle">
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={() => {}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
							/>
							<div className="middle-items">
								<div className="grouped">
									<MySelectBox
										txt="????????????????????????"
										vaar={setOtherUni}
										filled={otherUni}
										items={otherUniversities}
										setItems={setOtherUniversities}
										all_items={allUniversities}
									/>
									<MySelectBox
										txt="??????????"
										vaar={setOtherDep}
										filled={otherDep}
										items={otherDepartments}
										setItems={setOtherDepartments}
										all_items={allDepartments}
									/>
								</div>
							</div>
						</div>
						<div className="lower"></div>
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
							<span id="underlined">
								???????????????????????? ??????????????: {params.id}
							</span>
						</div>
						<div className="middle">
							<AdminEvalBreadcrumbs
								setCurr={setCurrPage}
								val={() => {}}
								curr={currPage}
								first={3}
								second={3}
								third={3}
							/>
							<div className="middle-items">
								<MyFileCard
									name="???????????? ????????????????"
									desc="?????????? ???? ?????????????? ?????? ???????????????????? ???????? ???????????????????????? ?????? ?????????????? ??????."
									link={diploma}
									file_name={diploma.substring(diploma.lastIndexOf('/') + 1)}
									disabled={true}
								/>
							</div>
						</div>
						<div className="lower"></div>
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
							<span id="underlined">???????????????????????? ??????????????: {params.id}</span>
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
										<MyTextBox
											txt="????????????"
											vaar={(e)=>{updateCurrItemTxt(item, e)}}
											filled={item.value}
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
											<MyTextBox
												txt="????????????"
												vaar={(e)=>{updateCurrItemTxt(item, e)}}
												filled={item.value}
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
											<MyTextBox
												txt="????????????"
												vaar={(e)=>{updateCurrItemTxt(item, e)}}
												filled={item.value}
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

							<MyTextArea txt={"?????????? ?????? ???????? ??????????????????:"} filled={reject} setFilled={setReject}/>
						</div>
						<div className="lower-admin-fourth">
							<MyButton
							btn_color="#6EC501"
							txt_color="#FFFFFF"
							curr_msg="??????????????"
							disable={(otherUni  === "" || otherDep === "") || classFinal.length > 0 || reject.length !== 0}
							funcc={()=>{acceptRequest()}}
							/>

							<MyButton
								btn_color="#E37171"
								txt_color="#FFFFFF"
								curr_msg="????????????????"
								disable={(otherUni  === "" || otherDep === "") || classFinal.length === 0}
								funcc={()=>{holdRequest()}}
							/>

							<MyButton
								btn_color="#E37171"
								txt_color="#FFFFFF"
								curr_msg="????????????????"
								disable={reject.length === 0}
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
