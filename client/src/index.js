import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import Footer from "./components/Footer.jsx"

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./javascripts/NoInstaReload";

import "./styles/main.css";
import "./styles/animations.css";
import "./styles/bodys.css";
import "./styles/sign.css";
import "./styles/timer.css";
import "./styles/footer.css"

ReactDOM.render(
  <>
    <div className="sebas">
      <div id="div-confeti">
        <div className="ctr container">
          <App />
        </div>
      </div>
      <Footer />
    </div>
  </>,
  document.getElementById('root')
);