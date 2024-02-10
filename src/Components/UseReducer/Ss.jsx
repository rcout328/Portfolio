import { useReducer } from "react";

const initialArg = 0;

function reducer(state, action) {
  switch (
    action.type // Fix: Use action.type
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const Ss = () => {
  const [count, dispatch] = useReducer(reducer, initialArg);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>{" "}
      {/* Fix: Change "Increment" to "Decrement" */}
    </div>
  );
};

export default Ss;
