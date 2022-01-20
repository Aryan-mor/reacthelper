import { useEffect, useState } from 'react'
import { useWindowSize } from './Helper'

export default function UseCheckOverflowX(
  ref,
  { wait = 300, offset = 0 } = {}
) {
  const [isOverflow, setIsOverflow] = useState(false)
  const [scrollLeft, setScrollLeft] = useState(false)
  const [scrollRight, setScrollRight] = useState(true)
  const { width } = useWindowSize(wait, false)
  useEffect(() => {
    try {
      setIsOverflow(ref.current.offsetWidth + offset < ref.current.scrollWidth)
    } catch {}
    try {
      ref.current.addEventListener('scroll', () => {
        setScrollLeft(ref.current.scrollLeft > 5)

        setScrollRight(
          !(
            ref.current.offsetWidth + ref.current.scrollLeft + 10 >=
            ref.current.scrollWidth
          )
        )
      })
    } catch (e) {}
  }, [width])
  return [isOverflow, scrollLeft, isOverflow && scrollRight]
}
