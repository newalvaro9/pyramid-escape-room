import React, { useRef, useState } from "react";
import $, { isEmptyObject } from "jquery"
import Errors from "../Errors";
import axios from "axios";

export default function Register({ setShowch }) {
    const [error, setError] = useState();



    function register() {
        const namegroup = $('#useRefGroupName').val();
        const teammate1 = $('#useRefTeammate1').val();
        const teammate2 = $('#useRefTeammate2').val();
        const teammate3 = $('#useRefTeammate3').val();
        const teammate4 = $('#useRefTeammate4').val();
        const teammate5 = $('#useRefTeammate5').val();
        const teammate6 = $('#useRefTeammate6').val();

        // obligatories
        if (!namegroup) {
            return setError('❌ ¡Escribe un nombre para tu grupo!')
        }
        if (!teammate1 || teammate1.length < 2) {
            return setError('❌ ¡Escribe el nombre de al menos un integrante!')
        }
        axios.post('http://localhost:5000/saveGroup', {
            name: namegroup,
            mate1: teammate1,
            mate2: teammate2,
            mate3: teammate3,
            mate4: teammate4,
            mate5: teammate5,
            mate6: teammate6
        }).then(function (response) {
            if(response.data.code == 400) {
                setError('❌ ¡El nombre del grupo ya existe!')
            }
            if(response.data.code == 201) {
                setShowch("renderInfo")
            }
        }).catch(function (error) {
            setError('❌ ¡Ha ocurrido un error inesperado!     ' + error)
        });
    }
    var in_num = 1
    // Add more teammates
    function newMate() {
        in_num = ++in_num
        if (in_num === 6) {
            $("#add-mates").attr('disabled', '') // Disabling bcs no more to add
            $("#del-mates").removeAttr('disabled'); // Able bcs now we can remove

            $("#newDivs").append(
                `<div class="input-info">
                <p style="margin-bottom: 5px;">Integrante ${in_num} (Nombre y apellidos)</p>
                <input type="text" id="useRefTeammate${in_num}" class="form-control" maxlength="100" required />
                </div>
                <br />`
            );
            return false
        }

        $("#newDivs").append(
            `<div class="input-info">
            <p style="margin-bottom: 5px;">Integrante ${in_num} (Nombre y apellidos)</p>
            <input type="text" id="useRefTeammate${in_num}" class="form-control" maxlength="100" required />
            </div>
            <br />`
        );
        $("#del-mates").removeAttr('disabled');
    }

    function delMate() {
        if (in_num === 1) {
            $("#del-mates").attr('disabled', '') // Disabling bcs there's no more to delete

            $('#newDivs div:last').remove();
            $('#newDivs br:last').remove();
            return false
        }
        --in_num;
        $('#newDivs div:last').remove();
        $('#newDivs br:last').remove();
        $("#add-mates").removeAttr('disabled'); // Able bcs now we can add more
    }

    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>Registrar tu resultado</h1>
                </div>
            </div>
            <br />

            <Errors error={error} setError={setError} />

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
            <div id="newDivs">

            </div>
            <div className="new-mates-and-reg">
                <div className="modify-mates">
                    <input id="add-mates" className="add-mates" type="image" src="/images/mas.png" onClick={newMate}></input>
                    <input id="del-mates" className="del-mates" type="image" src="/images/menos.png" onClick={delMate}></input>
                </div>
                <div className="registrarse">
                    <button className="btn btn-primary register-btn btn-custom-css" type="button" onClick={register}>Registrarme</button>
                </div>
            </div>
            <br />
        </>
    )
}