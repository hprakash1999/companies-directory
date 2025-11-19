import { useCallback, useEffect, useState } from "react";

/**
 * @function usePagination - Hook to handle pagination for a list of data.
 *
 * @param {array} data - The list of data to paginate.
 * @param {number} initialCount - The initial number of items to display.
 * @param {number} increment - The number of items to increment per scroll.
 *
 * - This hook is used to handle pagination for a list of data.
 * - Since it uses a scroll event, it can be used to load more data as the user scrolls down the page.
 *
 * @returns {array} - The paginated data.
 */

export const usePagination = (data, initialCount = 20, increment = 20) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [visibleData, setVisibleData] = useState(data.slice(0, initialCount));
  const [loading, setLoading] = useState(false);

  // Load more items
  const loadMore = useCallback(() => {
    if (visibleCount >= data.length) return; // No more items
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount((prev) => prev + increment);
      setLoading(false);
    }, 500);
  }, [increment, visibleCount, data.length]);

  // Update visible data when visibleCount changes
  useEffect(() => {
    setVisibleData(data.slice(0, visibleCount));
  }, [data, visibleCount]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 && !loading) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, [loadMore, loading]);

  return { visibleData, loading };
};
