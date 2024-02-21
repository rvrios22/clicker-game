import React, { useState } from "react";
import "./welcome.css";

function Welcome() {
    const [isButtonClicked, setButtonIsClicked] = useState(false)

    const handleButtonClick = () => {
        setButtonIsClicked(true)
    }
  return (
    <div className={!isButtonClicked ? 'welcome-container' : 'welcome-container welcome-animation'}>
        <h1 className="welcome-header luckiest-guy">Welcome to the Clicker!</h1>
        <p className=" welcome-text protest-revolution">I'm glad you're here. The clicker is a clicker style game where the point is to... CLICK! Easy enough I know. Along your clicking journey you'll acquire various power ups and skils that will help you click even faster! Grab your mouse and get ready to click!</p>
        <button onClick={handleButtonClick} className="welcome-button">Click Here to Get Started!</button>
    </div>)
  ;
}

export default Welcome;
