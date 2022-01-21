import './MyTextBox.css';
import { useState } from "react";

const MyTextBox = ({txt, filled, type, error, setError, vaar, validate, star, disabled}) => 
{
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="txt-external">
            <div className={'txt-internal'+(error ? ' error_internal_txt' : '')}>
                <div className="txt-top">
                   <span>{!star && (<span id="star">*</span>)}<label htmlFor={id}>{txt}</label></span>
                </div>
                <input type={type} id={id} onChange={(e)=>{vaar(e.target.value);if(validate){validate(e.target, setError)}}} value={filled} defaultValue={filled} disabled={disabled}/>
                <span className={'error_span_txt'+(error ? ' error_msg_txt' : '')}>*{error}</span>
            </div>
        </div>
	);
};

export default MyTextBox;