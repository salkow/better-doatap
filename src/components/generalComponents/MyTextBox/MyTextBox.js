import './MyTextBox.css';

const MyTextBox = ({txt, type}) => 
{
    return (
		<div className="txt-external">
            <div className="txt-internal">
                <div className="txt-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <input type={type} />            
            </div>
        </div>
	);
};

export default MyTextBox;
