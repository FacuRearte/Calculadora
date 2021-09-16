import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/index";

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState
// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo({ mafalda }) {
  const [live, setLive] = React.useState({
    title: "",
    description: "",
    place: "",
    date: "",
  });

  const handleChange = (e) =>
    setLive({
      ...live,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    mafalda(live);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          name="title"
          value={live.title}
          onChange={(e) => handleChange(e)}
        ></input>
        <label>Description</label>
        <textarea
          name="description"
          value={live.description}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <label>Place</label>
        <input
          name="place"
          value={live.place}
          onChange={(e) => handleChange(e)}
        ></input>
        <label>Date</label>
        <input
          name="date"
          value={live.date}
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit"></button>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return { mafalda: (cb) => dispatch(addTodo(cb)) };
}

//                         primera funcion || segunda funcion
export default connect(null, mapDispatchToProps)(AddTodo);

// primer parametro de primera funcion, se trae al store.
// segundo parametros de la primera funcion, te trae a los dispatches, te los pasa como props al componente de la segunda funcion.
