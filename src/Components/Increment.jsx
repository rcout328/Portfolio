import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/CounterSlice";

const Increment = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Increment;
