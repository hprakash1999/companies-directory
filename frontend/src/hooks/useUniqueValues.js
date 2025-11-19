import { useMemo } from "react";

/**
 * @function useUniqueValues - Hook to get unique values from an array of objects.
 *
 * @param {array} items - The array of objects.
 * @param {string} key - The key to get the unique values from.
 *
 * - This hook filters an array of objects based on a specific key and returns an array of unique values.
 *
 * - @returns {array} - An array of unique values.
 */
export function useUniqueValues(items, key) {
  return useMemo(() => [...new Set(items.map((item) => item[key]))], [items, key]);
}
