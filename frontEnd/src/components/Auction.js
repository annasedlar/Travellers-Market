import React, {Component} from 'react';

class Auction extends Component{
	render(){
		console.log(this.props.item);
			return(
				<div>
					<h2>{this.props.item.title}</h2>
					<img src={this.props.item.url} />
					<p>{this.props.item.desc}</p>
				</div>
			)
	}
}

export default Auction;

//this is a presentational component (dumb) it only needs to return a virtual dom element
