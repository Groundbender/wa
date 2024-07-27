import { useEffect, useState } from "react";

const DEFAULT_DEBOUNCE_MS = 500

export const useDebounce = <T>(value: T, ms: number = DEFAULT_DEBOUNCE_MS ): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, ms)

    return () => clearTimeout(timerId)
  }, [value, ms])

  return debouncedValue
}