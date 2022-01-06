import { useRef } from 'react'

export default function useHoverWatcher(
  onHover,
  { enterSkip, leaveSkip, enterTimeout, leaveTimeout, timeout = 600 } = {}
) {
  const ref = useRef()
  // const [timer, setTimer] = useState()

  function onHoverChange(hover, e) {
    clearTimeout(ref.current)
    if (enterSkip && hover) {
      onHover(hover, e)
      return
    }
    if (leaveSkip && !hover) {
      onHover(hover, e)
      return
    }
    ref.current = setTimeout(
      () => {
        onHover(hover, e)
      },
      hover ? enterTimeout || timeout : !hover ? leaveTimeout || timeout : 0
    )
  }

  return [
    {
      onMouseEnter: (e) => {
        onHoverChange(true, e)
      },
      onMouseLeave: (e) => {
        onHoverChange(false, e)
      }
    }
  ]
}
