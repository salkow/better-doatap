import './MyDatePicker.css';
import { useState } from 'react';

const MyDatePicker = ({txt, vaar, error, setError, filled}) => 
{
    const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    //TODO: date fix format
    return (
		<div className="date-external">
             <div className={"date-internal"+(error ? ' error_internal_txt' : '')}>
                <div className="date-top">
                     <span><span id="star">*</span><label for={id}>{txt}</label></span>
                </div>
                <input type="date" id={id} onChange={(e)=>{vaar(e.target.value);setError("");}} placeholder="DD/MM/YYYY" defaultValue={filled}/>
                <span className={'error_span_txt'+(error ? ' error_msg_txt' : '')}>*{error}</span>
             </div>
        </div>
	);
};

export default MyDatePicker;
