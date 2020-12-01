import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Admin from "./components/Admin/admin";
import Team from "./components/Team/Team";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/team" component={Team} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
