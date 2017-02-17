import React, {Component} from 'react';
import {Link} from 'react-router';


class Auction extends Component{
	render(){
		console.log(this.props.item);
		var auctionItem = this.props.item;
		var auctionLink = "/auction/" + auctionItem.id; 
			return(
				<div>
					<h2><Link to={auctionLink}>{auctionItem.title}</Link></h2>
					<div className="photo_holder">
						<Link to={auctionLink}><img src={auctionItem.url} id="auction_photo"/></Link>
					</div>
					<p><Link to={auctionLink}>{auctionItem.desc}</Link></p>
				</div>
			)
	}
}

export default Auction;

//this is a presentational component (dumb) it only needs to return a virtual dom element
