import { useMemo, useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const Mm2 = () => {
  // Old commented-out code
  /*
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount1(count1 - 1);
  }
  */

  const [count, dispatch] = useReducer(reducer, initialState);

  const multiply = useMemo(() => {
    console.log("Calculating multiply...");
    return count * 12;
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Old commented-out code */}
      {/* <h1>{count}</h1>
      <h2>{count1}</h2> */}

      <h1>{count}</h1>
      <h2>{multiply}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Mm2;
