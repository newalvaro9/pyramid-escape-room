import React from "react";

export default function Reset({setShowch}) {

    function next() {
        setShowch("renderStart")
    }
    
    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>¡Se acabó el tiempo!</h1>
                </div>
            </div>
            <br/>
            <br/>
            <button type="button" className="btn btn-primary btn-custom-css" onClick={next}>Volver a intentar</button>
        </>
    )
}