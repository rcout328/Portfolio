import { createContext, useState } from "react";

const DarkmodeContext = createContext();

const DarkmodeProvider = (props) => {
  const [darkmod, setDarkmode] = useState;
  const toggleDarkmode = () => {
    setDarkmode(!darkmod);
  };
  return (
    <div>
      <DarkmodeProvider value={{ darkmod, toggleDarkmode }}>
        {props}
      </DarkmodeProvider>
    </div>
  );
};

export default { DarkmodeContext, DarkmodeProvider };
