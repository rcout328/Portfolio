import { useContext } from "react";
import { profileContext } from "../profiler";

const K = () => {
  const provider = useContext(profileContext);
  return (
    <div>
      <h1>{provider.name}</h1>
      <h1>{provider.city}</h1>
    </div>
  );
};

export default K;
