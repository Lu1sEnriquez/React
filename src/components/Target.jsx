import { useState } from "react";
const Target = () => {
  let [count, setCount] = useState(0);
  let [isIncrement, setIsIncrement] = useState(true);
  
  const handleIncrement = () => {
    setIsIncrement(true)  
  };
  const handleDecrement = () => {
    setIsIncrement(false)  
  };

  const handleCambiarValor = () => {
    if (isIncrement== false) {
      setCount(count - 1);
    } else if (isIncrement == true) {
      setCount(count + 1);
    }
  };
  return (
    <main className="targeta-main">
      <h1>CONTADOR</h1>
      <div className="container-count">
      <h2>{count}</h2>
      </div>
      <div className="container-buttons">
        <button
          onClick={handleDecrement}
          className={`button-accion ${isIncrement==false?'selected':console.log(isIncrement)}`}
        >
          DECREMENTAR
        </button>
        <button
          onClick={handleIncrement}
          className={`button-accion ${isIncrement == true? "selected" : ""}`}
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
