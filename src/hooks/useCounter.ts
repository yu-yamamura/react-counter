import { useCallback, useEffect, useState } from "react";

export const useCounter = (
  max: number
): {
  count: number;
  increment: () => void;
  reset: () => void;
} => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((previousCount) => previousCount + 1);
  const reset = useCallback(() => setCount(0), []);

  useEffect(() => {
    if (count > max) reset();
  }, [count, max, reset]);

  return { count, increment, reset };
};
