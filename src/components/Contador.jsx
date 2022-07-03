import React from "react";
import { useState, useEffect } from "react";

import start from "../images/standUp.jpg";

const Timer = ({ id }) => {
  useEffect(() => {
    console.log("Contaodr", id);
  }, []);

  const [minutes, setMinutes] = useState(id === 1 ? 3 : 2);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [minutes, seconds]);

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <div className="container text-center">
          <div className="p-5 align-middle">
            <h1 className="display-1"> ¡Tiempo agotado! </h1>
            <img
              src={start}
              alt=""
              width="50%"
              className="counterImage mt-2 rounded shadow-lg"
            />
          </div>
        </div>
      ) : (
        <div className="container text-center">
          <div className="p-5 align-middle">
            <h1 className="display-1">
              {" "}
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            <img
              src={start}
              alt=""
              width="50%"
              className="counterImage rounded shadow-lg mt-5"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Timer;
