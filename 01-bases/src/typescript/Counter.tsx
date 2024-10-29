import { useCounter } from '../hooks/useCounter';

export const Counter = () => {
  const {count, increaseBy} = useCounter();
  return (
    <>
      <h3>Counter</h3>
      <p>count: {count}</p>
      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  );
};
