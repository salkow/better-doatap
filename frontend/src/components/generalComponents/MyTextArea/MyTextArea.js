import { useState } from 'react';
import './MyTextArea.css';

const MyTextArea = ({txt, filled, setFilled}) => 
{
    const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="txt-area-external">
            <div className='txt-area-internal'>
                <div className="txt-area-top">
                    <span><span id="star">*</span><label for={id}>{txt}</label></span>
                </div>
                <textarea id={id} onChange={(e)=>{setFilled(e.target.value)}} defaultValue={filled}></textarea>
            </div>
        </div>
	);
};

export default MyTextArea;