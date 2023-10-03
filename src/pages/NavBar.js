import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        Kagura's ToDoList
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/add">
            <div>Add ToDo</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
