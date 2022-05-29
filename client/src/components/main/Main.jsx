import React, { Fragment } from "react"

export default function Main({setShowch, setRegistered}) {
    function goNextStart() {
        setShowch("renderInfo")
    }
    
    function gotop() {
        setRegistered(true)
        setShowch("renderTop")
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
            <button type="button" className="btn btn-primary" onClick={goNextStart}>Ir al Escape Room</button>
            <br/>
            <button type="button" className="btn btn-primary" onClick={gotop}>Ver clasificación</button>
        </>
    )
}