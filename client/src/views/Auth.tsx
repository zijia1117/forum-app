import Login from "./components/Login";
import Register from "./components/Register";

import "./../styles/Auth.css";

function Auth(props: any) {
	return props.register === true ? Register() : Login();
}

export default Auth;
