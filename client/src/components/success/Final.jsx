import React, { useEffect, useState } from 'react';
import $ from "jquery";
import axios from 'axios';

export default function Final({ setShowch, registered }) {
    const [dataf, setDataf] = useState([])

    function goRegister() {
        setShowch("renderRegister")
    }

    async function final() {
        $("#div-confeti").addClass("confeti");
        let response = await axios.get("http://localhost:5000/getCurrentTop?limit=10");
        setDataf(response.data);

        if (registered) {
            $("#goRegister").hide()
        }
    }

    useEffect(() => {
        final()
    }, [])
    
    console.log(dataf)

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        //If seconds is less than 10 put a zero in front.
        return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    }

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
                                <tbody id="table-body-top">
                                    <tr>
                                        <th>Nombre del grupo</th>
                                        <th>Tiempo</th>
                                    </tr>
                                    {
                                        dataf.map(data =>
                                            <tr>
                                                <td>{data.groupName}</td>
                                                <td>{millisToMinutesAndSeconds(data.timeToFinish)} min.</td>
                                            </tr>
                                        )}

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