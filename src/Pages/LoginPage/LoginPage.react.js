
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Input } from 'semantic-ui-react';
import { MainSlider, Navigation, SearchResultRenderer } from '../../Components';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		value: state.movieReducer.text,
		boxoffices: state.movieReducer.boxoffices,
		searchedMovies: state.movieReducer.searchedMovies,
		searchedList: state.movieReducer.searchedList,
	};
};

class LoginPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navigation/>
				<Input placeholder='Search...' />
			</div>
		);
	}
}

LoginPage.defaultProps = defaultProps;
LoginPage.propTypes = propTypes;

export default LoginPage = connect(mapStateToProps)(LoginPage);
