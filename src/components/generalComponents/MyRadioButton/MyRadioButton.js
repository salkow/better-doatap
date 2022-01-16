import './MyRadioButton.css';

const MyRadioButton = ({txt, items, selected, disabled, vaar, error, setError}) => 
{
    const fin = [];
    items.forEach((e, index) =>{
        fin.push(
            <li>
                <label className={'label-radio'}>
                    <input type="radio" name="gender" value={e.value} onChange={(e)=>{vaar(e.currentTarget.value);setError("")}} defaultChecked={index===selected} disabled={disabled}/>
                    <span>{e.item}</span>
                </label>
            </li>
        );
    });
    return (
		<div className={"external-radio"+(error ? ' error_internal_txt' : '')}>
            <div className="txt-top-radio">
                <span><span id="star">*</span>{txt}</span>
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
