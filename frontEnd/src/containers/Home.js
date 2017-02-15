import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
// import actions from redux
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';

class Home extends Component{
	componentDidMount() {
		this.props.GetHomeData();
	}


	render(){
		//calls the callback on mapDispatchToProps
		// this.props.GetHomeData(); 
		// console.log(this.props.homeData); 
			var homeAuctions = [];
			this.props.homeData.map((auction, index)=>{
				homeAuctions.push(<Auction key={index} item={auction} />);
			});
			// var homeAuctionsDesc = auction.desc;
		return (
			<div>
				<h1>HOME</h1>
				<div className="auction_titles">
					// {homeAuctions}
				</div>
			</div>
		)
	}
};


function mapStateToProps(state){
	return{
		homeData: state.home
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		//this will become THIS.PROPS.GETHOMEDATA for our reducers to use as state
		GetHomeData: GetHomeAction,
		}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 