import React, { useEffect } from 'react';
import $ from "jquery";

export default function Final({ setShowch }) {

    async function final() {
        $("#div-confeti").addClass("confeti");
    }

    useEffect(() => {
        final()
    }, [])

    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>¡Has Escapado!</h1>
                </div>
            </div>
            <br />
        </>
    )

}