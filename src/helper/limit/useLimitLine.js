import useLimit from './useLimit'

export default function useLimitLine(
  acceptableLine,
  { defaultShow, watcher = [], ...props } = {}
) {
  return useLimit(acceptableLine, {
    defaultShow,
    isTextLine: true,
    watcher,
    ...props
  })
}
