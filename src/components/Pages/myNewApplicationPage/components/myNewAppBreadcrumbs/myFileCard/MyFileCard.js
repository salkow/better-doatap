import './MyFileCard.css';

const MyFileCard = ({name, desc}) => 
{
    
    return (
        <div>
            <div className="external-FC">
                <div className="internal-FC">
                    <div className="top-FC">
                        <div className="right-FC">
                            <span><span id="star">*</span>{name}</span>
                        </div>
                        <div className="left-FC">
                            <span className="fileName-FC">random name txt</span>
                            <div className="file-FC">
                                <input type="file" id="file-btn-FC" hidden></input>
                                <label htmlFor="file-btn-FC">Επιλογή αρχείου<i className="material-icons upload-item"> upload_file </i></label>
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
