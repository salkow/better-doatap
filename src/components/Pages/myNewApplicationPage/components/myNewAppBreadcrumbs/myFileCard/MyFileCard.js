import './MyFileCard.css';

const MyFileCard = ({name, desc}) => 
{
    
    return (
        <div>
            <div class="external-FC">
                <div class="internal-FC">
                    <div class="top-FC">
                        <div class="right-FC">
                            <span><span id="star">*</span>{name}</span>
                        </div>
                        <div class="left-FC">
                            <span class="fileName-FC">random name txt</span>
                            <div class="file-FC">
                                <input type="file" id="file-btn-FC" hidden></input>
                                <label for="file-btn-FC">Επιλογή αρχείου<i class="material-icons upload-item"> upload_file </i></label>
                            </div>
                        </div>
                    </div>
                    <div class="desc-FC">
                        <span>{desc}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyFileCard;
