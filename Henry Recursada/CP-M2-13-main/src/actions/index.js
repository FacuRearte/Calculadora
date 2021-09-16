// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1; // Esta es la ID que usaremos para identificar cada elemento.

export const addTodo = function (data) {
  // A esta function la vamos a utilizar para agregar Todo.
  return {
    // Recibe "data".
    type: "AddTodo", // Y retorna el tipo "AddTodo".
    payload: { ...data, id: todoId++, status: "Todo" }, // También retorna de payload o paquete de informacion, el cual crea una copia de "data", le asigna un ID que va a incrementar cada vez y el status "Todo".
  };
};

export const removeTodo = function (id) {
  // Esta funcion remueve un TodDo, recibe ID para poder identificarlo, y ningun dato más, ya que es suficiente.
  return {
    type: "RemoveTodo", // Despacha un action-type de "RemoveTodo".
    payload: id, // y pasa como información el id a remover.
  };
};

export const toInProgress = function (id) {
  // esta función solo necesita un id para identificar y cambiar el status a "InProgress".
  return {
    type: "ToInProgress", // despacha un action-type de "ToInProgress".
    payload: id, // con el paquete de información va la id, para poder identificar.
  };
};

export const toDone = function (id) {
  // Esta función va a dar por completada algún ToDo. También recibe el ID para poder identificarlo más adelante cuando se despache.
  return {
    type: "ToDone", // Esta despacha una action-type de "ToDone".
    payload: id, // Recibe solamente el ID porque solo queremos esa propiedad para poder cambiarlo a gusto, no hace falta llevar el paquete entero.
  };
};
