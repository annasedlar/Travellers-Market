import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/SearchBar'

class Navigation extends Component{
	render(){
		return(
			<div className="col-xs-12 container category-header">
				<div className="navbar">Tapestries || Jewelery || Trinkets || Natural || Consumables</div>
				<div className="col-xs-12 col-sm-6 search_bar">INSERT SEARCHBAR</div>
				<div className="col-xs-12 col-sm-6 searchByCountry">Search by Region (Dropdown) || Search by Country (text) 
				</div>
			</div>
		)
	}

};

export default Navigation;
