import React, { useEffect } from 'react';
import $ from "jquery"

export default function Final() {

    function final() {
        $("#div-confeti").addClass("confeti");
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
                <br/>
                <div className="clasificacion">
                    <div className="card">
                        <div className='card-header'>
                            <h3 className='card-title'>Clasificación</h3>
                        </div>
                        <div className='card-body' style={{ overflow: "auto" }}>
                            <table>
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
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <br/>
            </section>
        </>
    )

}