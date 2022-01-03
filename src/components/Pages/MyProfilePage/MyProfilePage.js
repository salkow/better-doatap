// import { Button } from "react-bootstrap";

import './MyProfilePage.css';

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";
import MyButton from "../../generalComponents/MyButton/MyButton";
import MyBreadcrumb from '../../generalComponents/MyBreadcrumb/MyBreadcrumb';

// import { useState, useEffect } from "react";

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
                <div class="txtboxes">
                  <MyTextBox txt="Email Address" type="text"/>
                  <MyTextBox txt="Password" type="password"/>
                </div>
                <MyButton btn_color="#4285f4" txt_color="white" curr_msg="Σύνδεση"/>
            </div>
          </div>
        </div>
      </div>
	);
};

export default MyProfilePage;
