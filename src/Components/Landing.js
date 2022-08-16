
import React, { useEffect, useState, Component } from "react";

function Landing() {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${2023}-10-21`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            d: Math.floor(difference / (1000 * 60 * 60 * 24)),
            h: Math.floor((difference / (1000 * 60 * 60)) % 24),
            m: Math.floor((difference / 1000 / 60) % 60),
            s: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span className = "countdown-timer">
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });
    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Alice & Ben</h1>
                    <hr />
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>
            </div>
        </header>         
    );
}

export default Landing;