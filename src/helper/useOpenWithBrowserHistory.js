import { useCallback, useEffect, useState } from 'react'
import _ from 'lodash'
import { getSafe, tryIt } from './Helper'

const listOfListener = {}

function onPopState(event) {
  _.forEach(listOfListener, (l) => {
    tryIt(() => l(event))
  })
}

const buttonDelay = 1000

export default function useOpenWithBrowserHistory(uniq, defaultValue) {
  const [openDelay, setOpenDelay] = useState(false)
  const [closeDelay, setCloseDelay] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!listOfListener[uniq]) {
      listOfListener[uniq] = function (event) {
        const state = event.state
        const data = getSafe(() => state[uniq], undefined)
        if (!state || data !== true) {
          setOpen(false)
          return
        }
        if (data === true) {
          setOpen(true)
        }
      }
    }
    window.onpopstate = onPopState
    if (defaultValue) {
      handleOpenClick()
    }

    return () => {
      tryIt(() => {
        delete listOfListener[uniq]
      })
    }
  }, [])

  const handleOpenClick = () => {
    if (openDelay === true) return
    setOpenDelay(true)

    const data = {}
    data[uniq] = true
    // eslint-disable-next-line no-undef
    history.pushState(data, null, location.href)
    setOpen(true)

    setTimeout(() => {
      setOpenDelay(false)
    }, buttonDelay)
  }

  const handleCloseClick = () => {
    if (closeDelay === true) return
    setCloseDelay(true)

    window.history.back()
    setTimeout(() => {
      setCloseDelay(false)
    }, buttonDelay)
  }

  const handleSetOpen = useCallback((open) => {
    if (open) {
      handleOpenClick()
      return
    }
    handleCloseClick()
  }, [])

  return [open, handleSetOpen, handleOpenClick, handleCloseClick]
}
