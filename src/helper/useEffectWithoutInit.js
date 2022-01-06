import { useEffect } from 'react'
import useInit from './useInit'

export default function useEffectWithoutInit(callback, dependencyList) {
  const init = useInit()

  useEffect(() => {
    if (!init()) return
    callback()
  }, dependencyList)
}
