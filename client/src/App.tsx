import {
	NavLink,
	Switch,
	Route,
	BrowserRouter as Router,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./views/Auth";
import Home from "./views/Home";
import NewQuestion from "./views/NewQuestion";
import { QuestionDetail } from "./views/QuestionDetail";
import Profile from "./views/Profile";

function App() {
	return (
		<div className="App">
			<Router basename="/">
				<header className="App-header">
					<img src={logo} className="spinning-logo" alt="logo" />

					<div className="nav-links">
						<NavLink exact activeClassName="router-link-active" to="/">
							Home
						</NavLink>
						{/* <NavLink
							exact
							activeClassName="router-link-active"
							to="/questions/:id">
							Question
						</NavLink> */}
						<NavLink activeClassName="router-link-active" to="/questions/new">
							New Question
						</NavLink>
						<NavLink activeClassName="router-link-active" to="/login">
							Login
						</NavLink>
						<NavLink activeClassName="router-link-active" to="/register">
							Register
						</NavLink>
						<NavLink activeClassName="router-link-active" to="/profile">
							Profile
						</NavLink>
					</div>
				</header>

				<div className="router-view">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/questions/new">
							<NewQuestion />
						</Route>
						<Route exact path="/questions/:id">
							<QuestionDetail />
						</Route>
						<Route exact path="/login">
							<Auth />
						</Route>
						<Route exact path="/register">
							<Auth register={true} />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
