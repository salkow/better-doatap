import MyButton from "./components/generalComponents/MyButton/MyButton";
import MyBreadcrumb from "./components/generalComponents/MyBreadcrumb/MyBreadcrumb";
import MySearchBar from "./components/generalComponents/mySearchBar/mySearchBar";
import MyLoginPage from "./components/Pages/myLoginPage/MyLoginPage";

import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
       return (
		   <Router>
			   <div>
				   {/* add navigation bar here */}
				   {/* <ul>
					   <li>
						   <Link to="/">1</Link>
					   </li>
					   <li>
						   <Link to="/about">2</Link>
					   </li>
				   </ul> */}
				   {/* add all possible link/routes here */}
				   <Routes>
						<Route exact path="/" element={<MyBreadcrumb />}/>
						<Route exact path="/loginPage" element={<MyLoginPage />}/>
				   </Routes>
				   {/* add footer stuff here */}
				   {/* <ul>
					   <li>
						   <Link to="/">1</Link>
					   </li>
					   <li>
						   <Link to="/about">2</Link>
					   </li>
				   </ul> */}
			   </div>
		   </Router>
	   );
}

export default App;
