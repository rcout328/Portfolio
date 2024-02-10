import { nanoid } from "nanoid";
import { useReducer, useState } from "react";

function addTodo(state, action) {
  const newTodo = {
    id: nanoid(),
    text: action.payload,
  };

  return {
    todos: [...state.todos, newTodo],
  };
}

const Ss1 = () => {
  const initialValue = {
    todos: [{ id: nanoid(), text: "Hello world" }],
  };
  const [input, setInput] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case "Add":
        return addTodo(state, action);
      case "Remove":
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => dispatch({ type: "Add", payload: input })}>
        Add todo
      </button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => dispatch({ type: "Remove", payload: todo.id })}
              className="pl-8"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ss1;
