import { useState, useEffect } from "react"

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); //setTimeout을 없애주기 위해
    }
  }, [value, delay])

  return debounceValue
}
