import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import DetailPage from "./components/DetailPage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" render={() => <Main />} />
				<Route exact path="/detail/:user" render={() => <DetailPage />} />
			</Switch>
		</div>
	);
}

export default App;
