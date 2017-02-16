import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar'

class Navigation extends Component{
	render(){
		return(
			<div>
				<div className="col-xs-12 container header">
					<div className="col-xs-6">
						<h1><a href="/">Traveller''s Bazaar</a></h1>
					</div>
					<div>

					<button className="btn btn-info" type="button"><a href="/login">Log In</a></button>
					<button className="btn btn-info" type="button"><a href="/register">Sign Up</a></button>
					</div>
					<div className="col-xs-6">
						<h4>Hello, {this.props.usernameToDisplay}</h4>
					</div>
					<div className="navbar col-xs-6">
						<ul><a href="#">Tapestries</a></ul>
						<ul><a href="#">Jewelery</a></ul>
						<ul><a href="#">Trinkets</a></ul>
						<ul><a href="#">Natural</a></ul>
						<ul><a href="#">Consumables</a></ul>
					</div>
				</div>
				<div className="col-xs-12 container category-header">
					<div className="col-xs-12 col-sm-6">
						<div className="dropdown">
						  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Search by Region
						  </button>
						  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a className="dropdown-item" href="#">Australia/Oceania</a>
						    <a className="dropdown-item" href="#">USA and Canada</a>
						    <a className="dropdown-item" href="#">Latin America</a>
						    <a className="dropdown-item" href="#">Asia</a>
						    <a className="dropdown-item" href="#">Europe</a>
						  </div>
						</div>
						<div className="dropdown">
						  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						    Search by Country
						  </button>
						  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						    <a className="dropdown-item" href="#">Australia/Oceania</a>
						    <a className="dropdown-item" href="#">USA and Canada</a>
						    <a className="dropdown-item" href="#">Latin America</a>
						    <a className="dropdown-item" href="#">Asia</a>
						    <a className="dropdown-item" href="#">Europe</a>
						  </div>
						</div>
					</div>
				<div className="col-xs-12 col-sm-6 search_bar">
					<form>
						<input placeholder="Search the world" value="" />
						<button type="submit" className="btn btn-primary">Go!</button>
					</form>
				</div>
			</div>
		</div>
		)
	}

};




function mapStatetoProps(state){
	return{
		usernameToDisplay: state.username
	}
}



export default Navigation;

