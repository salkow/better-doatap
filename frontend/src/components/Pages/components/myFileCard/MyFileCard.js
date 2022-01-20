import './MyFileCard.css';

const MyFileCard = ({name, desc, link, setLink, file_name, setFileName, setUploaded, disabled}) => 
{
    const on_change_f = (e) =>{
        setLink(window.URL.createObjectURL(e.target.files[0]));
        setFileName(e.target.files[0].name);
        setUploaded(e.target.files[0]);
    }
    return (
        <div>
            <div className="external-FC">
                <div className="internal-FC">
                    <div className="top-FC">
                        <div className="right-FC">
                            <span><span id="star">*</span>{name}</span>
                        </div>
                        <div className="left-FC">
                            {file_name && (<span className="fileName-FC"><a href={link} target="_blank">{file_name}</a></span>)}
                            <div className="file-FC">
                                <input type="file" accept='image/*, application/pdf' onChange={on_change_f} id="file-btn-FC" hidden disabled={disabled}></input>
                                <label htmlFor="file-btn-FC" className={(disabled ?' disabled-file-input' : '')}>
                                    <span>Επιλογή αρχείου</span>
                                    <i className={"material-icons upload-item"}> upload_file </i>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="desc-FC">
                        <span>{desc}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFileCard;
