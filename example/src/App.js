import React, { useRef, useState } from "react";

import { useDebounce } from "react-helper";
import { value } from "lodash/seq";


const App = () => {

  const [state,setState] = useState()
  const value  = useDebounce(state,3000)

  return (
    <div>
      <input
      value={state}
      onChange={e=>setState(e.target.value)}
      />
      <br/>
      <br/>
      state:{state}
      <br/>
      <br/>
      value: {value}
  </div>)
}

export default App
