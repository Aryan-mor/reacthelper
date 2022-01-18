import React, { useRef } from "react";

import { useCheckOverflowX } from "react-helper";
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
  const [isOverflow,overflowLeft,overflowRight] = useCheckOverflowX(ref,{wait:0, scrollScrollWidth:-40})

  return (
    <div>
      {
        isOverflow ?
          'overflow':
          'no Overflow'
      }
      {
        overflowLeft && "      left"
      }
      {
        overflowRight&& "    right"
      }
      <div ref={ref} style={{
        display:'flex',
        overflowX:'auto'
      }}>
        {list.map(it=>(
          <div key={it} style={{
            padding:'10px 40px'
          }}>
            {it}
          </div>
        ))}
      </div>
  </div>)
}

export default App
