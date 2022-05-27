import React from "react";

export default function Footer() {

    return (
        <>
            <footer className="ct-footer text-center-sm text-center-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm---6 col-lg-2 text-center-md text-center-sm text-center-xs">
                            <a href="/">
                                <img alt="Logo" className="logo-footer" src="/images/icon.png" />
                            </a>
                        </div>
                        <div className="alinear-verticalmente-inside-div col-sm-6 col-md-4 text-center ct-u-paddingTop10">
                            <p>
                                © 2022 Álvaro.
                            </p>
                        </div>
                        <div className="alinear-verticalmente-inside-div col-sm-6 col-md-5 col-lg-4 text-center ct-u-paddingTop10">
                            <ul>
                                <li>
                                    <a href="https://github.com/newalvaro9/pyramid-escape-room">Github</a>
                                </li>
                                <li>
                                    |
                                </li>
                                <li>
                                    <a href="https://discord.com/users/709131461374246932">Discord</a>
                                </li>
                                <li>
                                    |
                                </li>
                                <li>
                                    <a href="https://instagram.com/puebladorkpo">Instagram</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

