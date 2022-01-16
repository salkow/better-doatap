import './MyDatePicker.css';

const MyDatePicker = ({txt, vaar, error, setError, filled}) => 
{
    //TODO: date fix format
    return (
		<div className="date-external">
             <div className={"date-internal"+(error ? ' error_internal_txt' : '')}>
                <div className="date-top">
                     <span><span id="star">*</span>{txt}</span>
                </div>
                <input type="date" onChange={(e)=>{vaar(e.target.value);setError("");}} placeholder="DD/MM/YYYY" defaultValue={filled}/>
                <span className={'error_span_txt'+(error ? ' error_msg_txt' : '')}>*{error}</span>
             </div>
        </div>
	);
};

export default MyDatePicker;
