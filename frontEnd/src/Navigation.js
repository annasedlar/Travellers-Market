import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar'

class Navigation extends Component{
	render(){
		return(
			<div className="col-xs-12 container category-header">
				<div className="col-xs-12 col-sm-6">
					<div class="dropdown">
					  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Search by Region
					  </button>
					  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a className="dropdown-item" href="#">Australia/Oceania</a>
					    <a className="dropdown-item" href="#">USA and Canada</a>
					    <a className="dropdown-item" href="#">Latin America</a>
					    <a classNme="dropdown-item" href="#">Asia</a>
					    <a classNme="dropdown-item" href="#">Europe</a>
					  </div>
					</div>
					<div class="dropdown">
					  <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Search by Country
					  </button>
					  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a className="dropdown-item" href="#">Australia/Oceania</a>
					    <a className="dropdown-item" href="#">USA and Canada</a>
					    <a className="dropdown-item" href="#">Latin America</a>
					    <a classNme="dropdown-item" href="#">Asia</a>
					    <a classNme="dropdown-item" href="#">Europe</a>
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
		)
	}

};

export default Navigation;

