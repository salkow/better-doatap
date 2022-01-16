import './MyTextBox.css';

const MyTextBox = ({txt, filled, type, error, setError, vaar, validate}) => 
{
    return (
		<div className="txt-external">
            <div className={'txt-internal'+(error ? ' error_internal_txt' : '')}>
                <div className="txt-top">
                    <span><span id="star">*</span>{txt}</span>
                </div>
                <input type={type} onChange={(e)=>{vaar(e.target.value);if(validate){validate(e.target, setError)}}} defaultValue={filled}/>
                <span className={'error_span_txt'+(error ? ' error_msg_txt' : '')}>*{error}</span>
            </div>
        </div>
	);
};

export default MyTextBox;