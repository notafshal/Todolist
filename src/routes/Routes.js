import { Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-Todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";

const Routes = () => {
  return (
    <>
      <Route path="/" component={MainPage} exact />
      <Route path="/add" component={AddToDo} exact />
      <Route path="/view/:id" component={ViewPage} exact />
    </>
  );
};
export default Routes;
