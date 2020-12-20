import { useRef, useEffect } from 'react'

type UseCallbackWithMountProps = {
  watch: any
  callback(): void
}
function useCallbackWithMount({ watch, callback }: UseCallbackWithMountProps) {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      callback()
    } else {
      didMountRef.current = true
    }
  }, [watch])
  return {}
}

export default useCallbackWithMount
