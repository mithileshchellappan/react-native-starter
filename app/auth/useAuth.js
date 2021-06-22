import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";
export default useAuth = () => {
  const { user, setuser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const user = jwtDecode(authToken);
    setuser(user);
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setuser(null);
    authStorage.removeToken();
  };

  return { user, setuser, logOut,logIn };
};
