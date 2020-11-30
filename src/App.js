import React from "react";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Hi from "./components/hi/hi";


const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/hi" component={Hi} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
