import React, { useEffect } from "react";
import $ from "jquery"

export default function Info({ setShowch, setTimeRemaining }) {

    var theySkiped = false
    let i = 0;
    let firstText = "Tutankamón subió al trono a la edad de 9 años. Él heredó los conflictos y malestares originados por su padre y su gran esposa real, la reina Nefertiti. Su reinado, se caracterizó por un regreso a la normalidad en el plan socioreligioso./Tutankamón pronto moriría debido a necrosis del hueso y decidió enterrarse junto a 5 de sus esclavos. Desgraciadamente nos tocó a nosotros y ahora que está muerto debemos conseguir escapar o moriremos también./Dispones de 15 minutos para terminar las 4 pruebas. Cuando las termines, podras ver una clasificación de los demas grupos y sus tiempos. Recuerda que entre prueba y prueba el temporizador NO se detiene./Usa un ordenador para una mayor experiencia, la web aún no soporta al 100% los dispositivos móviles. (responsive)"

    useEffect(() => {
        startMain()
    }, []);

    function goNext() {
        setShowch("renderFirst")
        setTimeRemaining(902000)
    }


    function startMain() {
        $("textos").attr('hidden', '')
        $("textos").removeAttr('hidden');
        typeWriter()
    }


    function skip() {
        theySkiped = true
        $("#btnstart").removeAttr('disabled');
        $("#btnstart").removeClass('not-allowed');
        $("#skipbutton").attr('hidden', '')
    }


    function typeWriter() {
        if (theySkiped) {
            document.getElementById("paragrafo").innerHTML = "Tutankamón subió al trono a la edad de 9 años. Él heredó los conflictos y malestares originados por su padre y su gran esposa real, la reina Nefertiti. Su reinado, se caracterizó por un regreso a la normalidad en el plan socioreligioso.<br /><br />Tutankamón pronto moriría debido a necrosis del hueso y decidió enterrarse junto a 5 de sus esclavos. Desgraciadamente nos tocó a nosotros y ahora que está muerto debemos conseguir escapar o moriremos también.<br /> <br />Dispones de 15 minutos para terminar las 4 pruebas. Cuando las termines, podras ver una clasificación de los demas grupos y sus tiempos. Recuerda que entre prueba y prueba el temporizador NO se detiene.<br /><br />Usa un ordenador para una mayor experiencia, la web aún no soporta al 100% los dispositivos móviles. (responsive)";
            return;
        }
        $("#btnstart").attr('disabled', '');

        if (i < firstText.length) {
            switch (firstText.charAt(i)) {
                case ".":
                    setTimeout(typeWriter, 500);
                    break

                case ",":
                    setTimeout(typeWriter, 250);
                    break

                default:
                    setTimeout(typeWriter, 50);
                    break
            }
            if (firstText.charAt(i) == "/") {
                document.getElementById("paragrafo").innerHTML += '<br/><br/>'; // New paragraph
            } else {
                document.getElementById("paragrafo").innerHTML += firstText.charAt(i);
            }
            i++;
        }
        if (i >= firstText.length) {
            $("#btnstart").removeAttr('disabled');
            $("#btnstart").removeClass('not-allowed');
            $("#skipbutton").attr('hidden', '')
        }
    }




    // function clearStorage() {
    //     let dis = new Date().getTime() + 900000 + 6000 - new Date().getTime();
    //     window.localStorage.setItem("distance", dis)
    // }

    return (
        <>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>Pyramid Escape Room</h1>
                </div>
                <button className="skipbutton btn btn-primary" id="skipbutton" type="button" onClick={skip}>Skip</button>
            
            </div>
            <br />
            <br />
            <div className="textos">
                <p className="paragrafo" id="paragrafo"></p>
            </div>
            <br />
            <div className="form-group">
                <button className="btn btn-primary btn-block not-allowed" id="btnstart" onClick={goNext} type="button">Comenzar Escape Room</button>
            </div>
            <br/>
            <br/>
        </>
    )
}