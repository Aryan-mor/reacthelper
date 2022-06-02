# react-helper

> React helper (Log, Helper, Listener)

[![NPM](https://img.shields.io/npm/v/react-helper.svg)](https://www.npmjs.com/package/react-helper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save npm i @aryan-mor/react-helper
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'react-helper'
import 'react-helper/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## useOpenWithBrowserHistory
state with browser history: 
```jsx
import React, { Component } from 'react'

import MyComponent from 'react-helper'
import 'react-helper/dist/index.css'

function Page{
  //handleOpen and handleClose it's direct handler
  const [open, setOpen, handleOpen, handleClose] = useOpenWithBrowserHistory("uniq-key")
  
  return (
    <div>
        // <button onClick={handleOpen}>
        <button onClick={setOpen}>
           open
        </button>
        <Popup
          open={open} 
          //onClose={()=>setOpen(false)}
          onClose={handleClose}/>
    </div>
  )
}
```



## License

MIT © [Aryan-mor](https://github.com/Aryan-mor)
