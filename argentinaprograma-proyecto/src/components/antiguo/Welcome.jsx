import React from "react";
import maceta from "../assets/plantamaceta.jpg";
import "./Welcome.css";

const Welcome = () => {
  function handleButton() {
    return alert("Comprada!");
  }
  return (
    <div id="id_welcome" onClick={handleButton}>
      <p>Maceta Blanca</p>
      <img src={maceta} width={100} alt="" />
      <br />
      <button>Comprar</button>
    </div>
  );
};

export default Welcome;
