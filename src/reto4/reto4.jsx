import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
export function Reto4() {
  let [width,setWidth] = useState(0);
  
  const changeWidth = (e) => {
    setWidth(e.target.value);
  }

  return (
    <>
      <div className="App">
        <h1>Progress bar</h1>
        <ProgressBar width={width}/>
        <form>
          <label htmlFor="percentage">Input Percentage:</label>
          <input name="percentage" type="number" onChange={changeWidth}/>
        </form>
      </div>
    </>
  );
}