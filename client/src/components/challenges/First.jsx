import React, { Fragment, useState } from "react";
import Errors from "../Errors";

export default function First({ setShowch }) {
  const [palabras, setPalabras] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [error, setError] = useState("");

  function goNextFirst() {
    const answers = [
      "piramide",
      "pirámide",
      "papiro",
      "jeroglifico",
      "jeroglífico",
      "egipto",
      "divinidad",
      "momia",
      "camello",
      "tutankamon",
      "tutankamón",
      "tumba",
      "sarcófago",
      "sarcofago",
      "cripta",
      "esclavo",
      "faraon",
      "faraón",
      "nilo",
    ];
    
    for (let i = 0; i < palabras.length; i++) {
      if (!answers.includes(palabras[i])) {
        setError(`❌ ¡La Palabra ${i + 1} no está en la sopa de letras!`);
        return;
      }
    }
    setShowch("nextSecond");
  }

  return (
    <>
      <div className="cs">
        <img className="cartel" src="/images/cartel.png"></img>
        <div className="titulo tryrwe centered">
          <h1>Primera Sala</h1>
        </div>
      </div>
      <div className="whattodo">
        <p>
          Encuentra las 14 palabras en esta sopa de letras para escapar de la
          primera sala.
        </p>
      </div>

      <Errors error={error} setError={setError} />

      <div className="cajade">
        <img
          src="/images/sopa.png"
          alt="Refresque la página"
          className="imagensopa"
        />
        <br></br>
        <div className="respuestas">
          {palabras.map((palabra, index) => (
            <Palabra
              key={index}
              palabra={palabra}
              index={index}
              palabras={palabras}
              setPalabras={setPalabras}
            />
          ))}
        </div>
        <div className="fila1">
          <br />
          <button
            className="btn btn-primary btn-custom-css"
            type="button"
            onClick={goNextFirst}
          >
            Verificar
          </button>
        </div>
      </div>
      <br />
    </>
  );
}

const Palabra = ({ palabra, palabras, setPalabras, index }) => {
  return (
    <div className="fila1">
      <p style={{ marginBottom: "5px" }}>Palabra {index + 1} </p>
      <input
        autocomplete="off"
        type="text"
        className="custominput"
        required
        id="palabra1"
        name="palabra1"
        onChange={(e) => {
          setPalabras([
            ...palabras.slice(0, index),
            e.target.value,
            ...palabras.slice(index + 1),
          ]);
        }}
        value={palabra}
      />
    </div>
  );
};
