import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispacth = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispacth(increment())}>Increment</button>
        <span
          style={{ margin: "0 10px", display: "inline-block", width: "50px" }}
        >
          {count}
        </span>
        <button onClick={() => dispacth(decrement())}>Decrement</button>
      </div>
    </>
  );
}
