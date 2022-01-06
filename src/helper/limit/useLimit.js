import { useEffect, useRef } from 'react'
import useState from '../state/useState'
import { useStateWithCallbackLazy } from '../state/useStateWithCallback'
import useEffectWithoutInit from '../useEffectWithoutInit'
import { getSafe, useWindowSize } from '../Helper'
import _ from 'lodash'

export default function useLimit(
  acceptableHeight,
  { defaultShow, isTextLine = false, watcher = [] } = {}
) {
  const [lineHeight, setLineHeight] = useState(undefined)

  const [width] = useWindowSize()
  const ref = useRef()
  const [show, setShow] = useStateWithCallbackLazy(true)
  const [canHide, setCanHide] = useState(true)
  const [firstHeight, setFirstHeight] = useStateWithCallbackLazy()

  useEffect(() => {
    setTimeout(() => {
      checker(defaultShow)
    }, 500)
  }, [])

  useEffectWithoutInit(() => {
    checker()
  }, [acceptableHeight])

  useEffectWithoutInit(() => {
    setFirstHeight(undefined, () => {
      if (show) {
        checker(defaultShow)
        return
      }
      setShow(true, () => {
        checker(defaultShow)
      })
    })
  }, [width, ...watcher])

  function checker(defaultShow) {
    tryIt(() => {
      const el = ref.current
      let fHeight = firstHeight
      if (!fHeight) {
        fHeight = el.offsetHeight
        setFirstHeight(Math.ceil(fHeight))
      }

      const offsetHeight = getSafe(() => {
        if (!isTextLine) {
          return fHeight
        }
        const { lines, lineHeight } = countLines(el)
        setLineHeight(lineHeight)
        return lines
      })

      if (_.isBoolean(defaultShow) && defaultShow === true) {
        setShow(defaultShow)
      }

      if (offsetHeight <= acceptableHeight) {
        setCanHide(false)
        setShow(true)
      } else {
        setCanHide(true)
        setShow(false)
      }
    })
  }

  function handleShowChange(show) {
    if (!canHide) {
      setShow(true)
      return
    }
    setShow(show)
  }

  return [
    ref,
    show,
    handleShowChange,
    { maxHeight: firstHeight, lineHeight, canHide }
  ]
}
/* eslint-disable */
function countLines(target) {
  const style = window.getComputedStyle(target, null)
  let height = parseInt(style.getPropertyValue('height'))
  const font_size = parseInt(style.getPropertyValue('font-size'))
  let line_height = parseInt(style.getPropertyValue('line-height'))
  const box_sizing = style.getPropertyValue('box-sizing')

  if (isNaN(line_height)) line_height = font_size * 1.2

  if (box_sizing === 'border-box') {
    const padding_top = parseInt(style.getPropertyValue('padding-top'))
    const padding_bottom = parseInt(style.getPropertyValue('padding-bottom'))
    const border_top = parseInt(style.getPropertyValue('border-top-width'))
    const border_bottom = parseInt(
      style.getPropertyValue('border-bottom-width')
    )
    height = height - padding_top - padding_bottom - border_top - border_bottom
  }

  const lines = Math.ceil(height / line_height) - 1
  return {
    lines: lines,
    lineHeight: line_height,
    height: Math.round(line_height * lines)
  }
}
