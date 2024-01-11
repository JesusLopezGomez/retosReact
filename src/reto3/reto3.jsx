import { useState } from "react";
import "./reto3.css";

export function Reto3(){
    let [wordChange,setWordChange] = useState("");
    let [words,setWords] = useState([]); 

    const removeWord = (e) => {
        let modList = [];
        words.forEach(word => {
            if(word !== e.target.parentNode.firstChild.textContent){
                modList.push(word);
            }
        })
        setWords(modList);
    }

    const changeWord = (e) => {
        setWordChange(e.target.value);
    }
    
    const addWord = () => {
        setWords([...words, wordChange]);
    }
    
    const List = () => {
        return (
                <ul>
                    {words.map(word => 
                        (<li key={word}>{word}<button className="x" onClick={removeWord}>X</button></li>)
                    )}
                </ul>
        )
    }
    return(
        <>
            <input type="text" id="word" onChange={changeWord}/>
            <button id="add" onClick={addWord}>Add</button>
            <List key={1}></List>
        </>
    )
}