import React from "react";
import $ from "jquery"

export default function Register({ setShowch }) {

    function register() {
        setShowch("renderInfo")
    }
    var num = 2

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
            <div id="newDivs">
                <div className="input-info">
                    <p style={{ "marginBottom": "5px" }}>Nombre del grupo</p>
                    <input type="text" name="teamname" className="form-control" maxlength="120" required />
                </div>
                <br />
                <div className="input-info">
                    <p style={{ "marginBottom": "5px" }}>Integrante 1 (Nombre y apellidos)</p>
                    <input type="text" name="teammate1" id="teammate1" className="form-control" maxlength="100" required />
                </div>
                <br />
                <div className="input-info">
                    <p style={{ "marginBottom": "5px" }}>Integrante 2 (Nombre y apellidos)</p>
                    <input type="text" name="teammate2" id="teammate2" className="form-control" maxlength="100" required />
                </div>
                <br />
            </div>
            <div className="new-mates-and-reg">
                <input id="add-more-mates" className="add-more-mates" type="image" src="/images/mas.png" onClick={newMate}></input>
                <button className="btn btn-primary register-btn btn-custom-css" type="button" onClick={register}>Registrarme</button>
                <br />
            </div>
        </>
    )
}