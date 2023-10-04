import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthCheckBoolean = () => {
  const history = useHistory();
  let loggedIn = false;
  if (localStorage.getItem("loggedIn")) {
    loggedIn = true;
  }
  return loggedIn;
};

export default AuthCheckBoolean;
