import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseBy = (value: number): void => {
    // prevent negative values
    const newNumber = Math.max(count + value, 0);
    return setCount(newNumber);
  }

  // return [count, increaseBy] as const;
  return {count, increaseBy};
}
