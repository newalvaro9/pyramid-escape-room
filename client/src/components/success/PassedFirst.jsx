import React from 'react';

export default function PassedFirst({ setShowch }) {

    function goNext() {
        setShowch("renderSecond");
    }

    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>¡Sala Superada!</h1>
                </div>
            </div>

            <div className="cajaSiguiente">
                <input className="flecha" type="image" src="/images/flecha.png" onClick={goNext} alt="Siguiente" />
                <img className="portal" src="/images/1987341.png"/>
            </div>
        </>
    )

}