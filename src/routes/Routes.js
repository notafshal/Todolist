import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-Todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/loginPage/Login";
import Notfound from "../pages/notfound/Notfound";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={MainPage} exact />
        <Route path="/login" component={Login} />
        <Route path="/add" exact>
          <AddToDo />
        </Route>
        <Route path="/view/:id" component={ViewPage} exact />
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
