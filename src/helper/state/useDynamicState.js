import { useState } from 'react'

export default function useDynamicState(defaultState, state, setState) {
  const [s, setS] = setState ? [] : useState(defaultState)
  return setState ? [state, setState] : [s, setS]
}
