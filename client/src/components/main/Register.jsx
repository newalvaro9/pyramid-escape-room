import React, { useRef, useState } from "react";
import $ from "jquery"
import Errors from "../Errors";

export default function Register({ setShowch }) {
    const [error, setError] = useState();

    

    function register() {
        const namegroup = document.getElementById('useRefGroupName').value;
        const teammate1 = document.getElementById('useRefTeammate1').value;
        const teammate2 = document.getElementById('useRefTeammate2').value || "no";
        const teammate3 = document.getElementById('useRefTeammate3').value || "no";
        const teammate4 = document.getElementById('useRefTeammate4').value || "no";
        const teammate5 = document.getElementById('useRefTeammate5').value || "no";
        const teammate6 = document.getElementById('useRefTeammate6').value || "no";

        // obligatories
        if (!namegroup) {
            return setError('❌ ¡Escribe un nombre para tu grupo!')
        }
        if (!teammate1 || teammate1.length < 2) {
            return setError('❌ ¡Escribe el nombre de al menos un integrante!')
        }

        //optionals


        setShowch("renderInfo")
    }
    var num = 1
    // Add more teammates
    function newMate() {
        if (num === 5) {
            $("#add-more-mates").attr('hidden', '')
            $("#newDivs").append(
                `<div class="input-info">
                <p style="margin-bottom: 5px;">Integrante ${++num} (Nombre y apellidos)</p>
                <input type="text" class="form-control" maxlength="100" required />
                </div>
                <br />`
            );
            return false
        }
        $("#newDivs").append(
            `<div class="input-info">
            <p style="margin-bottom: 5px;">Integrante ${++num} (Nombre y apellidos)</p>
            <input type="text" class="form-control" maxlength="100" required />
            </div>
            <br />`
        );
    }

    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>Pyramid Escape Room</h1>
                </div>
            </div>
            <br />
            <Errors error={error} setError={setError} />
            <div id="newDivs">
                <div className="input-info">
                    <p style={{ "marginBottom": "5px" }}>Nombre del grupo <span className="red-color">*</span></p>
                    <input type="text" id="useRefGroupName" className="form-control" maxlength="50" required />
                </div>
                <br />
                <div className="input-info">
                    <p style={{ "marginBottom": "5px" }}>Integrante 1 (Nombre y apellidos) <span className="red-color">*</span></p>
                    <input type="text" id="useRefTeammate1" className="form-control" maxlength="50" required />
                </div>
                <br />
            </div>
            <div className="new-mates-and-reg">
                <input id="add-more-mates" className="add-more-mates" type="image" src="/images/mas.png" onClick={newMate}></input>
                <button className="btn btn-primary register-btn btn-custom-css" type="button" onClick={register}>Registrarme</button>
            </div>
            <br />
        </>
    )
}