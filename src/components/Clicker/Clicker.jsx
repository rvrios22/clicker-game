import React, { useState } from "react";
import './clicker.css'

function Clicker() {
    const [count, setCount] = useState(0)

    const handleClickCount = () => {
        setCount(count + 1)
    }
  return (
    <div className="clicker-container">
        <h1>The count is {count}</h1>
        <button className="clicker-button" onClick={handleClickCount}>Click Me</button>
    </div>
  );
}

export default Clicker;
