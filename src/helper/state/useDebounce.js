import { useEffect, useState } from 'react'
import _ from 'lodash'

export default function useDebounce(val, timeout = 500) {
  const [timer, setTimer] = useState()
  const [value, setValue] = useState(val)

  function change(val) {
    setValue(val)
  }

  useEffect(() => {
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        change(val)
      }, timeout)
    )
    return () => clearTimeout(timer)
  }, [val])

  return value
}
