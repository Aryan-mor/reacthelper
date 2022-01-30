import { useEffect, useState } from 'react'
import _ from 'lodash'

function useDetectOffline() {
  const _useState = useState(false)
  const offline = _useState[0]
  const setOffline = _useState[1]

  useEffect(() => {
    function handleConnectionStatus(status) {
      setOffline(status.type === 'offline')
    }
    if (navigator) {
      setOffline(!navigator.onLine)
    }

    _.forEach(['online', 'offline'], (status) => {
      let _window
      if (
        (_window = window) !== null &&
        _window !== 0 &&
        _window.addEventListener
      ) {
        window.addEventListener(status, handleConnectionStatus)
      }
    })

    return function () {
      _.forEach(['online', 'offline'], (status) => {
        var _window2
        if (
          (_window2 = window) !== null &&
          _window2 !== 0 &&
          _window2.addEventListener
        ) {
          window.removeEventListener(status, handleConnectionStatus)
        }
      })
    }
  }, [])

  return {
    offline: offline
  }
}

export default useDetectOffline
