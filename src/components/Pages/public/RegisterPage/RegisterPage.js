import "./RegisterPage.css";

import MyTextBox from "../../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from "../../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import MyRadioButton from "../../../generalComponents/MyRadioButton/MyRadioButton";
import MyDatePicker from "../../../generalComponents/MyDatePicker/MyDatePicker";
import { useState } from "react";

import axiosInstance from "../../../../axios";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ first: "/loginPage", second: "Είσοδος/Εγγραφή" },
		{ second: "Εγγραφή" },
	];
	const myRadio = [
		{ item: "ΓΥΝΑΙΚΑ", value: "F" },
		{ item: "ΑΝΔΡΑΣ", value: "M" },
		{ item: "ΑΛΛΟ", value: "O" },
	];

	const [redirectToReferrer, setRedirectToReferrer] = useState(false);
	const [path, setPath] = useState("/");

	const [email, setEmail] = useState("");
	const [Erroremail, setErrorEmail] = useState("");
	const [password, setPass] = useState("");
	const [Errorpassword, setErrorPass] = useState("");
	const [repeatPassword, setRePass] = useState("");
	const [ErrorrepeatPassword, setErrorRePass] = useState("");
	const [phone, setPhoneNum] = useState("");
	const [Errorphone, setErrorPhoneNum] = useState("");
	const [firstName, setFirst] = useState("");
	const [ErrorfirstName, setErrorFirst] = useState("");
	const [lastName, setLast] = useState("");
	const [ErrorlastName, setErrorLast] = useState("");
	const [dob, setDoB] = useState("");
	const [Errordob, setErrorDoB] = useState("");
	const [afm, setAFM] = useState("");
	const [Errorafm, setErrorAFM] = useState("");
	const [gender, setGender] = useState("");
	const [Errorgender, setErrorGender] = useState("");
	const [id, setID] = useState("");
	const [Errorid, setErrorID] = useState("");

	const [msg, setMsg] = useState("");

	const goToPreviousPath = () => {
		const was_in_new_app = localStorage.getItem("was_in_new_app");

		console.log("was_in_new_app", was_in_new_app);

		if (was_in_new_app) {
			localStorage.setItem("was_in_new_app", false);
			setPath("/myNewAppF/-1");
			setRedirectToReferrer(true);
		}
	};

	const submit = async () => {
		var finish = 0;
		if (!email) {
			finish = 1;
			setErrorEmail("This field is required");
		}
		if (!password) {
			finish = 1;
			setErrorPass("This field is required");
		}
		if (!repeatPassword) {
			finish = 1;
			setErrorRePass("This field is required");
		}
		if (!phone) {
			finish = 1;
			setErrorPhoneNum("This field is required");
		}
		if (!firstName) {
			finish = 1;
			setErrorFirst("This field is required");
		}
		if (!lastName) {
			finish = 1;
			setErrorLast("This field is required");
		}
		if (!gender) {
			finish = 1;
			setErrorGender("This field is required");
		}
		if (!dob) {
			finish = 1;
			setErrorDoB("This field is required");
		}
		if (!afm) {
			finish = 1;
			setErrorAFM("This field is required");
		}
		if (!id) {
			finish = 1;
			setErrorID("This field is required");
		}
		if (finish === 1) {
			return;
		}

		if (
			Erroremail ||
			Errorpassword ||
			ErrorrepeatPassword ||
			ErrorlastName ||
			ErrorfirstName ||
			Errorgender ||
			Errordob ||
			Errorphone ||
			Errorafm ||
			Errorid
		) {
			return;
		}

		if (password != repeatPassword) {
			setErrorPass("Passwords dont match");
			return;
		}

		axiosInstance
			.post(`user/create/`, {
				email: email,
				first_name: firstName,
				last_name: lastName,
				password: password,
				phone: phone,
				id_num: id,
				afm: afm,
				birthday: "2021-12-30",
				gender: gender,
			})
			.then((res) => {
				// history.push('/login');
				console.log(res);
				console.log(res.data);
				goToPreviousPath();
			});
	};

	if (redirectToReferrer === true) {
		return <Navigate to={path} />;
	}

	return (
		<div>
			<MyBreadcrumb array={myBread} />
			<div className="external">
				<div className="internal">
					<div className="top">
						<span id="underlined">Εγγραφή</span>
					</div>
					<div className="middle">
						<div className="txtboxes-p">
							<div className="first-group">
								<MyTextBox
									txt="Email Address"
									type="text"
									vaar={setEmail}
									error={Erroremail}
									setError={setErrorEmail}
									validate={(email, setError) => {
										var validRegex =
											/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
										if (email.value.match(validRegex)) {
											setError("");
										} else {
											setError(
												"You have entered an invalid email address!"
											);
										}
									}}
								/>
								<div className="first-other horizontal">
									<MyTextBox
										className="myTextboxes"
										txt="Password"
										type="password"
										vaar={setPass}
										error={Errorpassword}
										setError={setErrorPass}
										validate={(pass, setError) => {
											if (pass.value != "") {
												setError("");
											} else {
												setError(
													"This field is required"
												);
											}
										}}
									/>
									<MyTextBox
										txt="Repeat Password"
										type="password"
										vaar={setRePass}
										error={ErrorrepeatPassword}
										setError={setErrorRePass}
										validate={(Repass, setError) => {
											if (Repass.value != "") {
												setError("");
											} else {
												setError(
													"This field is required"
												);
											}
										}}
									/>
								</div>
							</div>
							<div className="second-group">
								<div className="second-other horizontal">
									<MyTextBox
										txt="Επώνυμο"
										type="text"
										vaar={setLast}
										error={ErrorlastName}
										setError={setErrorLast}
										validate={(last, setError) => {
											if (last.value != "") {
												setError("");
											} else {
												setError(
													"This field is required"
												);
											}
										}}
									/>
									<MyTextBox
										txt="Όνομα"
										type="text"
										vaar={setFirst}
										error={ErrorfirstName}
										setError={setErrorFirst}
										validate={(first, setError) => {
											if (first.value != "") {
												setError("");
											} else {
												setError(
													"This field is required"
												);
											}
										}}
									/>
								</div>
								<div className="second-other horizontal">
									<MyRadioButton
										txt="Φύλο"
										items={myRadio}
										vaar={setGender}
										error={Errorgender}
										setError={setErrorGender}
										selected={gender}
									/>
									<MyDatePicker
										txt="Ημερομηνία γέννησης"
										vaar={setDoB}
										error={Errordob}
										setError={setErrorDoB}
									/>
								</div>
								<MyTextBox
									txt="Τηλέφωνο Επικοινωνίας"
									type="text"
									vaar={setPhoneNum}
									error={Errorphone}
									setError={setErrorPhoneNum}
									validate={(phone, setError) => {
										var validRegex = /^\d*$/;
										if (phone.value.match(validRegex)) {
											setError("");
										} else {
											setError(
												"A phone number must contain only digits"
											);
											return;
										}
										if (phone.value != "") {
											setError("");
										} else {
											setError("This field is required");
											return;
										}
										if (phone.value.length === 10) {
											setError("");
										} else {
											setError("This field is invalid");
											return;
										}
									}}
								/>
							</div>
							<div className="third-group">
								<div className="third-other horizontal">
									<MyTextBox
										txt="Αριθμός ταυτοτητας ή  Αριθμος διαβατηριου"
										type="text"
										vaar={setID}
										error={Errorid}
										setError={setErrorID}
										validate={(id, setError) => {
											if (id.value != "") {
												setError("");
											} else {
												setError(
													"This field is required"
												);
											}
										}}
									/>
									<MyTextBox
										txt="ΑΦΜ"
										type="text"
										vaar={setAFM}
										error={Errorafm}
										setError={setErrorAFM}
										validate={(afm, setError) => {
											if (afm.value != "") {
												setError("");
											} else {
												setError(
													"This field is required"
												);
											}
										}}
									/>
								</div>
							</div>
						</div>
						<MyButton
							btn_color="#4285f4"
							txt_color="white"
							curr_msg="Εγγραφή"
							funcc={submit}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
