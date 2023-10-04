import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import AuthCheckBoolean from "../../middleware/AuthCheckBoolean";
import NavBar from "../NavBar";

const ViewPage = () => {
  const history = useHistory();
  const getParams = useParams();
  const getID = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getData = getStorage[getID];

  //Query Parse...
  // const getLocation = useLocation();
  // const getURLParams = new URLSearchParams(getLocation.search);
  // const getID = getURLParams.get("id");

  const deleteTodo = () => {
    getStorage.splice(getID, 1);

    localStorage.setItem("todo", JSON.stringify(getStorage));
    history.replace("/");
  };
  return (
    <>
      <NavBar />
      <div className="todo_container">
        <button
          onClick={() => {
            history.push("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go back
        </button>
        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "25px",
          }}
        >
          {getData}
        </div>
      </div>
      <div>
        {AuthCheckBoolean() ? (
          <>
            {" "}
            <button style={{ background: "red" }} onClick={deleteTodo}>
              Delete
            </button>
          </>
        ) : (
          <>
            Loggin to delete the updated Todo
            <p>
              <Link to="/login">Login</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};
export default ViewPage;
