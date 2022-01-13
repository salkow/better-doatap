import './MyRadioButton.css';

const MyRadioButton = ({txt, items, selected}) => 
{
    const fin = [];
    items.forEach((e, index) =>{
        fin.push(
            <li>
                <label>
                    <input type="radio" name="gender" checked={index===selected}/>
                    {e}
                </label>
            </li>
        );
    });
    return (
		<div className="external-radio">
            <div className="txt-top-radio">
                <span><span id="star">*</span>{txt}</span>
            </div>
            <div className="internal-radio">
                <ul>
                    {fin}
                </ul>
            </div>
        </div>
	);
};

export default MyRadioButton;
