import { useCallback } from 'react'
import useState from './useState'

export default function useBooleanState(
  initialState,
  { validator = undefined } = {}
) {
  const [val, setVal] = useState(initialState, { validator })

  const handleChange = useCallback(
    (value) => {
      setVal(Boolean(value))
    },
    [val, setVal]
  )

  const setTrue = useCallback(() => {
    setVal(true)
  }, [setVal])

  const setFalse = useCallback(() => {
    setVal(false)
  }, [setVal])

  return [val, handleChange, setTrue, setFalse]
}
