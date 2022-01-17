import './MySelectBox.css';

import { useState } from "react";

const MySelectBox = ({txt, filled, vaar}) => 
{
    let items = ["First", "Second", "Third", "Fourth"] 
    // const [curr, setCurr] = useState([]);
    function setActiveElement(event){
        // console.log(event.target)
        event.preventDefault();
        // let el = event.currentTarget.querySelector('.container-options-select');
        let el = event.currentTarget.nextElementSibling;
        let inpu = event.currentTarget.querySelector('.expandInput');
        if(event.target.classList.contains("expandButton") || event.target.classList.contains("expand-item")){
            // console.log("test")
            if(el.classList.contains('active')){
                el.classList.remove('active');
                inpu.parentElement.blur();
                console.log(inpu.parentElement);
                inpu.blur();
            }else{
                el.classList.add('active');
                inpu.focus();
            }
        }else{
            el.classList.add('active');
            inpu.focus();
        }
        
        // console.log(el)
    }
    function removeActiveElement(event){
        event.preventDefault();
        let el = event.currentTarget.parentElement.parentElement.nextElementSibling;
        // console.log(el);
        el.classList.toggle('active');
    }
    return (
		<div className="external-select">
            <div className="external-txt-select">
                <div className="internal-txt-select" onClick={setActiveElement}>
                    <div className="top-txt-select">
                        <span><span id="star-select">*</span>{txt}</span>
                    </div>
                    <div className="expandBox">
                        <input 
                        className="expandInput" 
                        type="text" name="q" 
                        placeholder="Αναζήτηση..." 
                        autoComplete='off' 
                        onChange={e => vaar(e.target.value)} 
                        value={filled} 
                        onBlur={e => { removeActiveElement(e); }}
                        />
                        <button className="expandButton" type="submit">
                            <i className="material-icons expand-item"> expand_more </i>
                        </button>
                    </div>
                </div>
                <div className="container-options-select">
        
				{items.map((item, index) => (
                    <div className="option-select-div">
                        {/* <input onChange={filter} type="radio" className="radio" id="test1" value="test1" name="test" 
                        onChange={(e) =>
                            setNewComment(
                                e.target
                                    .value
                            )
                        }
                        /> */}
                        <label className="option-select" htmlFor="test1" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>{item}</label>
                    </div>
                ))}

        
                    {/* <div className="option-select-div">
                        <input type="radio" className="radio" id="test1" value="test1" name="test" />
                        <label className="option-select" htmlFor="test1" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test1</label>
                    </div>
                    <div className="option-select-div">
                        <input type="radio" className="radio" id="test2" value="test2" name="test" />
                        <label className="option-select" htmlFor="test2" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test2</label>
                    </div>
                    <div className="option-select-div">
                        <input type="radio" className="radio" id="test3" value="test3" name="test" />
                        <label className="option-select" htmlFor="test3" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test3</label>
                    </div>
                    <div className="option-select-div">
                        <input type="radio" className="radio" id="test4" value="test4" name="test" />
                        <label className="option-select" htmlFor="test4" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test4</label>
                    </div>
                    <div className="option-select-div">
                        <input type="radio" className="radio" id="test5" value="test5" name="test" />
                        <label className="option-select" htmlFor="test5" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test5</label>
                    </div>
                    <div className="option-select-div">
                        <input type="radio" className="radio" id="test6" value="test6" name="test" />
                        <label className="option-select" htmlFor="test6" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test6</label>
                    </div>
                    <div className="option-select-div">
                        <input type="radio" className="radio" id="test7" value="test7" name="test" />
                        <label className="option-select" htmlFor="test7" onClick={(e) =>{ vaar(e.target.previousSibling.value);}}>test7</label>
                    </div> */}
                </div>
            </div>
        </div>
	);
};

export default MySelectBox;
