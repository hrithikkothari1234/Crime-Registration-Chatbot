import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Admin from "./components/Admin/admin";


const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/admin" component={Admin} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
