import React, {Component} from 'react';

class Auction extends Component{
	render(){
		console.log(this.props.item);
			return(
				<div>
					<h1>An Auction</h1>
					<div className="Title">
						<p>Auction info should go here...</p>
					</div>
				</div>
			)
	}
}

export default Auction;

//this is a presentational compoent (dumb) it only needs to return a virtual dom element
