
// This Page is Skeleton of React Structure for Web Development
// If you want to make other page, Copy and Refactor this page.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MainSlider, Navigation } from '../../Components';

import * as MovieActionCreator from '../../ActionCreators/MovieActionCreator';

const defaultProps = {};
const propTypes = {};

const mapStateToProps = state => {
	return {
		value: state.movieReducer.text,
		movie: state.movieReducer.movie,
	};
};

class MainPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(MovieActionCreator.getMovie());
	}
	render() {
		return (
			<div>
				<Navigation/>
				<MainSlider/>
			</div>
		);
	}
}

MainPage.defaultProps = defaultProps;
MainPage.propTypes = propTypes;

export default MainPage = connect(mapStateToProps)(MainPage);
