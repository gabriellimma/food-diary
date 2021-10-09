import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(1);
  const adicionarContador = () => {
    setContador(contador + 1)
  }

  return (
    <div>
      <div>contador</div>
      <div>{contador  }</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Contador