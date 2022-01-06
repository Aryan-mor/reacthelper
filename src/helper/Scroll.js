import { useEffect, useState } from 'react'
import { tryIt } from './Helper'

export const scrollTop = ({ behavior = 'smooth' } = {}) => {
  tryIt(() => {
    window.scrollTo({ top: 0, behavior: behavior })
  })
}
export const scrollToElement = (
  el,
  { behavior = 'smooth', offsetY = 10 } = {}
) => {
  tryIt(() => {
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition - offsetY

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  })
}

export const useScrollTrigger = (offset) => {
  const [y, setY] = useState()

  useEffect(() => {
    tryIt(() => setY(window.scrollY))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', (e) => setY(e.currentTarget.scrollY))
    return () => {
      window.removeEventListener('scroll', (e) => setY(e.currentTarget.scrollY))
    }
  }, [y])

  return [y > offset, y]
}
