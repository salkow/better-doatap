import './MyRegisterPage.css';

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyRadioButton from '../../generalComponents/MyRadioButton/MyRadioButton';
import MyDatePicker from '../../generalComponents/MyDatePicker/MyDatePicker';


const MyRegisterPage = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {first: "/loginPage", second: "Είσοδος/Εγγραφή"}, {second: "Εγγραφή"}]
    return (
      <div>
        <MyBreadcrumb array={myBread}/>
        <div className="external">
          <div className="internal">
            <div className="top">
              <span id="underlined">Εγγραφή</span>
            </div>
            <div className="middle">
                <div className="txtboxes-p">
                  <div className="first-group">
                    <MyTextBox txt="Email Address" type="text"/>
                    <div className="first-other horizontal">
                      <MyTextBox className="myTextboxes" txt="Password" type="password"/>
                      <MyTextBox txt="Repeat Password" type="password"/>
                    </div>
                  </div>
                  <div className="second-group">
                    <div className="second-other horizontal">
                      <MyTextBox txt="Επώνυμο" type="text"/>
                      <MyTextBox txt="Όνομα" type="text"/>
                    </div>
                    <div className="second-other horizontal">
                      <MyRadioButton txt="Φύλο"/>
                      <MyDatePicker txt="Ημερομηνία γέννησης"/>
                    </div>
                    <MyTextBox txt="Τηλέφωνο Επικοινωνίας" type="text"/>
                  </div>
                  <div className="third-group">
                    <div className="third-other horizontal">
                      <MyTextBox txt="Αριθμός ταυτοτητας ή  Αριθμος διαβατηριου" type="text"/>
                      <MyTextBox txt="ΑΦΜ" type="text"/>
                    </div>
                  </div>
                </div>
                <MyButton btn_color="#4285f4" txt_color="white" curr_msg="Εγγραφή"/>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyRegisterPage;
