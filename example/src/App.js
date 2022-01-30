import React, { useRef } from "react";

import { useCheckOverflowX, useDetectOffline } from "react-helper";
import "react-helper/dist/index.css";

const list = [
  "safasf",
  "safkksaj",
  "askfjkajskjkasjf",
  "askfj saljfk ajs",
  "aksjfkaskf",
  "asfjkasjk",
  "skafjkjaskjf",
  "sakfjkjaskf",
  "askfjksja",
  "ajwkfamsfejr",
  "klsjavmwpji2"
]

const App = () => {
  const ref = useRef()
  const {offline} = useDetectOffline()
  const [isOverflow,overflowLeft,overflowRight] = useCheckOverflowX(ref,{wait:0, scrollScrollWidth:-40})

  return (
    <div>
      {offline ? 'offline':'online '}
  </div>)
}

export default App
