import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.render()}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
