import React, {Component} from 'react';

class Auction extends Component{
	render(){
		console.log(this.props.item);
			return(
				<div>
					<h2>{this.props.item.title}</h2>
					<div className="photo_holder">
						<img src={this.props.item.url} id="auction_photo"/>
					</div>
					<p>{this.props.item.desc}</p>
				</div>
			)
	}
}

export default Auction;

//this is a presentational component (dumb) it only needs to return a virtual dom element
