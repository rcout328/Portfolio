import { useState, useMemo } from "react";

const Mm1 = () => {
  const [color, setColor] = useState("#e74c3c");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const buttonStyle = useMemo(
    () => ({
      backgroundColor: color,
      padding: "10px",
      fontSize: "16px",
      cursor: "pointer",
    }),
    [color]
  );

  return (
    <div style={buttonStyle}>
      <button onClick={() => setColor(getRandomColor())}>Change color</button>
      <h1>{color}</h1>
    </div>
  );
};

export default Mm1;
