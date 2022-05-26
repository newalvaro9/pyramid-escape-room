import React, { Fragment } from "react"

export default function Main({setShowch}) {
    function goNextStart() {
        setShowch("renderRegister")
    }
    return (
        <>

            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>Pyramid Escape Room</h1>
                </div>
            </div>
            <br/>
            <br/>
            <button type="button" className="btn btn-primary btn-custom-css" onClick={goNextStart}>Ir al Escape Room</button>
        </>
    )
}