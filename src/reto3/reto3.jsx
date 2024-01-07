import { useState } from "react";
import "./reto3.css";
export function Reto3(){
    let [wordChange,setWordChange] = useState("");
    let [words,setWords] = useState([]);
    let [liWords,setLiWords] = useState([]); 

    const removeWord = (e) => {
        let modList = [];
        liWords.forEach(li => {
            if(li.textContent !== e.target.parentNode.textContent){
                modList.push(li);
            }
        })
        setLiWords(modList);
    }

    const changeWord = (e) => {
        setWordChange(e.target.value);
    }
    
    const addWord = () => {
        console.log(wordChange);
        setWords([...words, wordChange]);
        setLiWords([...liWords, <li key={words.length}>{wordChange}<strong className="x" onClick={removeWord}> X </strong></li>]);
    }
    
    return(
        <>
            <input type="text" id="word" onChange={changeWord}/>
            <button id="add" onClick={addWord}>Add</button>
            <ul>
                {liWords}
            </ul>
        </>
    )
}