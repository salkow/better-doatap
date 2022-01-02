import HomePage from "./components/Pages/myHomePage/myHomePage"
import Communication from "./components/Pages/myCommunication/myCommunication"
import QNA from "./components/Pages/myQNA/myQNA"

import Nav from "./components/generalComponents/myNav/myNav"

import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
       return (
		   <BrowserRouter>
		   			<Nav/>
			   <Routes>
				   <Route path="/" element={<HomePage/>}/> 
				   <Route path="/new_application" element={<HomePage/>}/> 
				   <Route path="/how_to_create_new_application" element={<HomePage/>}/> 
				   <Route path="/qna" element={<QNA/>}/> 
				   <Route path="/communication" element={<Communication/>}/> 
			   </Routes>
		   </BrowserRouter>
	   );
}

export default App;
