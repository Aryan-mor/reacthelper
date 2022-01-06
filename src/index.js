import React from 'react'

// region helper

// region Helper.js
export {
  toNumberSafe,
  tryIt,
  getSafe,
  isServer,
  isClient,
  sleep,
  useWindowSize,
  isNumeric,
  isElement
} from './helper/Helper'
// endregion Helper.js

export { default as useEffectWithoutInit } from './helper/useEffectWithoutInit'
export { default as useHoverWatcher } from './helper/useHoverWatcher'
export { default as useInit } from './helper/useInit'
export { default as useOpenWithBrowserHistory } from './helper/useOpenWithBrowserHistory'

// region state
export { default as useState } from './helper/state/useState'
export { default as useBooleanState } from './helper/state/useBooleanState'
export {
  default as useStateWithCallback,
  useStateWithCallbackInstant,
  useStateWithCallbackLazy
} from './helper/state/useStateWithCallback'
// endregion state

// region limit
export { default as useLimit } from './helper/limit/useLimit'
export { default as useLimitLine } from './helper/limit/useLimitLine'
export { default as useLimitHeight } from './helper/limit/useLimitHeight'
// endregion limit

// endregion helper

// region utils

// region Utils.js
export {
  copyToClipboard,
  readFromClipboard,
  scrollTop,
  scrollToElement,
  Random,
  UtilsTime,
  UtilsObject,
  StringUtils
} from './utils/Utils'
// endregion Utils.js

// region Checker.js
export {
  checkPattern,
  checkHasErrorPatternArray,
  checkHasErrorPattern,
  checkHasErrorPatternReturnBool,
  isEmail,
  isLtr,
  isRTL
} from './utils/Checker'
// endregion Checker.js

export { Log, LError, Log as log, LError as logEr } from './utils/Log'
export { default as useInterval } from './utils/useInterval'
export { default as useIsomorphicLayoutEffect } from './utils/useIsomorphicLayoutEffect'

// endregion utils
