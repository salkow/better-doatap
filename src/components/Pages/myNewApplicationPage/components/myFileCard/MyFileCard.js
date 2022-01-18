import './MyFileCard.css';
import { useState } from 'react';

const MyFileCard = ({name, desc, link, setLink, setUpdated, disabled}) => 
{    
    const [file_name, setfile_name] = useState(link.substring(link.lastIndexOf('/') + 1));
    const [currFile, setCurrFile] = useState(link);
    const [tempUrl, setTempUrl] = useState(link);
    return (
        <div>
            <div className="external-FC">
                <div className="internal-FC">
                    <div className="top-FC">
                        <div className="right-FC">
                            <span><span id="star">*</span>{name}</span>
                        </div>
                        <div className="left-FC">
                            <span className="fileName-FC"><a href={tempUrl} target="_blank">{file_name}</a></span>
                            <div className="file-FC">
                                <input type="file" onChange={(e)=>{setCurrFile(e.target.files[0]);setLink(window.URL.createObjectURL(e.target.files[0]));setfile_name(e.target.files[0].name);setUpdated(e.target.files[0]);setTempUrl(window.URL.createObjectURL(e.target.files[0]))}} id="file-btn-FC" hidden disabled={disabled}></input>
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
