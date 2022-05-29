import React, { Fragment, useState, useRef } from "react"
import Errors from "../Errors";

export default function Third({ setShowch }) {
    const [error, setError] = useState();

    let useRefCode = useRef();

    function goNextThird() {
        var code = useRefCode.current.value;
        console.log(code);
        code = code.replaceAll(" ", "").toLowerCase();
        let ans = ["092718220905190416", "92718229519416"]
        if (!ans.some(c => code.includes(c))) {
            return setError(`❌ ¡El código es incorrecto!`);
        }

        setShowch("nextForth")
    }

    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>Tercera Sala</h1>
                </div>
            </div>

            <div className="whattodo wrap">
                <p>
                    Cada letra equivale a un número, descifra "<strong>IZQUIERDO</strong>"
                </p>
            </div>

            <Errors error={error} setError={setError} />

            <img src="/images/num.png" alt="Refresque la página" className="imagennum" />
            <br />
            <div className="secres">
                <div className="fila1">
                    <p style={{ marginBottom: "5px" }}>Introduce aquí el código:</p>
                    <input type="text" ref={useRefCode} autocomplete="off" className="form-control custominput" required name="codigo" />
                </div>
                <br />
                <div className="fila1">
                    <button className="btn btn-primary btn-block" onClick={goNextThird}>Verificar</button>
                </div>
            </div>
            <br/>
        </>
    )

}