import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-Todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/loginPage/Login";

const Routes = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={MainPage} exact />
      <Route path="/login" component={Login} />
      <Route path="/add" exact>
        {localStorage.getItem("loggedIn") ? (
          <>
            <AddToDo />
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Route>
      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};
export default Routes;
