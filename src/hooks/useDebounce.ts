import { useEffect, useRef } from "react";

export default function useDebounce<T extends any[]>(
  callback: (...args: T) => void,
  delay: number,
) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const debouncedCallback = (...args: T) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      callbackRef.current(...args);
    }, delay);
  };
  return debouncedCallback;
}
