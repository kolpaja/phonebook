import {
	Route,
	Switch,
	Redirect,
	BrowserRouter as Router,
} from "react-router-dom";
import App from "./App"
import PhoneBook from "./components/PhoneBook";

function Routing() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/phonebook" component={PhoneBook} />
			</Switch>
		</Router>
	);
}

export default Routing;
