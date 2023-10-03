import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { FaEye } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <h2>Welcome to To-Do list</h2>
        <br />
        <Link to="/login/showInfo">
          <h3>ShowInfo </h3>
        </Link>{" "}
        <br />
        <button
          onClick={() => {
            localStorage.setItem("loggedIn", true);
          }}
        >
          Login!!
        </button>
        <Route path="/login/showInfo">
          <div>
            <br /> <br />
            This is Dummy Login!!!
            <br /> This Project is Created By Afshal Maharjan
          </div>
        </Route>
      </div>
    </>
  );
};
export default Login;
