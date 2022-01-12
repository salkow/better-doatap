import './MyRadioButton.css';

const MyRadioButton = ({txt, items}) => 
{
    const fin = [];
    items.forEach(e =>{
        fin.push(
            <li>
                <label>
                    <input type="radio" name="gender" />
                    {e}
                </label>
            </li>
        );
    });
    return (
		<div class="external-radio">
            <div class="txt-top-radio">
                <span><span id="star">*</span>{txt}</span>
            </div>
            <div class="internal-radio">
                <ul>
                    {fin}
                </ul>
            </div>
        </div>
	);
};

export default MyRadioButton;
