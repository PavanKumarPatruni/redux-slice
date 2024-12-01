import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  counterSelector,
  decrement,
  increment,
  reset,
  switchSign,
} from "../slices/counterSlice";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(counterSelector);

  const onIncrementClick = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const onDecrementClick = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const onResetClick = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  const onSwitchTheSignClick = useCallback(() => {
    dispatch(switchSign());
  }, [dispatch]);

  return (
    <>
      <p>count is {count}</p>
      <div className="flex">
        <button onClick={onIncrementClick}>increment</button>
        <button onClick={onDecrementClick}>decrement</button>
        <button onClick={onResetClick}>reset</button>
        <button onClick={onSwitchTheSignClick}>switch the sign</button>
      </div>
    </>
  );
}

export default Counter;
