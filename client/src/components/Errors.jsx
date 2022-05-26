import React, { useState } from "react";
import "../javascripts/Errors-Jquery"
export default function Errors({ error, setError }) {
  const [fade, setFade] = useState(false);

  if (error) {
    let classNames = "alert"
    if (fade) {
      classNames += " fade-out";
      setTimeout(() => {
        setError("")
        classNames.replace("fade-out", "")
        setFade(false)
      }, 1500)
    }

    return (
      <>
      <div id="alerta" className={classNames} style={{ display: error && "block" }}>
        <span className="closebtn" onClick={() => setFade(true)}>
          &times;
        </span>
        {error}
      </div>
      
      </>
    );
  } else {
    return null;
  }
}
