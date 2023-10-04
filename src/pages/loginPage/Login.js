import {
  Link,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            <center>
              You are already Logged in! <br />
              <button
                onClick={() => {
                  localStorage.removeItem("loggedIn");
                  history.push("/");
                }}
                style={{ background: "red", cursor: "pointer" }}
              >
                Logout
              </button>
            </center>
          </>
        ) : (
          <>
            {" "}
            <h2>Welcome to To-Do list</h2>
            <br />
            <Link to="/login/showInfo">
              <h3>Show Information </h3>
            </Link>{" "}
            <br />
            <button
              onClick={() => {
                alert("You are Logged In");
                history.replace("/");
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
          </>
        )}
      </div>
    </>
  );
};
export default Login;
