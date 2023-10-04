import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { useRef } from "react";
import AuthCheck from "../../middleware/AuthCheck";

const AddToDo = () => {
  const todoText = useRef();
  const history = useHistory();
  //Auth Check
  AuthCheck();
  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));
    history.push("/");
  };
  return (
    <>
      {" "}
      <NavBar />
      <div className="todo_container">
        <h1>Add ToDo's :</h1>
        <br />
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>Add</button>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
