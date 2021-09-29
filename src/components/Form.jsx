import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {
  // Estado del todo a ingresar - input
  const [todo, setTodo] = useState({});

  // Esta es mi lista de todos
  const [todos, setTodos] = useState([
    {
      todo: "example 1",
      complete: false,
    },
  ]);

  const [editInput, setEditInput] = useState({});

  // Esto maneja el cambio del input
  const handleChange = (e) => {
    setTodo({ [e.target.name]: e.target.value });
  };

  // Esto es cuando lo agrego - o doy enter
  const handleClick = (e) => {
    // Verifico que el input no este vacio
    if (Object.keys(todo).length === 0 || todo.todo.trim() === "") {
      alert("El campo no puede estar vacio.");
      return;
    }
    setTodos([...todos, todo]);
  };

  // Elimina el todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //Modifica el ToDo

  const editTodo = (index) => {
    console.log("Edit Mode" + index);
  };

  function showInput() {
    if (editTodo) {
      <input type="text" name="edit" placeholder="Edit ToDo" />;
    }
  }
  // const editTodo = (index) => {
  //   const editedTodo = document.querySelector("#num"+index);
  //   <>
  //  <input
  //   type='text'
  //   name="edit"
  //   />
  //   </>
  //   editedTodo.innerText = "akjsdksd";
  //   console.log(editedTodo);
  // };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="todo"
          placeholder="Ingrese ToDo"
          onChange={handleChange}
        />

        <button onClick={handleClick}>Agregar</button>
      </form>

      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </>
  );
};

export default Form;
