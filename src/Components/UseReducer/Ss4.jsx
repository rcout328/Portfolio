import { useReducer } from "react";

const intitalvalue = {
  state: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { state: state + 1 };
    case "decrement":
      return { state: state - 1 };

    default:
      return state;
  }
}
const Ss4 = () => {
  const [state, dispatch] = useReducer(reducer, intitalvalue);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={dispatch({ type: "increment" })}>increment</button>
      <button onClick={dispatch({ type: "decrement" })}>decrement</button>
    </div>
  );
};

export default Ss4;
