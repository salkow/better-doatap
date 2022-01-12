import './MyDatePicker.css';

const MyDatePicker = ({txt}) => 
{
    return (
		<div className="date-external">
            <div className="date-internal">
                <div className="date-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <input type="date" />
            </div>
        </div>
	);
};

export default MyDatePicker;
