import './MyRadioButton.css';

const MyRadioButton = ({txt, items, selected, disabled, vaar, error, setError}) => 
{
    const fin = [];
    items.forEach((z, index) =>{
        fin.push(
            <li key={index}>
                <label className={'label-radio'}>
                    <input type="radio" name="gender" value={z.value} onChange={(e)=>{vaar(e.currentTarget.value);if(setError){setError("");}}} checked={z.value===selected} disabled={disabled}/>
                    <span>{z.item}</span>
                </label>
            </li>
        );
    });
    return (
		<div className={"external-radio"+(error ? ' error_internal_txt' : '')}>
            <div className="txt-top-radio">
                <span><span id="star-radio">*</span>{txt}</span>
            </div>
            <div className={"internal-radio"+(disabled ? ' disabled-radio' : '')}>
                <ul>
                    {fin}
                </ul>
            </div>
            <span className={'error_span_txt'+(error ? ' error_msg_txt' : '')}>*{error}</span>
        </div>
	);
};

export default MyRadioButton;
