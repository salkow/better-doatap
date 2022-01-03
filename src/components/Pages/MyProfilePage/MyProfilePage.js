import './MyProfilePage.css';

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';


const MyProfilePage = () => 
{
    const myBread = [{first: "#", second: "home"}, {first: "#", second: "test"}, {second: "non"}]
    return (
      <div>
        <MyBreadcrumb array={myBread}/>
        <div class="external">
          <div class="internal">
            <div class="top">
              <span id="underlined">Προφίλ</span>
            </div>
            <div class="middle">
                <div class="txtboxes-p">
                  <div class="first-group">
                    <MyTextBox txt="Email Address" type="text"/>
                    <div class="first-other horizontal">
                      <MyTextBox class="myTextboxes" txt="Password" type="password"/>
                      <MyTextBox txt="Repeat Password" type="password"/>
                    </div>
                  </div>
                  <div class="second-group">
                    <div class="second-other horizontal">
                      <MyTextBox txt="Επώνυμο" type="text"/>
                      <MyTextBox txt="Όνομα" type="text"/>
                    </div>
                    <div class="second-other horizontal">
                      <MyTextBox txt="Φύλο" type="text"/>
                      <MyTextBox txt="Ημερομηνία γέννησης" type="text"/>
                    </div>
                    <MyTextBox txt="Τηλέφωνο Επικοινωνίας" type="text"/>
                  </div>
                  <div class="third-group">
                    <div class="third-other horizontal">
                      <MyTextBox txt="Αριθμός ταυτοτητας ή  Αριθμος διαβατηριου" type="text"/>
                      <MyTextBox txt="ΑΦΜ" type="text"/>
                    </div>
                  </div>
                </div>
                <MyButton btn_color="#4285f4" txt_color="white" curr_msg="Ενημέρωση"/>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyProfilePage;
