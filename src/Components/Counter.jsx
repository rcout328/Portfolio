import { useReducer } from "react";

const initialArg = 0;

function reducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
  }
}
const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialArg);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={dispatch({ type: "increment" })}>Increment</button>
      <button onClick={dispatch({ type: "decrement" })}>Increment</button>
    </div>
  );
};

export default Counter;
