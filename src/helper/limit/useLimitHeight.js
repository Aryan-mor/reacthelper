import useLimit from './useLimit'

export default function useLimitHeight(
  acceptableHeight,
  { defaultShow, watcher = [], ...props } = {}
) {
  return useLimit(acceptableHeight, {
    defaultShow,
    isTextLine: false,
    watcher,
    ...props
  })
}
