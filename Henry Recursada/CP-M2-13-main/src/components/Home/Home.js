import React from "react";
import Todos from "../Todos/Todos"; /* Nos traemos los Todos para poder usarlos como etiquetas HTML */

export function Home() {
  /* Exportamos el componente para poder usarlo como HomePage */
  return (
    <div>
      {/* Envolvemos todo dentro de un mismo bloque que retornaremos */}
      <Todos status="Todo" />{" "}
      {/* Traemos una etiqueta Todos y le pasamos como prop status con valor de "Todo" */}
      <Todos status="InProgress" />{" "}
      {/* Traemos una etiqueta Todos con el prop status en "InProgress" */}
      <Todos status="Done" />
      {/* Traemos la etiqueta Todos con la prop status en "Done" */}
    </div>
  );
}

export default Home; /* Lo exportamos por defecto para usarlo como parte de otro componente. */
