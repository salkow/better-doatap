import './MyLoginPage.css';

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';

const MyLoginPage = () => 
{
    const myBread = [{first: "#", second: "home"}, {first: "#", second: "test"}, {second: "non"}]
    return (
      <div>
        <MyBreadcrumb array={myBread}/>
        <div class="external">
          <div class="internal">
            <div class="top">
              <span id="underlined">Είσοδος/Εγγραφή</span>
            </div>
            <div class="middle">
                <span class="head">Λογαριασμός Σελίδας</span>
                <div class="txtboxes">
                  <MyTextBox txt="Email Address" type="text"/>
                  <MyTextBox txt="Password" type="password"/>
                </div>
                <MyButton btn_color="#4285f4" txt_color="white" curr_msg="Σύνδεση"/>
                <span  class="tail">Δεν έχεις λογαριασμό; <span class="tail-colored">Εγγραφή</span></span>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyLoginPage;
