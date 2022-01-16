import "./MyLoginPage.css";
import axiosInstance from "../../../axios";

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from "../../generalComponents/MyBreadcrumb/MyBreadcrumb";

const MyLoginPage = () => {
	const myBread = [
		{ first: "/", second: "Αρχική" },
		{ second: "Είσοδος/Εγγραφή" },
	];
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
							<MyTextBox txt="Email Address" type="text" />
							<MyTextBox txt="Password" type="password" />
						</div>
						<MyButton
							btn_color="#4285f4"
							txt_color="white"
							curr_msg="Σύνδεση"
						/>
						<span className="tail">
							Δεν έχεις λογαριασμό;{" "}
							<span className="tail-colored">Εγγραφή</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyLoginPage;
