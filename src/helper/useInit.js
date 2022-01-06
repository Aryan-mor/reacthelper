import React, { useEffect, useRef } from 'react'
import _ from 'lodash'
import { getSafe } from './Helper'

export default function () {
  const ref = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      ref.current = true
    }, 100)
  }, [])

  return () => getSafe(() => _.cloneDeep(ref.current), false)
}
