import HomePage from "./components/Pages/public/HomePage/HomePage";
import CommunicationPage from "./components/Pages/public/CommunicationPage/CommunicationPage";
import QnaPage from "./components/Pages/public/QnaPage/QnaPage";
import LoginPage from "./components/Pages/public/LoginPage/LoginPage";
import ProfilePage from "./components/Pages/User/ProfilePage/ProfilePage";
import RegisterPage from "./components/Pages/public/RegisterPage/RegisterPage";
import HowToCreateANewApplicationPage from "./components/Pages/public/HowToCreateANewApplicationPage/HowToCreateANewApplicationPage";
import UserOptions from "./components/Pages/User/UserOptions/myUserOptions";

import UserApplicationListPage from "./components/Pages/User/UserApplicationListPage/UserApplicationListPage";

import NewApplicationPage from "./components/Pages/public/myNewApplicationPage/NewApplicationPage";

import AdminEvaluationPage from "./components/Pages/Admin/AdminEvaluationPage/AdminEvaluationPage";

import TheNav from "./components/generalComponents/myNav/myNav";
import Footer from "./components/generalComponents/MyFooter/MyFooter";

import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminEvaluationListPage from "./components/Pages/Admin/AdminEvaluationListPage/AdminEvaluationListPage";

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("access_token") != null
	);

	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<BrowserRouter>
			<TheNav
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				isAdmin={isAdmin}
				setIsAdmin={setIsAdmin}
			/>
			<div className="gen-space content">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/how_to_create_new_application"
						element={<HowToCreateANewApplicationPage />}
					/>
					<Route path="/qna" element={<QnaPage />} />
					<Route
						path="/communication"
						element={<CommunicationPage />}
					/>
					<Route
						path="/loginPage"
						element={
							<LoginPage
								setLoggedIn={setLoggedIn}
								isAdmin={isAdmin}
								setIsAdmin={setIsAdmin}
							/>
						}
					/>
					<Route path="/profile" element={<ProfilePage isAdmin={isAdmin} />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route
						path="/myApplications"
						element={<UserApplicationListPage />}
					/>

					<Route
						path="/myUserOptions"
						element={<UserOptions isAdmin={isAdmin} />}
					/>

					<Route
						path="/myNewAppF/:id"
						element={<NewApplicationPage loggedIn={loggedIn} />}
					/>
					{/* <Route path="/myNewAppS" element={<MyNewAppSecond />} />
					<Route path="/myNewAppT" element={<MyNewAppThird />} /> */}

					{/* <Route path="/myApplications" element={<MyMyApplicationPage />} /> */}

					<Route
						path="/myAdminApplications"
						element={<AdminEvaluationListPage />}
					/>
					<Route
						path="/myAdminAppF/:id"
						element={<AdminEvaluationPage loggedIn={loggedIn} />}
					/>
				</Routes>
			</div>
			<Footer isAdmin={isAdmin} />
		</BrowserRouter>
	);
}

export default App;
