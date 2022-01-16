import './MyDatePicker.css';

const MyDatePicker = ({txt, vaar}) => 
{
    //TODO: date fix format
    return (
		<div className="date-external">
            <div className="date-internal">
                <div className="date-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <input type="date" onChange={(e)=>{vaar(e.target.value)}} pattern="(?:19|20)(?:[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31))|(?:[13579][26]|[02468][048])-02-29)" />
            </div>
        </div>
	);
};

export default MyDatePicker;
