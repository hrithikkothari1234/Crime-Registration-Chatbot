import React, { Fragment } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';

import Home from "../../components/Home/Home"
import Admin from "../../components/Admin/Admin"
import Team from "../../components/Team/Team"

const App = () => {
	return (
		<Fragment>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/team" component={Team} />
			</Switch>
		</Fragment>
	);
};

export default withRouter(App);
