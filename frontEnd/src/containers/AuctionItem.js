import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
// import actions from redux
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';
import Navigation from '../Navigation';
import GetAuctionDetail from '../actions/GetAuctionDetail';
import SubmitBidAction from '../actions/SubmitBidAction';

const photoURL = 'https://s-media-cache-ak0.pinimg.com/originals/fe/8d/24/fe8d240e1c621dec4ce62bb587d7b3cf.jpg';


class AuctionItem extends Component{
	constructor(props) {
		super(props);
		this.submitBid = this.submitBid.bind(this); 
	}
	componentDidMount() {
			//we have access to params thx to router
		var auctionId = this.props.params.auctionId; 
		this.props.getThisAuction(auctionId);
	}

	submitBid(event){
		event.preventDefault(); 
		var userToken = this.props.userToken;
		if(userToken === undefined){
			// route user to the login
		}else{
			console.dir(event); 
			var bidAmount = event.target[0].value;
			var auctionItem = this.props.auctionItemDetail[0];
			if(auctionItem.current_bid === "No Bids Yet"){
				auctionItem.current_bid = auctionItem.starting_bid - 0.1;
			}
			if(bidAmount < auctionItem.current_bid){
				console.log("Bid too low")
			}else{
				console.log("Submit to express")
				this.props.submitBidToExpress(bidAmount, auctionItem.id, userToken)
			}
		}
	}

	render(){
		//calls the callback on mapDispatchToProps
		// this.props.GetHomeData(); 
		// console.log(this.props.homeData); 
			var homeAuctions = [];
			if(this.props.auctionItemDetail.length === 0){
				return(<h1>Loading auction...</h1>)
			}
			var auctionItem = this.props.auctionItemDetail[0];
			console.log(auctionItem); 

			if(auctionItem.current_bid === null){
				auctionItem.current_bid = "No Bids Yet"
			}
		return (
			<div>
				<Navigation/>
				<div className="col-xs-6 container best-examples">
				<div>
					<h4>This is what you clicked on:</h4>
					<h2>{auctionItem.title}</h2>
					<img src={auctionItem.url} id="auction_photo"/>
					<h3>this is where a picture will go</h3> 
					<p>{auctionItem.desc}</p>
					</div>
				</div>
				<div className="col-xs-6 container best-examples">
					<div>
					<p>Current Bid: {auctionItem.current_bid}</p>
					<p>High Bidder: {auctionItem.high_bidder_id}</p>
					<p>Starting Bid: {auctionItem.starting_bid}</p>
					<form onSubmit={this.submitBid}>
						<input type="number" placeholder="Enter your bid"/>
						<button type="submit">Bid</button>
					</form>
				</div>
				</div>
			</div>
		)
	}
};


function mapStateToProps(state){
	return{
		auctionItemDetail: state.auctionItem,
		userToken: state.login.token
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		//this will become THIS.PROPS.GETHOMEDATA for our reducers to use as state
		getThisAuction: GetAuctionDetail,
		submitBidToExpress: SubmitBidAction
		}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuctionItem); 



