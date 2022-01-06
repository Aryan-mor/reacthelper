export const Log = (...t) => {
  if (process.env.REACT_APP_REACT_HELPER_LOGGER === 'false') return
  console.log(...t)
}

export const LError = (...t) => {
  if (process.env.REACT_APP_REACT_HELPER_LOGGER === 'false') return
  console.error(...t)
}
