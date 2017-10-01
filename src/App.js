// React Common Modules
import React, { Component } from 'react';
// React Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

// Own Modules
import { LoginPage, MainPage } from './Pages/';

import * as AuthActionCreator from './ActionCreators/AuthActionCreator';

const mapStateToProps = () => {
	return {};
};

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const token = localStorage.getItem('token');
		if (token) {
			this.props.dispatch(AuthActionCreator.auth(token));
		}
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={MainPage}/>
				</Route>
				<Route path="/signin">
					<IndexRoute component={LoginPage}/>
				</Route>
			</Router>
		);
	}
}

export default App = connect(mapStateToProps)(App);
