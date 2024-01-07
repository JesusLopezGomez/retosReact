import { useState } from "react"
import './reto1.css'

export function Reto1(){
    let [cadena,setCadena] = useState("");

    const valueCadena = () => cadena ? setCadena("") : setCadena("Welcome to React Challenges");

    return(
        <>
        <div className="container">
            <button onClick={valueCadena} className="showHide">Show / Hide</button>
            <h1>{cadena}</h1>
        </div>
        </>
    )
}