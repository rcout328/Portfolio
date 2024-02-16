import { ProfileProvider } from "../profiler";
import A from "./A";
import { useState } from "react";
const Context = () => {
  const [uName, setUName] = useState("Varun");

  return (
    <ProfileProvider
      value={{ name: uName, city: "Pune", state: "MH", onNameChange: setUName }}
    >
      <input
        type="text"
        value={uName}
        onChange={(e) => setUName(e.target.value)}
        placeholder="Enter your name"
      />
      <h1>{uName}</h1>
      <A />
    </ProfileProvider>
  );
};

export default Context;
