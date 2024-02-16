import { useContext } from "react";
import { profileContext } from "../profiler";

const A = () => {
  const { onNameChange, name } = useContext(profileContext);
  return (
    <div>
      <h1>{name}</h1>

      <input
        type="text"
        value={name}
        placeholder="a1"
        onChange={(e) => onNameChange(e.target.value)}
      />
    </div>
  );
};

export default A;
