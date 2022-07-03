import React, { useState } from "react";
import Timer from "../components/Contador";

import welcome from "../images/welcome.jpg";
import cozumelLogo from "../images/cozumel-logo.png";
import bmgLogo from "../images/bmg-logo.jpeg";
import loose from "../images/Loose.jpeg";
import win from "../images/Win.jpeg";
import gif from "../images/stand-up.gif";

const Home = () => {
  const [imageRender, setImageRender] = useState(welcome);
  const [clicked, setClicked] = useState(false);
  const [resultado, setResultado] = useState(0);
  const [titulo, setTitulo] = useState("Time out Open Mic");

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const handleClick = async () => {
    const rann = Math.floor(Math.random() * 2);
    // setImageRender(loading);
    setResultado(rann);
    console.log("Home ", resultado);
    console.log("Rann ", rann);
    setImageRender(gif);
    await timeout(2000);
    if (rann === 1) {
      setImageRender(win);
      setTitulo("Ganaste!");
      setImageRender(win);
    } else {
      setTitulo("Perdiste!");
      setImageRender(loose);
    }

    await timeout(2000);
    setClicked(true);
  };

  const handleCancel = () => {
    setClicked(false);
    setTitulo("Time out Open Mic");
    setImageRender(welcome);
    setResultado(0);
  };

  return (
    <div className="text-center container-fluid w-100">
      <div className="f-flex align-items-center">
        <div className="d-flex justify-content-evenly">
          <img
            className="lobbyImage rounded shadow-lg "
            src={bmgLogo}
            alt=""
            height={200}
          />
          <img src={cozumelLogo} alt="" height={200} />
        </div>
        <div className="d-flex justify-content-center border-top m-5 rounded-2 rounded-2 p-4">
          <div className="d-flex align-items-center justify-content-center w-50">
            {!clicked ? (
              <button
                className="btn btn-outline-light p-5 btn-lg fs-1"
                onClick={handleClick}
              >
                Comenzar
              </button>
            ) : (
              <button
                className="btn btn-outline-light p-5 btn-lg fs-1"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            )}
          </div>
          <div className="flex-fill  h-100 d-inline-block  ">
            {clicked ? (
              <Timer id={resultado} />
            ) : (
              <div className="container text-center">
                <div className="p-5 align-middle">
                  <h1 className="display-1"> {titulo} </h1>
                  <img
                    src={imageRender}
                    alt=""
                    width="50%"
                    className="counterImage rounded shadow-lg mt-5"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
