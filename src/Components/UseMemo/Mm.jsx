import { useMemo, useState } from "react";

const Mm = () => {
  const [plus, setPlus] = useState(1);
  const [minus, setMinus] = useState(100);

  const multiply = useMemo(() => {
    console.log("))))))))))))");
    return plus * 12;
  }, [plus]);

  return (
    <div>
      <h1>Plus: {plus}</h1>
      <h1>Minus: {minus}</h1>
      <h1>Multiply: {multiply}</h1>
      <button onClick={() => setPlus(plus + 1)} className="pl-8">
        Plus
      </button>
      <button onClick={() => setMinus(minus - 1)} className="pl-8">
        Minus
      </button>
    </div>
  );
};

export default Mm;
