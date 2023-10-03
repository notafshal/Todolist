import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from "../NavBar";
import { FaEye } from "react-icons/fa";

const MainPage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />
      <div className="todo_container">
        <h3>Your Todo's:</h3>

        {getTodo.map((el, index) => (
          <>
            <div className="single_todo">
              {el}
              <Link to={`/view/${index}`}>
                <FaEye size={"20px"} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default MainPage;
