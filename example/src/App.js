import React from "react";

import { useHoverWatcher, useOpenWithBrowserHistory } from "react-helper";
import "react-helper/dist/index.css";

const App = () => {
  const [open,setOpen] = useOpenWithBrowserHistory('test')
  const [hoverProps] = useHoverWatcher((hover)=>{
    console.log("sakfjkasjfkja",hover)
  })

  return (
    <div>
      <button onClick={()=>{
        setOpen(!open)
      }}>
        open
      </button>
      <div
        {...hoverProps}
        style={{
        padding:'60px',
        margin:60,
        border:open ? '15px solid red':undefined,
        cursor:'pointer'
      }}>
        ssssssssssss
      </div>
  </div>)
}

export default App
