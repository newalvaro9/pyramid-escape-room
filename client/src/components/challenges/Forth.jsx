import React, { Fragment, useState, useRef } from "react";
import Errors from "../Errors";
import $ from "jquery"

export default function Forth({ setShowch, setStop }) {
    const [error, setError] = useState();

    const useRefxy18 = useRef();
    const useRefxy19 = useRef();
    const useRefxy110 = useRef();
    const useRefxy24 = useRef();
    const useRefxy210 = useRef();
    const useRefxy34 = useRef();
    const useRefxy310 = useRef();
    const useRefxy42 = useRef();
    const useRefxy43 = useRef();
    const useRefxy44 = useRef();
    const useRefxy45 = useRef();
    const useRefxy46 = useRef();
    const useRefxy410 = useRef();
    const useRefxy54 = useRef();
    const useRefxy510 = useRef();
    const useRefxy61 = useRef();
    const useRefxy62 = useRef();
    const useRefxy63 = useRef();
    const useRefxy64 = useRef();
    const useRefxy65 = useRef();
    const useRefxy66 = useRef();
    const useRefxy67 = useRef();
    const useRefxy68 = useRef();
    const useRefxy69 = useRef();
    const useRefxy610 = useRef();
    const useRefxy74 = useRef();
    const useRefxy78 = useRef();
    const useRefxy88 = useRef();
    const useRefxy89 = useRef();
    const useRefxy810 = useRef();
    const useRefxy811 = useRef();
    const useRefxy812 = useRef();
    const useRefxy98 = useRef();
    const useRefxy106 = useRef();
    const useRefxy107 = useRef();
    const useRefxy108 = useRef();
    const useRefxy109 = useRef();
    const useRefxy118 = useRef();
    const useRefxy128 = useRef();
    const useRefxy14 = useRef();
    const useRefxy17 = useRef();
    const useRefxy41 = useRef();
    const useRefxy58 = useRef();
    const useRefxy60 = useRef();
    const useRefxy87 = useRef();
    const useRefxy105 = useRef();
    const useRefxy010 = useRef();


    function goNextForth() {
        const xy010 = useRefxy010.current.value
        const xy18 = useRefxy18.current.value
        const xy19 = useRefxy19.current.value
        const xy110 = useRefxy110.current.value
        const xy24 = useRefxy24.current.value
        const xy210 = useRefxy210.current.value
        const xy34 = useRefxy34.current.value
        const xy310 = useRefxy310.current.value
        const xy42 = useRefxy42.current.value
        const xy43 = useRefxy43.current.value
        const xy44 = useRefxy44.current.value
        const xy45 = useRefxy45.current.value
        const xy46 = useRefxy46.current.value
        const xy410 = useRefxy410.current.value
        const xy54 = useRefxy54.current.value
        const xy510 = useRefxy510.current.value
        const xy61 = useRefxy61.current.value
        const xy62 = useRefxy62.current.value
        const xy63 = useRefxy63.current.value
        const xy64 = useRefxy64.current.value
        const xy65 = useRefxy65.current.value
        const xy66 = useRefxy66.current.value
        const xy67 = useRefxy67.current.value
        const xy68 = useRefxy68.current.value
        const xy69 = useRefxy69.current.value
        const xy610 = useRefxy610.current.value
        const xy74 = useRefxy74.current.value
        const xy78 = useRefxy78.current.value
        const xy88 = useRefxy88.current.value
        const xy89 = useRefxy89.current.value
        const xy810 = useRefxy810.current.value
        const xy811 = useRefxy811.current.value
        const xy812 = useRefxy812.current.value
        const xy98 = useRefxy98.current.value
        const xy106 = useRefxy106.current.value
        const xy107 = useRefxy107.current.value
        const xy108 = useRefxy108.current.value
        const xy109 = useRefxy109.current.value
        const xy118 = useRefxy118.current.value
        const xy128 = useRefxy128.current.value
        const xy14 = useRefxy14.current.value
        const xy17 = useRefxy17.current.value
        const xy41 = useRefxy41.current.value
        const xy58 = useRefxy58.current.value
        const xy60 = useRefxy60.current.value
        const xy87 = useRefxy87.current.value
        const xy105 = useRefxy105.current.value

        if (xy010 != "e" ||
            xy18 != "i" ||
            xy19 != "o" ||
            xy110 != "s" ||
            xy24 != "s" ||
            xy210 != "c" ||
            xy34 != "f" ||
            xy310 != "l" ||
            xy42 != "a" ||
            xy43 != "p" ||
            xy44 != "i" ||
            xy45 != "r" ||
            xy46 != "o" ||
            xy410 != "a" ||
            xy54 != "n" ||
            xy510 != "v" ||
            xy61 != 'e' ||
            xy62 != 'r' ||
            xy63 != 'o' ||
            xy64 != 'g' ||
            xy65 != 'l' ||
            xy66 != 'i' ||
            xy67 != 'f' ||
            xy68 != 'i' ||
            xy69 != "c" ||
            xy610 != "o" ||
            xy74 != "e" ||
            xy78 != "r" ||
            xy88 != "a" ||
            xy89 != "r" ||
            xy810 != "a" ||
            xy811 != "o" ||
            xy812 != "n" ||
            xy98 != "m" ||
            xy106 != "o" ||
            xy107 != "m" ||
            xy108 != "i" ||
            xy109 != "a" ||
            xy118 != "d" ||
            xy128 != "e" ||
            xy14 != "e" ||
            xy17 != "d" ||
            xy41 != "p" ||
            xy58 != "p" ||
            xy60 != "j" ||
            xy87 != "f" ||
            xy105 != "m") {
            return setError(
                `❌ ¡Has puesto una letra mal!`
            )
        }
        setStop(true)
        setShowch("renderFinal")
    }


    function s() {
        setStop(true)
        setShowch("renderFinal")
    }

    return (
        <>  
        <button onClick={s}>sx</button>
            <div className="cs">
                <img className="cartel" src="/images/cartel.png"></img>
                <div className="titulo tryrwe centered">
                    <h1>Última Sala</h1>
                </div>
            </div>
            <div className="whattodo">
                <p>
                    La puerta final tiene un crucigrama, resuelvelo para poder salir de la pirámide
                </p>
            </div>
            <span></span>

            <Errors error={error} setError={setError} />

            <div className="caja4prueba">
                <br />
                <table className="crossword" cellSpacing="0" id="blank">
                    <tbody>
                        <tr>
                            <td className="nb" title="0, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 4" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 8" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="0, 10" style={{ height: "30px", width: "30px" }}>        
                                <p className="number">1</p>                       
                                <input ref={useRefxy010} required className="od" type="text" maxLength="1"></input>  
                            </td>

                            <td className="nb" title="0, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="0, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="1, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="1, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="1, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="1, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="1, 4" style={{ height: "30px", width: "30px" }}>
                                <p className="number">2</p>                       
                                <input ref={useRefxy14} required className="od" type="text" maxLength="1"></input>  
                            </td>
                            <td className="nb" title="1, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="1, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="1, 7" style={{ height: "30px", width: "30px" }}>
                                <p className="number">3</p>                       
                                <input ref={useRefxy17} required className="od" type="text" maxLength="1"></input>  
                            </td>
                            <td className="b" title="1, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" type="text" ref={useRefxy18} maxLength="1"></input>
                            </td>
                            <td className="b" title="1, 9" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" type="text" ref={useRefxy19} maxLength="1"></input>
                            </td>
                            <td className="b" title="1, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" type="text" ref={useRefxy110} maxLength="1"></input>
                            </td>
                            <td className="nb" title="1, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="1, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="2, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="2, 4" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" type="text" ref={useRefxy24} maxLength="1"></input>
                            </td>
                            <td className="nb" title="2, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 8" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="2, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy210}></input>
                            </td>
                            <td className="nb" title="2, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="2, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="3, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="3, 4" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy34}></input>
                            </td>
                            <td className="nb" title="3, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 8" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="3, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy310}></input>
                            </td>
                            <td className="nb" title="3, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="3, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="4, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="4, 1" style={{ height: "30px", width: "30px" }}>
                                <p className="number">4</p>                       
                                <input ref={useRefxy41} required className="od" type="text" maxLength="1"></input>  
                            </td>
                            <td className="b" title="4, 2" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy42}></input>
                            </td>
                            <td className="b" title="4, 3" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy43}></input>
                            </td>
                            <td className="b" title="4, 4" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy44}></input>
                            </td>
                            <td className="b" title="4, 5" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy45}></input>
                            </td>
                            <td className="b" title="4, 6" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy46}></input>
                            </td>
                            <td className="nb" title="4, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="4, 8" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="4, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="4, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy410}></input>
                            </td>
                            <td className="nb" title="4, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="4, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="5, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="5, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="5, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="5, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="5, 4" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy54}></input>
                            </td>
                            <td className="nb" title="5, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="5, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="5, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="5, 8" style={{ height: "30px", width: "30px" }}>
                                <p className="number">5</p>                       
                                <input ref={useRefxy58} required className="od" type="text" maxLength="1"></input> 
                            </td>
                            <td className="nb" title="5, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="5, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy510}></input>
                            </td>
                            <td className="nb" title="5, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="5, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="b" title="6, 0" style={{ height: "30px", width: "30px" }}>
                                <p className="number">6</p>                       
                                <input ref={useRefxy60} required className="od" type="text" maxLength="1"></input> 
                            </td>
                            <td className="b" title="6, 1" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy61}></input>
                            </td>
                            <td className="b" title="6, 2" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy62}></input>
                            </td>
                            <td className="b" title="6, 3" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy63}></input>
                            </td>
                            <td className="b" title="6, 4" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy64}></input>
                            </td>
                            <td className="b" title="6, 5" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy65}></input>
                            </td>
                            <td className="b" title="6, 6" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy66}></input>
                            </td>
                            <td className="b" title="6, 7" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy67}></input>
                            </td>
                            <td className="b" title="6, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy68}></input>
                            </td>
                            <td className="b" title="6, 9" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy69}></input>
                            </td>
                            <td className="b" title="6, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy610}></input>
                            </td>
                            <td className="nb" title="6, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="6, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="7, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="7, 4" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy74}></input>
                            </td>
                            <td className="nb" title="7, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="7, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy78}></input>
                            </td>
                            <td className="nb" title="7, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 10" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="7, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="8, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="8, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="8, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="8, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="8, 4" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="8, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="8, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="8, 7" style={{ height: "30px", width: "30px" }}>
                            <p className="number">7</p>                       
                                <input ref={useRefxy87} required className="od" type="text" maxLength="1"></input> 
                            </td>
                            <td className="b" title="8, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy88}></input>
                            </td>
                            <td className="b" title="8, 9" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy89}></input>
                            </td>
                            <td className="b" title="8, 10" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy810}></input>
                            </td>
                            <td className="b" title="8, 11" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy811}></input>
                            </td>
                            <td className="b" title="8, 12" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy812}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="nb" title="9, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 4" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="9, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy98}></input>
                            </td>
                            <td className="nb" title="9, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 10" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="9, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="10, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="10, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="10, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="10, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="10, 4" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="10, 5" style={{ height: "30px", width: "30px" }}>
                            <p className="number">8</p>                       
                                <input ref={useRefxy105} required className="od" type="text" maxLength="1"></input> 
                            </td>
                            <td className="b" title="10, 6" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy106}></input>
                            </td>
                            <td className="b" title="10, 7" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy107}></input>
                            </td>
                            <td className="b" title="10, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy108}></input>
                            </td>
                            <td className="b" title="10, 9" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy109}></input>
                            </td>
                            <td className="nb" title="10, 10" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="10, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="10, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="11, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 4" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="11, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy118}></input>
                            </td>
                            <td className="nb" title="11, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 10" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="11, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                        <tr>
                            <td className="nb" title="12, 0" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 1" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 2" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 3" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 4" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 5" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 6" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 7" style={{ height: "30px", width: "30px" }}></td>
                            <td className="b" title="12, 8" style={{ height: "30px", width: "30px" }}>
                                <input required className="od" maxLength="1" type="text" ref={useRefxy128}></input>
                            </td>
                            <td className="nb" title="12, 9" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 10" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 11" style={{ height: "30px", width: "30px" }}></td>
                            <td className="nb" title="12, 12" style={{ height: "30px", width: "30px" }}></td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary btn-block" onClick={goNextForth}>Verificar</button>

                <br />
                <div className="definiciones">
                    <div className="down">
                        <h3>Verticales</h3>
                        <p><strong>1.</strong> Que carece de libertad y derechos propios por estar sometido de manera absoluta a la voluntad y el dominio de otra persona.</p>
                        <p><strong>2.</strong> Animal fabuloso con cabeza, cuello y pecho de mujer, y cuerpo y pies de leon.</p>
                        <p><strong>5.</strong> Cuerpo geométrico que tiene como base un polígono cualquiera, y sus caras laterales son triangulos que se juntan en un vértice común.</p>
                    </div>
                    <div className="across">
                        <h3>Horizontales</h3>
                        <p><strong>3.</strong> Ser sobrenatural al que se rinde culto; tiene poder sobre un émbito concreto de la realidad y sobre el destino de los humanos</p>
                        <p><strong>4.</strong> Lamina flexible sacada del tallo de esta planta, que se emplea para escribir o dibujar en ella.</p>
                        <p><strong>6.</strong> Representan seres y objetos de la realidad y tienen un valor ideográfico o fonético.</p>
                        <p><strong>7.</strong> Soberano del antiguo Egipto. Era considerado casi un dios.</p>
                        <p><strong>8.</strong> Cadáver que, bien de forma natural o bien porque se le han aplicado ciertas sustancias, se conserva desecado, sin pudrirse.</p>
                    </div>
                </div>
            </div>
            <br></br>
        </>
    )
}