import './MySelectBox.css';

import { useState } from "react";

const MySelectBox = ({txt}) => 
{
    const [curr, setCurr] = useState([]);
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
		<div class="external-select">
            <div class="external-txt-select">
                <div class="internal-txt-select" onClick={setActiveElement}>
                    <div class="top-txt-select">
                        <span><span id="star-select">*</span>{txt}</span>
                    </div>
                    <div class="expandBox">
                        <input 
                        class="expandInput" 
                        type="text" name="q" 
                        placeholder="Αναζήτηση..." 
                        autoComplete='off' 
                        onChange={e => setCurr(e.target.value)} 
                        value={curr} 
                        onBlur={e => { removeActiveElement(e); }}
                        />
                        <button class="expandButton" type="submit">
                            <i class="material-icons expand-item"> expand_more </i>
                        </button>
                    </div>
                </div>
                <div class="container-options-select">
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test1" value="test1" name="test" />
                        <label class="option-select" for="test1" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test1</label>
                    </div>
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test2" value="test2" name="test" />
                        <label class="option-select" for="test2" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test2</label>
                    </div>
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test3" value="test3" name="test" />
                        <label class="option-select" for="test3" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test3</label>
                    </div>
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test4" value="test4" name="test" />
                        <label class="option-select" for="test4" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test4</label>
                    </div>
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test5" value="test5" name="test" />
                        <label class="option-select" for="test5" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test5</label>
                    </div>
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test6" value="test6" name="test" />
                        <label class="option-select" for="test6" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test6</label>
                    </div>
                    <div class="option-select-div">
                        <input type="radio" class="radio" id="test7" value="test7" name="test" />
                        <label class="option-select" for="test7" onClick={(e) =>{ setCurr(e.target.previousSibling.value);}}>test7</label>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default MySelectBox;
