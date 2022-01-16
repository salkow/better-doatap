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
                 <input type="date" onChange={(e)=>{vaar(e.target.value)}} placeholder="DD/MM/YYYY"/>
             </div>
        </div>
	);
};

export default MyDatePicker;
