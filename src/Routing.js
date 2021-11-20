import {
	Route,
	Switch,
	BrowserRouter as Router,
} from "react-router-dom";
import App from "./App"
import PhoneBook from "./components/PhoneBook";
import AddNewUser from "./components/PhoneBook/AddNewUser";

function Routing() {
	return (
		<Router>
			<Switch >
				<Route exact path="/" component={App} />
				<Route exact path="/phonebook" component={PhoneBook} />
				<Route exact path="/adduser" component={AddNewUser} />
			</Switch>
		</Router>
	);
}

export default Routing;
