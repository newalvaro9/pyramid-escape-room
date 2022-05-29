import React, { useEffect, useState } from 'react';
import $ from "jquery";
import axios from 'axios';

export default function Final({ setShowch, registered }) {
    const [dataf, setDataf] = useState([])
    const [totalDataf, setTotalDataf] = useState(0)
    const [pageState, setPage] = useState(0)
    function goRegister() {
        setShowch("renderRegister")
    }

    async function final() {
        let total = await axios.get(`http://localhost:5000/getCurrentTop`);
        setTotalDataf(total.data.length)
        let response = await axios.get("http://localhost:5000/getCurrentTop?from=0&to=10");
        setDataf(response.data);

        if (registered) {
            $("#goRegister").hide()
        }
    }

    

    async function goForward() {
        if(pageState + 1 >= Math.ceil(totalDataf/10)) return //Firt Page
        let page = pageState + 1
        setPage(pageState + 1)
        let response = await axios.get(`http://localhost:5000/getCurrentTop?from=${page * 10}&to=${page * 10 + 10}`);
        console.log(`http://localhost:5000/getCurrentTop?from=${page * 10}&to=${page * 10 + 10}`)
        setDataf(response.data);
    }

    async function goBack() {
        if(pageState + 1 <= 1) return //Last Page
        let page = pageState - 1
        setPage(pageState - 1)
        let response = await axios.get(`http://localhost:5000/getCurrentTop?from=${page * 10}&to=${page * 10 + 10}`);
        console.log(`http://localhost:5000/getCurrentTop?from=${page * 10}&to=${page * 10 + 10}`)
        setDataf(response.data);
    }

    useEffect(() => {
        final()
    }, [])

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
                        <h1>Clasificación</h1>
                    </div>
                </div>
                <br />
                <div className="clasificacion">
                    <div className="card">
                        <div className='card-header'>
                            <h3 className='card-title'>Clasificación</h3>
                            <button className="btn btn-primary btn-rg-on-top" id="goRegister" type="button" onClick={goRegister}>Registrarme</button>
                        </div>
                        <div className='card-body' style={{ overflow: "auto" }}>
                            <table>
                                <tbody id="table-body-top">
                                    <tr>

                                        <th>Rango</th>
                                        <th>Nombre del grupo</th>
                                        <th>Tiempo</th>
                                    </tr>
                                    {
                                        dataf.map((data, index) =>
                                            <tr key={data._id}>
                                                <td className='rank'>#{pageState * 10 + index + 1}.</td>
                                                <td>{data.groupName}</td>
                                                <td>{millisToMinutesAndSeconds(data.timeToFinish)} min.</td>
                                            </tr>
                                        )}

                                </tbody>
                            </table>
                            <br />
                            <div className="see-more-ctr">
                                <div className='controls'>
                                    <input type="image" id="left" className='left' src="/images/left.png" onClick={goBack}></input>
                                    <input type="image" id="right" className='right' src="/images/right.png" onClick={goForward}></input>
                                </div>
                                <h5 className='num-of-pages'>{pageState + 1}/{Math.ceil(totalDataf/10)}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </section>
        </>
    )

}