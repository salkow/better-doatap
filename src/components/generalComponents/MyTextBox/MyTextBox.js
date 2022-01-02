import './MyTextBox.css';

import { useState, useEffect } from "react";

const MyTextBox = ({txt, type}) => 
{
    return (
		<div class="txt-external">
            <div class="txt-internal">
                <div class="txt-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <input type={type} />            
            </div>
        </div>
	);
};

export default MyTextBox;
