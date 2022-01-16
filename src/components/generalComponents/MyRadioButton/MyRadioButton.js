import './MyRadioButton.css';

const MyRadioButton = ({txt, items, selected, disabled}) => 
{
    const fin = [];
    items.forEach((e, index) =>{
        fin.push(
            <li>
                <label className={'label-radio'}>
                    <input type="radio" name="gender" defaultChecked={index===selected} disabled={disabled}/>
                    <span>{e}</span>
                </label>
            </li>
        );
    });
    return (
		<div className="external-radio">
            <div className="txt-top-radio">
                <span><span id="star">*</span>{txt}</span>
            </div>
            <div className={"internal-radio"+(disabled ? ' disabled-radio' : '')}>
                <ul>
                    {fin}
                </ul>
            </div>
        </div>
	);
};

export default MyRadioButton;
