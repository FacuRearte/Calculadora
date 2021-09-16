const initialState = []; /* Este es nuestro estado inicial y lo inicializamos en una lista vacía */

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {
  /* Este es nuestro reducer el cual recibe dos parámetros, el estado inicial y la action */
  switch (action.type) {
    case "AddTodo":
      // return [
      //   ...state,
      //   {
      //     title: action.payload.title,
      //     description: action.payload.description,
      //     place: action.payload.place,
      //     date: action.payload.date,
      //     id: action.payload.id,
      //     status: action.payload.status,
      //   },
      // ];
      return (state = [...state, action.payload]);

    case "RemoveTodo":
      return state.filter((el) => el.id !== action.payload);
    // return state.filter(el => el.id === action.payload.id);
    case "ToInProgress":
      return state = state.map((el) => el.id === action.payload ? {...el, status:'InProgress'} : el);
    case "ToDone":
      return state = state.map((el) => el.id === action.payload ? {...el, status:'Done'} : el);
    default:
      return state;
  }
};

export default todos;
