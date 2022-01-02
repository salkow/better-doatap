import { Button } from "react-bootstrap";

import './MyLoginPage.css';

import MyTextBox from "../../generalComponents/MyTextBox/MyTextBox";

// import { useState, useEffect } from "react";

const MyLoginPage = () => 
{
    return (
		<div class="external">
      <div class="internal">
        <div class="top">
          <span id="underlined">Είσοδος/Εγγραφή</span>
        </div>
        <div class="middle">
            <span>Λογαριασμός Σελίδας</span>
            <div class="txtboxes">
              <MyTextBox txt="Email" type="text"/>
              <MyTextBox txt="Password" type="password"/>
            </div>
        </div>
      </div>
    </div>
	);
};

export default MyLoginPage;
