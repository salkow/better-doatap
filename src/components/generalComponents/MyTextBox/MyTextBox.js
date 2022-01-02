import './MyTextBox.css';

import { useState, useEffect } from "react";

const MyTextBox = ({txt, type}) => 
{
    return (
		<div class="txt-external">
            <div class="txt-internal">
                <div class="txt-top">
                    <span>*{txt}</span>
                </div>
                <input type="text" />            
            </div>
        </div>
	);
};

export default MyTextBox;
