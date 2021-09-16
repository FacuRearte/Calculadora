import React from "react";
import "./App.css";
import { Route } from "react-router-dom"; /* Importamos el Route para poder routear los componentes */
import Nav from "./components/Nav/Nav"; /* Importamos todos los componentes que necesitemos */
import Home from "./components/Home/Home"; /* Importamos todos los componentes que necesitemos */
import AddTodo from "./components/AddTodo/AddTodo"; /* Importamos todos los componentes que necesitemos */

// En este componente deberias cargar tus rutas.
export function App() {
  return (
    <div className="App">
      {" "}
      {/* Vamos a meter todo dentro de un mismo bloque */}
      <Route path="/" component={Nav} />{" "}
      {/* Routeamos el componente Nav con mayúscula y le ponemos el path */}
      <Route exact path="/" component={Home} />{" "}
      {/* Routeamos el Home y ponemos el exact path */}
      <Route exact path="/add" component={AddTodo} />{" "}
      {/* Routeamos AddTodo y agregamos el exact path */}
    </div>
  );
}

export default App;
