import { useEffect, useState } from "react";

/**
 * @function useDebounce - Hook to debounce a value.
 *
 * @param {any} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds.
 *
 * - This hook is used to debounce any value.
 *
 * @returns {any} - The debounced value.
 */
export const useDebounce = (value, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  // Update debounced value after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer); // cleanup on value change
  }, [value, delay]);

  return debouncedValue;
};
