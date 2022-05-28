import React, { useEffect } from 'react';
import $ from "jquery"

export default function Final({ setShowch, registered }) {

    function goRegister() {
        setShowch("renderRegister")
    }

    function final() {
        $("#div-confeti").addClass("confeti");
        if (registered) {
            $("#goRegister").hide()
        }
    }

    useEffect(() => {
        final()
    }, [])

    return (
        <>
            <section id="top">
                <div className="cs">
                    <img className="cartel" src="/images/cartel.png"></img>
                    <div className="titulo tryrwe centered">
                        <h1>¡Has Escapado!</h1>
                    </div>
                </div>
                <br />
                <div className="clasificacion">
                    <div className="card">
                        <div className='card-header'>
                            <div className='text-clasificacion'>
                                <h3 className='card-title'>Clasificación</h3>
                            </div>
                            <div className='btn-rg-on-top'>
                                <button className="btn btn-primary btn-rg-on-top" id="goRegister" type="button" onClick={goRegister}>Registrarme</button>
                            </div>
                        </div>
                        <div className='card-body' style={{ overflow: "auto" }}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Nombre del grupo</th>
                                        <th>Tiempo</th>
                                    </tr>
                                    <tr>
                                        <td>AnnA Hompajarera</td>
                                        <td>12:56 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Professors 🤣</td>
                                        <td>14:16 min.</td>
                                    </tr>
                                    <tr>
                                        <td>Fitipaldis</td>
                                        <td>09:04 min.</td>
                                    </tr>.y                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br />
            </section>
        </>
    )

}