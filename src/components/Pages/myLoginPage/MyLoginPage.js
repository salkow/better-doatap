import "./MyLoginPage.css";
import axiosInstance from "../../../axios";

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from "../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const MyLoginPage = ({ setLoggedIn, isAdmin, setIsAdmin }) => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Είσοδος/Εγγραφή" },
	];

	const [email, setEmail] = useState("");
	const [Erroremail, setErrorEmail] = useState("");
	const [password, setPass] = useState("");
	const [Errorpassword, setErrorPass] = useState("");

	const [redirectToReferrer, setRedirectToReferrer] = useState(false);
	const [path, setPath] = useState("/");

	const { state } = useLocation();

	let history = useNavigate();
	const goToPreviousPath = () => {
		const was_in_new_app = localStorage.getItem("was_in_new_app");

		console.log("was_in_new_app", was_in_new_app);

		if (was_in_new_app) {
			localStorage.setItem("was_in_new_app", false);
			setPath("/myNewAppF/-1");
		}
		setRedirectToReferrer(true);
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
		if (finish === 1) {
			return;
		}
		if (Erroremail || Errorpassword) {
			return;
		}

		const res = await axiosInstance
			.post(`token/`, {
				email: email,
				password: password,
			})
			.catch((error) => {
				if (error.response.status == 401) {
					setErrorPass("Wrong credentials");
				}
			})
			.then((res) => {
				localStorage.setItem("access_token", res.data.access);
				localStorage.setItem("refresh_token", res.data.refresh);
				axiosInstance.defaults.headers["Authorization"] =
					"JWT " + localStorage.getItem("access_token");
			});

		// .then(() => {
		const ad = await axiosInstance.get("user/is_superuser").then((res) => {
			// console.log(res.data.is_superuser);
			setIsAdmin(res.data.is_superuser);

			console.log(isAdmin);

			setLoggedIn(true);

			return res.data.is_superuser;
		});

		// }).then(() => {
		console.log(ad);
		if (!ad) {
			goToPreviousPath();
		} else {
			history("/myAdminApplications/");
		}
		// });
		// });
	};

	if (redirectToReferrer === true) {
		console.log("111");
		return <Navigate to={path} />;
	}

	return (
		<div className="content">
			<MyBreadcrumb array={myBread} />
			<div className="external">
				<div className="internal">
					<div className="top">
						<span id="underlined">Είσοδος/Εγγραφή</span>
					</div>
					<div className="middle">
						<span className="head">Λογαριασμός Σελίδας</span>
						<div className="txtboxes">
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
										setError("This field is required");
									}
								}}
							/>
						</div>
						<MyButton
							btn_color="#4285f4"
							txt_color="white"
							curr_msg="Σύνδεση"
							funcc={submit}
						/>
						<span className="tail">
							Δεν έχεις λογαριασμό;{" "}
							<span className="tail-colored">
								<Link to="/register">Εγγραφή</Link>
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyLoginPage;
