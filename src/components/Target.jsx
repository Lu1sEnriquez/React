import { useState } from "react";
const Target = () => {
  let [count, setCount] = useState(0);
  let [isIncrement, setIsIncrement] = useState(true);
  let [isDecrement, setIsDecrement] = useState(!isIncrement);

  const handleDecrement = () => {
    if (isIncrement == false) {
      setIsIncrement(false);
      setIsDecrement(true);
    }
  };
  const handleIncrement = () => {
    if (isDecrement == false) {
      setIsDecrement(false);
      setIsIncrement(true);
    }
  };

  const handleCambiarValor = () => {
    if (isDecrement == true) {
      setCount(count - 1);
    } else if (isIncrement == true) {
      setCount(count + 1);
    }
  };
  return (
    <main className="targeta-main">
      <h1>CONTADOR</h1>
      <h2>{count}</h2>
      <div className="container-buttons">
        <button
          onClick={handleDecrement}
          className={`button-accion ${isDecrement ? "selected" : ""}`}
        >
          DECREMENTAR
        </button>
        <button
          onClick={handleIncrement}
          className={`button-accion ${isDecrement ? "selected" : ""}`}
        >
          INCREMENTAR
        </button>
      </div>
      <div>
        <button onClick={handleCambiarValor} className={"button-cambiarValor"}>
          CAMBIAR VALOR
        </button>
      </div>
    </main>
  );
};

export default Target;
