import { useEffect, useRef, useState } from "react";

const DEFAULT_DEBOUNCE_MS = 500

export const useDebounce = (value: string, ms: number = DEFAULT_DEBOUNCE_MS ) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDebouncedValue(value)
    }, ms)

    return () => clearTimeout(timerRef.current)
  }, [value, ms])

  return debouncedValue
}