import React, { Fragment, useState, useRef, useEffect } from "react";
import Timer from "./components/Timer.jsx"

import Main from "./components/main/Main.jsx";
import Info from "./components/main/Info.jsx";
import Register from "./components/main/Register.jsx";
import Reset from "./components/Reset.jsx";

import First from "./components/challenges/First.jsx";
import Second from "./components/challenges/Second.jsx";
import Third from "./components/challenges/Third.jsx";
import Forth from "./components/challenges/Forth.jsx";

import PassedFirst from "./components/success/PassedFirst.jsx";
import PassedSecond from "./components/success/PassedSecond.jsx";
import PassedThird from "./components/success/PassedThird.jsx";
import Final from "./components/success/Final.jsx";

export function App() {
  const [showch, setShowch] = useState("renderStart")
  const [timeRemaining, setTimeRemaining] = useState(902000)
  const [registered, setRegistered] = useState(false)
  const [stop, setStop] = useState(false)



  switch (showch) { // Render challenges
    case "renderStart":
      return (<><Main setShowch={setShowch} /></>)

    case "renderInfo":
      return (<><Info setTimeRemaining={setTimeRemaining} setShowch={setShowch} /></>)

    case "renderFirst":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} /> <First setShowch={setShowch} /></>)

    case "nextSecond":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} /> <PassedFirst setShowch={setShowch} /></>)

    case "renderSecond":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} /> <Second setShowch={setShowch} /></>)

    case "nextThird":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} /> <PassedSecond setShowch={setShowch} /></>)

    case "renderThird":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} /> <Third setShowch={setShowch} /></>)

    case "nextForth":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} /> <PassedThird setShowch={setShowch} /></>)

    case "renderForth":
      return (<><Timer setShowch={setShowch} timeRemaining={timeRemaining} setTimeRemaining={setTimeRemaining} stop={stop} /> <Forth setShowch={setShowch} setStop={setStop} /></>)

    case "renderFinal":
      return (<Final setShowch={setShowch} registered={registered}/>)

    case "renderRegister":
      return (<><Register timeRemaining={timeRemaining} setShowch={setShowch} setRegistered={setRegistered} /></>)

    case "resetFAIL":
      return (<Reset setShowch={setShowch} />)
  }
}