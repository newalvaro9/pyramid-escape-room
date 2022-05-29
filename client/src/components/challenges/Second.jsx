import React, { Fragment, useRef, useState } from "react";
import Errors from "../Errors";

export default function Second({ setShowch }) {
  const [error, setError] = useState();

  let useReffrase = useRef();

  function goNextSecond() {
    var frase = useReffrase.current.value;
    console.log(frase);
    frase = frase.replaceAll(" ", "").toLowerCase();
    if (frase !== "tuojoderechoeslabarcadelanoche") {
      return setError(`❌ ¡La frase es incorrecta!`);
    }
    setShowch("nextThird")
  }

  return (
    <>
      <div className="cs">
        <img className="cartel" src="/images/cartel.png"></img>
        <div className="titulo tryrwe centered">
          <h1>Segunda Sala</h1>
        </div>
      </div>
      <div className="whattodo">
        <p>Descifra la frase usando el código de jeroglíficos.</p>
      </div>

      <img
        src="/images/jeroglifico.jpg"
        alt="Refresque la página"
        className="imagenjero"
      />
      <br />

      <Errors error={error} setError={setError} />

      <div className="secres">
        <div className="fila1">
          <p style={{ marginBottom: "5px" }}>Introduce aquí la frase:</p>
          <input
            autocomplete="off"
            type="text"
            ref={useReffrase}
            className="custominput form-control"
            id="frase"
            required
            name="frase"
          />
        </div>
        <br />
        <div className="fila1">
          <button className="btn btn-primary btn-block" onClick={goNextSecond}>
            Verificar
          </button>
        </div>
      </div>
      <br/>
    </>
  );
}
