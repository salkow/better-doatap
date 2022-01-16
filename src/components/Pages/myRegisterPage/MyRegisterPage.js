import './MyRegisterPage.css';

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyRadioButton from '../../generalComponents/MyRadioButton/MyRadioButton';
import MyDatePicker from '../../generalComponents/MyDatePicker/MyDatePicker';
import { useState } from "react";
import axiosInstance from "../../../axios";

const MyRegisterPage = () => 
{
    const myBread = [{first: "/", second: "Αρχική"}, {first: "/loginPage", second: "Είσοδος/Εγγραφή"}, {second: "Εγγραφή"}]
    const myRadio = [{item:"ΓΥΝΑΙΚΑ", value:"Γ"}, {item:"ΑΝΔΡΑΣ", value:"Α"}, {item:"ΑΛΛΟ", value:"Ο"}]
  
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [repeatPassword, setRePass] = useState("");
    const [phone, setPhoneNum] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [dob, setDoB] = useState("");
    const [afm, setAFM] = useState("");
    const [gender, setGender] = useState("");
    const [id, setID] = useState("");
  
    const submit = async () =>{
      // axiosInstance
      //       .post(`user/create/`, {
      //         email: email,
      //         first_name: firstName,
      //         last_name: lastName,
      //         password: password,
      //         phone: phone,
      //         id_num: id,
      //         afm: afm,
      //         birthday: dob,
      //         gender: gender
      //       })
      //       .then((res) => {
      //         // history.push('/login');
      //         console.log(res);
      //         console.log(res.data);
      //       });

      console.log(dob);
    }

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
                    <MyTextBox txt="Email Address" type="text" vaar={setEmail}/>
                    <div className="first-other horizontal">
                      <MyTextBox className="myTextboxes" txt="Password" type="password" vaar={setPass}/>
                      <MyTextBox txt="Repeat Password" type="password" vaar={setRePass}/>
                    </div>
                  </div>
                  <div className="second-group">
                    <div className="second-other horizontal">
                      <MyTextBox txt="Επώνυμο" type="text" vaar={setLast}/>
                      <MyTextBox txt="Όνομα" type="text" vaar={setFirst}/>
                    </div>
                    <div className="second-other horizontal">
                      <MyRadioButton txt="Φύλο" items={myRadio} vaar={setGender}/>  
                      <MyDatePicker txt="Ημερομηνία γέννησης" vaar={setDoB}/>
                    </div>
                    <MyTextBox txt="Τηλέφωνο Επικοινωνίας" type="text" vaar={setPhoneNum}/>
                  </div>
                  <div className="third-group">
                    <div className="third-other horizontal">
                      <MyTextBox txt="Αριθμός ταυτοτητας ή  Αριθμος διαβατηριου" type="text" vaar={setID}/>
                      <MyTextBox txt="ΑΦΜ" type="text" vaar={setAFM}/>
                    </div>
                  </div>
                </div>
                <MyButton btn_color="#4285f4" txt_color="white" curr_msg="Εγγραφή" funcc={submit}/>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyRegisterPage;
