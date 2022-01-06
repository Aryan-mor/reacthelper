import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { StringUtils } from '../utils/Utils'

// region functions
export const toNumberSafe = (x) => {
  return isNumeric(x) ? _.toNumber(x) : x
}

export const tryIt = (fun, defaultVal) => {
  try {
    return fun()
  } catch (e) {
    return _.isFunction(defaultVal) ? defaultVal() : defaultVal
  }
}

export const getSafe = (fun, defaultVal) => tryIt(fun, defaultVal)

export const isServer = () => getSafe(() => !process.browser, false)

export const isClient = () => getSafe(() => process.browser, false)

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useWindowSize(wait = 2000, useBreakpoints = true) {
  const [size, setSize] = useState(updateSize(true))

  function updateSize(returnData = false) {
    try {
      let breakpoints = {}
      const width = window.innerWidth
      tryIt(() => {
        if (useBreakpoints) {
          const isXXl = width >= 1400
          const isXl = width >= 1200 && width <= 1400
          const isLg = width >= 992 && width <= 1200
          const isMd = width >= 768 && width <= 992
          const isSm = width >= 576 && width <= 768
          const isXs = width < 576
          breakpoints = {
            isXXl,
            isXl,
            isLg,
            isMd,
            isSm,
            isXs,
            xsDown: isXs && !(isSm || isMd || isLg || isXl || isXXl),
            smDown: (isXs || isSm) && !(isMd || isLg || isXl || isXXl),
            mdDown: (isXs || isSm || isMd) && !(isLg || isXl || isXXl),
            lgDown: (isXs || isSm || isMd || isLg) && !(isXl || isXXl),
            xlDown: (isXs || isSm || isMd || isLg || isXl) && !isXXl,
            xxlDown: true,
            xxlUp: isXXl && !(isLg || isMd || isSm || isXs || isXl),
            xlUp: (isXXl || isXl) && !(isLg || isMd || isSm || isXs),
            lgUp: (isXXl || isXl || isLg) && !(isMd || isSm || isXs),
            mdUp: (isXXl || isXl || isLg || isMd) && !(isSm || isXs),
            smUp: (isXXl || isXl || isLg || isMd || isSm) && !isXs,
            xsUp: true
          }
        }
      })

      const size = {
        width,
        innerHeight: window.innerHeight,
        ...breakpoints
      }
      if (returnData) return size
      tryIt(() => setSize(size))
    } catch {
      return {
        width: 0,
        innerHeight: 0
      }
    }
  }

  function debounceUpdateSize() {
    _.debounce(function () {
      updateSize()
    }, wait)
  }

  useEffect(() => {
    window.addEventListener('resize', debounceUpdateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

// endregion functions

// region checker
export const isNumeric = (x) => {
  if (x === '') {
    return false
  }
  return (
    !isNaN(x) &&
    typeof x !== 'object' &&
    x !== Number.POSITIVE_INFINITY &&
    x !== Number.NEGATIVE_INFINITY
  )
}
export const isElement = (element) => {
  return React.isValidElement(element)
}
// endregion checker

// region string
/* eslint-disable */
String.prototype.replaceAll = function (regex, to) {
  return StringUtils.replaceAll(this, regex, to)
}
String.prototype.trimAll = function () {
  return UtilsString.trimAll(this)
}
String.prototype.replaceAt = function (index, replacement) {
  return UtilsString.replaceAt(this, index, replacement)
}
String.prototype.replaceAtTo = function (startIndex, endIndex, replacement) {
  return UtilsString.replaceAtTo(this, startIndex, endIndex, replacement)
}
String.prototype.spaceWithPattern = function (pattern) {
  return UtilsString.spaceWithPattern(this, pattern)
}
// endregion string
