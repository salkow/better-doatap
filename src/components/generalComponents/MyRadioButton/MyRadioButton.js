import './MyRadioButton.css';

import { useState, useEffect } from "react";

const MyRadioButton = ({txt, type}) => 
{
    return (
		<div class="external-radio">
            <div class="txt-top-radio">
                <span><span id="star">*</span>{txt}</span>
            </div>
            <div class="internal-radio">
                <ul>
                    <li>
                        <label>
                            <input type="radio" name="gender" />
                            ΓΥΝΑΙΚΑ
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="gender" />
                            ΑΝΔΡΑΣ
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type="radio" name="gender" />
                            ΑΛΛΟ
                        </label>
                    </li>
                </ul>
            </div>
        </div>
	);
};

export default MyRadioButton;
