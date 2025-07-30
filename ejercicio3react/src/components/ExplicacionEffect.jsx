import { useState, useEffect } from "react";

export default function ExplicacionEffect() {
  const [contador, setContador] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Entramos al useEffect :D"); // Abre consola, para ver cómo cambia el acceso al efecto, según las dependencias
  }, [contador, count]); // Dependencias

  return (
    <>
      <button onClick={() => setContador(contador + 1)}>Contador</button>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <p>Has dado {contador} clicks a contador</p>
      <p>Has dado {count} clicks a count</p>
    </>
  )
}
