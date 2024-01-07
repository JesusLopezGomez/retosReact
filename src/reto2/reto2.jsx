import { useState } from "react";
import "./reto2.css";
export function Reto2(){
    let [cont,setCont] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const startCont = () => {
        if(!intervalId){
            const intervalId = setInterval(() => {
                setCont(cont++);
            }, 1000);
            setIntervalId(intervalId);
        }
    }

    const stopCont = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    const resetCont = () => {
        setCont(0);
        clearInterval(intervalId);
        setIntervalId(null);
    };

    return(
        <>
        <div>
            <h1>Timer</h1>
            <h3 className="chrono">{Math.floor(cont/60)} mins {cont%60} secs</h3>
            <div className="buttons">
                <button className="start" onClick={startCont}>Start</button>
                <button className="stop"onClick={stopCont}>Stop</button>
                <button className="reset" onClick={resetCont}>Reset</button>
            </div>
        </div>
        </>
    )
}