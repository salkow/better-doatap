import './MyDatePicker.css';

const MyDatePicker = ({txt}) => 
{
    return (
		<div class="date-external">
            <div class="date-internal">
                <div class="date-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <input type="date" />
            </div>
        </div>
	);
};

export default MyDatePicker;
