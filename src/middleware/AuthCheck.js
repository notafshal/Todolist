import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AuthCheck = () => {
  const history = useHistory();
  if (localStorage.getItem("loggedIn")) {
  } else {
    history.replace("/login");
  }
};
export default AuthCheck;
