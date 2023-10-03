import Routes from "./routes/Routes";
import "./styles/app.css";
import { BrowserRouter, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
