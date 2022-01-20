import './ProfilePage.css';
import MyTextBox from "../../../generalComponents/MyTextBox/MyTextBox"
import MyButton from "../../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from '../../../generalComponents/MyBreadcrumb/MyBreadcrumb';
import MyRadioButton from '../../../generalComponents/MyRadioButton/MyRadioButton';
import MyDatePicker from '../../../generalComponents/MyDatePicker/MyDatePicker';

import { useState, useEffect } from "react";
import axiosInstance from "../../../../axios";

const ProfilePage = () => {
  const myBread = [{ first: "/", second: "Αρχική" }, { second: "Προφίλ" }]
  const myRadio = [{ item: "ΓΥΝΑΙΚΑ", value: "F" }, { item: "ΑΝΔΡΑΣ", value: "M" }, { item: "ΑΛΛΟ", value: "O" }]

  const [email, setEmail] = useState("");
  const [Erroremail, setErrorEmail] = useState("");
  const [password, setPass] = useState("");
  const [OldPassword, setOldPass] = useState("");
  const [ErrorOldPassword, setErrorOldPass] = useState("");
  const [Errorpassword, setErrorPass] = useState("");
  const [repeatPassword, setRePass] = useState("");
  const [ErrorrepeatPassword, setErrorRePass] = useState("");
  const [phone, setPhoneNum] = useState("");
  const [Errorphone, setErrorPhoneNum] = useState("");
  const [firstName, setFirst] = useState("");
  const [ErrorfirstName, setErrorFirst] = useState("");
  const [lastName, setLast] = useState("");
  const [ErrorlastName, setErrorLast] = useState("");
  const [dob, setDoB] = useState("");
  const [Errordob, setErrorDoB] = useState("");
  const [afm, setAFM] = useState("");
  const [Errorafm, setErrorAFM] = useState("");
  const [gender, setGender] = useState("");
  const [Errorgender, setErrorGender] = useState("");
  const [id, setID] = useState("");
  const [Errorid, setErrorID] = useState("");

  const [msg, setMsg] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`user/profile/`)
      .then((res) => {
        // history.push('/login');

        setEmail(res.data.email)
        setPhoneNum(res.data.phone)
        setDoB(res.data.birthday)
        setFirst(res.data.first_name)
        setLast(res.data.last_name)
        setID(res.data.id_num)
        setGender(res.data.gender)
        setAFM(res.data.afm)
      });
  }, []);

  const submit = async () => {
    var finish = 0;
    if (!email) {
      finish = 1;
      setErrorEmail("This field is required")
    }
    // if(!password){
    //   finish=1;
    //   // setErrorPass("This field is required")
    // }
    // if(!repeatPassword){
    //   finish=1;
    //   // setErrorRePass("This field is required");
    // }
    if (!phone) {
      finish = 1;
      setErrorPhoneNum("This field is required")
    }
    if (!firstName) {
      finish = 1;
      setErrorFirst("This field is required")
    }
    if (!lastName) {
      finish = 1;
      setErrorLast("This field is required")
    }
    if (!gender) {
      finish = 1;
      setErrorGender("This field is required")
    }
    if (!dob) {
      finish = 1;
      setErrorDoB("This field is required")
    }
    if (!afm) {
      finish = 1;
      setErrorAFM("This field is required")
    }
    if (!id) {
      finish = 1;
      setErrorID("This field is required")
    }
    if (finish === 1) {
      return;
    }

    if (Erroremail || ErrorlastName || ErrorfirstName || Errorgender || Errordob || Errorphone || Errorafm || Errorid) {
      return;
    }

    if (OldPassword && password && repeatPassword) {
      if (password != repeatPassword) {
        setErrorPass("Passwords dont match")
        return;
      } else {
        axiosInstance
          .put(`user/update_password/`, {
            old_password: OldPassword,
            new_password: password,
          })
          .catch((error) => {
            if (error.response.status == 400) {
              setErrorOldPass("Wrong credentials");
              return -1
            }
          })  
          .then((res)=>{
            if (res === -1)
              return
              
            axiosInstance
            .patch(`user/profile/`, {
              email: email,
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              id_num: id,
              afm: afm,
              birthday: "2021-12-30", //TODO
              gender: gender
            })
            .then((res) => {
              // history.push('/login');
              // navigate.go(0)
            });

          });
          return;
      }
    }

    axiosInstance
            .patch(`user/profile/`, {
              email: email,
              first_name: firstName,
              last_name: lastName,
              phone: phone,
              id_num: id,
              afm: afm,
              birthday: "2021-12-30", //TODO
              gender: gender
            })
            .then((res) => {
              // history.push('/login');
              // navigate.go(0)
            });

  }


  return (
    <div>
      <MyBreadcrumb array={myBread} />
      <div className="external">
        <div className="internal">
          <div className="top">
            <span id="underlined">Προφίλ</span>
          </div>
          <div className="middle">
            <div className="txtboxes-p">
              <div className="first-group">
                <MyTextBox txt="Email Address" type="text" vaar={setEmail} filled={email} error={Erroremail} setError={setErrorEmail} validate={(email, setError) => {
                  var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (email.value.match(validRegex)) {
                    setError("");
                  } else {
                    setError("You have entered an invalid email address!")
                  }
                }
                } />
              </div>
              <div className="first-group">
                <span><span id="star">*</span>Συμπλήρωσε τον κωδικό σου, μόνο αν θες να τον αλλάξεις</span>
                <MyTextBox className="myTextboxes" txt="Old Password" type="password" vaar={setOldPass} error={ErrorOldPassword} setError={setErrorOldPass} validate={(pass, setError) => {
                  // if(pass.value != ""){
                  //   setError("");
                  // }else{
                  //   setError("This field is required")
                  // }
                }
                } />
                <div className="first-other horizontal">
                  <MyTextBox className="myTextboxes" txt="New Password" type="password" vaar={setPass} error={Errorpassword} setError={setErrorPass} validate={(pass, setError) => {
                    if(OldPassword != ""){
                      if(pass.value != ""){
                        setError("");
                        if(pass.value.length < 8 || !(pass.value.match(/(?!^\d+$)^.+$/))){
													setError("Must be 8 length and have at least 1 char")
												}else{
													setError("")
												}
                      }else{
                        setError("This field is required")
                      }

                      if (pass.value != "" && pass.value != repeatPassword) {
												setErrorRePass("Passwords dont match");
											}else{
                        setErrorRePass("")
                      }
                    }else{
                      console.log("test")
                      setErrorRePass("")
                      setError("")
                    }
                  }
                  } />
                  <MyTextBox txt="Repeat New Password" type="password" vaar={setRePass} error={ErrorrepeatPassword} setError={setErrorRePass} validate={(Repass, setError) => {
                    if(OldPassword != "" && password != ""){
                      if(Repass.value != ""){
                        setError("");
                        if (password != "" && password != Repass.value) {
													setError("Passwords dont match");
												}else{
                          setError("")
                        }
                      }else{
                        setError("This field is required")
                      }
                    }else{
                      setError("")
                    }
                  }
                  } />
                </div>
              </div>
              <div className="second-group">
                <div className="second-other horizontal">
                  <MyTextBox txt="Επώνυμο" type="text" vaar={setLast} error={ErrorlastName} filled={lastName} setError={setErrorLast} validate={(last, setError) => {
                    if (last.value != "") {
                      setError("");
                    } else {
                      setError("This field is required")
                    }
                  }
                  } />
                  <MyTextBox txt="Όνομα" type="text" vaar={setFirst} error={ErrorfirstName} filled={firstName} setError={setErrorFirst} validate={(first, setError) => {
                    if (first.value != "") {
                      setError("");
                    } else {
                      setError("This field is required")
                    }
                  }
                  } />
                </div>
                <div className="second-other horizontal">
                  <MyRadioButton txt="Φύλο" items={myRadio} vaar={setGender} error={Errorgender} setError={setErrorGender} selected={gender} />
                  <MyDatePicker txt="Ημερομηνία γέννησης" vaar={setDoB} error={Errordob} setError={setErrorDoB} filled={dob} />
                </div>
                <MyTextBox txt="Τηλέφωνο Επικοινωνίας" type="text" vaar={setPhoneNum} filled={phone} error={Errorphone} setError={setErrorPhoneNum} validate={(phone, setError) => {
                  var validRegex = /^\d*$/;
                  if (phone.value.match(validRegex)) {
                    setError("");
                  } else {
                    setError("A phone number must contain only digits");
                    return;
                  }
                  if (phone.value != "") {
                    setError("");
                  } else {
                    setError("This field is required");
                    return;
                  }
                  if (phone.value.length === 10) {
                    setError("");
                  } else {
                    setError("This field is invalid");
                    return;
                  }
                }
                } />
              </div>
              <div className="third-group">
                <div className="third-other horizontal">
                  <MyTextBox txt="Αριθμός ταυτοτητας ή  Αριθμος διαβατηριου" type="text" vaar={setID} error={Errorid} filled={id} setError={setErrorID} validate={(id, setError) => {
                    if (id.value != "") {
                      setError("");
                    } else {
                      setError("This field is required")
                    }
                  }
                  } />
                  <MyTextBox txt="ΑΦΜ" type="text" vaar={setAFM} error={Errorafm} setError={setErrorAFM} filled={afm} validate={(afm, setError) => {
                    if (afm.value != "") {
                      setError("");
                    } else {
                      setError("This field is required")
                    }
                  }
                  } />
                </div>
              </div>
            </div>
            <MyButton btn_color="#4285f4" txt_color="white" curr_msg="Ενημέρωση" funcc={submit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
