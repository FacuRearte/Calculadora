import React from "react";
import { connect } from "react-redux";
import { Todo } from "../Todo/Todo";
import { Link } from "react-router-dom";

export function Todos(props) {
  return (
    <div>
      {props.state.map((index) => (
        <Link to={`/edit/${index.id}`}>
          <div>
            {" "}
            {/* Cuando clickees el contenedor entero te va a redirigir a la caja entera*/}
            <Todo title={index.title} status={index.status}/>
          </div>
        </Link>
      ))}
      <span>{props.status}</span>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default connect(mapStateToProps)(Todos);
