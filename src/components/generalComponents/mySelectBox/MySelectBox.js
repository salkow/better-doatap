import './MySelectBox.css';

import { useState, useEffect } from "react";

const MySelectBox = ({txt}) => 
{
    return (
		<div class="external-select">
            <div class="external-txt-select">
                <div class="internal-txt-select">
                    <div class="top-txt-select">
                        <span><span id="star-select">*</span>{txt}</span>
                    </div>
                    <div class="expandBox">
                        <input class="expandInput" type="text" name="q" placeholder="Αναζήτηση..."></input>
                        <button class="expandButton" type="submit">
                            <i class="material-icons expand-item"> expand_more </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default MySelectBox;
