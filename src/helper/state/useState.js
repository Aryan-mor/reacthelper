import { useCallback, useState as useSt } from 'react'
import _ from 'lodash'

export default function useState(initialState, { validator = undefined } = {}) {
  const [val, setVal] = useSt(initialState)

  const handleChange = useCallback(
    (value) => {
      try {
        if (_.isEqual(value, val)) return
      } catch (e) {}
      if (_.isFunction(validator)) {
        const result = validator(value, setVal)
        if (_.isBoolean(result) && result) {
          setVal(value)
        }
        return
      }
      setVal(value)
    },
    [val, setVal]
  )

  const clearState = useCallback(() => {
    setVal(undefined)
  }, [setVal])

  return [val, handleChange, clearState]
}
