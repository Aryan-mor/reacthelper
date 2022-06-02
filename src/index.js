export { default as useEffectWithoutInit } from './helper/useEffectWithoutInit'
export { default as useHoverWatcher } from './helper/useHoverWatcher'
export { default as useInit } from './helper/useInit'
export { default as useOpenWithBrowserHistory } from './helper/useOpenWithBrowserHistory'
export { Log, LError, Log as log, LError as logEr } from './helper/Log'
export { default as useInterval } from './helper/useInterval'
export { default as useIsomorphicLayoutEffect } from './helper/useIsomorphicLayoutEffect'
export { default as useDetectOffline } from './helper/useDetectOffline'
export { scrollTop, scrollToElement, useScrollTrigger } from './helper/Scroll'
export { default as useCheckOverflowX } from './helper/useCheckOverflowX'

// region Helper.js
export {
  toNumberSafe,
  toArray,
  tryIt,
  getSafe,
  isServer,
  isClient,
  sleep,
  useWindowSize,
  autoReadSMS,
  getScrollbarWidth,
  isNumeric,
  isElement,
  copyToClipboard,
  readFromClipboard,
  Random,
  UtilsTime,
  UtilsObject,
  StringUtils
} from './helper/Helper'
// endregion Helper.js

// region state
export { default as useState } from './helper/state/useState'
export { default as useBooleanState } from './helper/state/useBooleanState'
export { default as useDebounce } from './helper/state/useDebounce'
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

// region Checker.js
export {
  checkPattern,
  checkHasErrorPatternArray,
  checkHasErrorPattern,
  checkHasErrorPatternReturnBool,
  isEmail,
  isLtr,
  isRTL
} from './helper/Checker'
// endregion Checker.js
