// React Common Modules
import React, { Component } from 'react';
// React Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux';

// Own Modules
import { LoginPage, MainPage, MoviePage, SignUpPage } from './Pages/';

import * as AuthActionCreator from './ActionCreators/AuthActionCreator';

const mapStateToProps = state => {
	return {
		isExpired: state.authReducer.isExpired,
	};
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

	componentWillReceiveProps(nextProps) {
		// Remove Token when the token is expired.
		if (nextProps.isExpired) {
			localStorage.removeItem('token');
		}
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/">
					<IndexRoute component={MainPage}/>
				</Route>
				<Route path="/movie">
					<Route path=":movieId" component={MoviePage}/>
				</Route>
				<Route path="/signin">
					<IndexRoute component={LoginPage}/>
				</Route>
				<Route path="/signup">
					<IndexRoute component={SignUpPage}/>
				</Route>
			</Router>
		);
	}
}

export default App = connect(mapStateToProps)(App);
