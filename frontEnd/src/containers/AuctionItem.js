import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
// import actions from redux
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';
import Navigation from '../Navigation';
import GetAuctionDetail from '../actions/GetAuctionDetail';
import SubmitBidAction from '../actions/SubmitBidAction';
import $ from 'jquery';
import PaymentSuccess from './PaymentSuccess'

const photoURL = 'https://s-media-cache-ak0.pinimg.com/originals/fe/8d/24/fe8d240e1c621dec4ce62bb587d7b3cf.jpg';


class AuctionItem extends Component{
	constructor(props) {
		super(props);
		this.submitBid = this.submitBid.bind(this);
		this.makePayment = this.makePayment.bind(this); 
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
			console.log("You must log in")
			
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

	makePayment(){
		var userToken = this.props.userToken;
		console.log("test")
		var handler = window.StripeCheckout.configure({
			key: "pk_test_NwEkUquabrRIDlSKdGitMzzk",
			locale: "auto",
			token: function(stripeToken){
				console.log(stripeToken);
				var theData = {
					amount: 10 * 100,
					stripeToken: stripeToken.id,
					token: userToken
				}
				$.ajax({
					method: 'POST',
					url: "http://localhost:3000/stripe",
					data: theData
				}).done((data)=>{
					console.log(data); 
					console.log("express response ... and the response is... ")
					if(data.msg = "paymentSuccess"){
						<PaymentSuccess />
					}
				})
			}
		});
		console.log(handler); 
		handler.open({
			name: "Buy stuff from my auction site", 
			description: "Pay for your auction", 
			amount: 10 * 100, 
		})
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
					<h2>{auctionItem.title}</h2>
					<img src={auctionItem.url} id="auction_photo"/>
					<p>{auctionItem.desc}</p>
					</div>
				</div>
				<div className="col-xs-6 container best-examples">
					<div>
					<h3>Bidding starts at ${auctionItem.starting_bid}</h3>
					<p>Current Bid: ${auctionItem.current_bid}</p>
					<p>High Bidder ID: {auctionItem.high_bidder_id}</p>
					<form onSubmit={this.submitBid}>
						<label>Place a bid <input type="number" placeholder="Enter your bid"/></label>
						<button type="submit">Bid</button>
					</form>
					<label>Are you the winner of this auction? <button className="btn btn-primary pay" onClick={this.makePayment}>Pay</button></label>
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




