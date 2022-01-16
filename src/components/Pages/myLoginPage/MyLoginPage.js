import "./MyLoginPage.css";
import axiosInstance from "../../../axios";

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from "../../generalComponents/MyBreadcrumb/MyBreadcrumb";
import { useState } from "react";
import {Link} from "react-router-dom"

const MyLoginPage = () => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Είσοδος/Εγγραφή" },
	];
	
	const [email, setEmail] = useState("");
    const [Erroremail, setErrorEmail] = useState("");
	const [password, setPass] = useState("");
    const [Errorpassword, setErrorPass] = useState("");

	const submit = async () =>{
		var finish=0;
		if(!email){
			finish=1;
			setErrorEmail("This field is required")
		}
		if(!password){
			finish=1;
			setErrorPass("This field is required")
		}
		if(finish === 1){
			return;
		}
		if(Erroremail || Errorpassword){
			return;
		}
	
		axiosInstance
			.post(`token/`, {
				email: email,
				password: password
			})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axiosInstance.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				// history.push('/');
			});
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
							<MyTextBox txt="Email Address" type="text" vaar={setEmail} error={Erroremail} setError={setErrorEmail} validate={(email, setError) =>{
																								var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
																								if(email.value.match(validRegex)){
																								setError("");
																								}else{
																								setError("You have entered an invalid email address!")
																								}
																							}
																							}/>
							<MyTextBox className="myTextboxes" txt="Password" type="password" vaar={setPass} error={Errorpassword} setError={setErrorPass} validate={(pass, setError) =>{
																																							if(pass.value != ""){
																																								setError("");
																																							}else{
																																								setError("This field is required")
																																							}
																																							}
																																						}/>
						</div>
						<MyButton
							btn_color="#4285f4"
							txt_color="white"
							curr_msg="Σύνδεση"
							funcc={submit}
						/>
						<span className="tail">
							Δεν έχεις λογαριασμό;{" "}
							<span className="tail-colored"><Link to="/register">Εγγραφή</Link></span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyLoginPage;
