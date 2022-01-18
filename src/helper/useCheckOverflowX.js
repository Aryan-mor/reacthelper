import { useEffect, useState } from 'react'
import { useWindowSize } from './Helper'

export default function UseCheckOverflowX(
  ref,
  { wait = 300, offset = 0 } = {}
) {
  const [isOverflow, setIsOverflow] = useState(false)
  const { width } = useWindowSize(wait, false)
  useEffect(() => {
    try {
      setIsOverflow(ref.current.offsetWidth + offset < ref.current.scrollWidth)
    } catch {}
  }, [width])
  return isOverflow
}
