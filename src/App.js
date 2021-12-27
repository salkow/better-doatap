import MyButton from "./components/MyButton/MyButton";
import MyBreadcrumb from "./components/MyBreadcrumb/MyBreadcrumb";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
       return (
		   <div>
			   <MyButton btn_color="brown"/>
			   <MyBreadcrumb/>
		   </div>
	   );
}

export default App;
