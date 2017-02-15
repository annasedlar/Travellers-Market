import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
// import actions from redux
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';
import Navigation from '../Navigation';

const photoURL = 'http://s3.amazonaws.com/spoonflower/public/design_thumbnails/0191/1154/sultan_damask_blue_and_gold__shop_preview.png';


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
			//{homeAuctions}
		return (
			<div>
				<div className="col-xs-12 container header">
					<h1>Traveller's Bazaar</h1>
				</div>
				<Navigation/>
				<div className="col-xs-12 container-fluid">
					<h1>Traveller's Bazaar is an international marketplace allowing travellers to share the
					unique treasures they collect on the road with the world</h1>
					<img src={photoURL} alt="placeholder pic" id="placeholder_pic"/>
				</div>
				<div className="col-xs-12 container best-examples">
					<h2>See Hot Auctions</h2>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[0]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[1]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[2]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[3]}
					</div>
				</div>
				<div className="col-xs-12 container shop-by-region-examples">
					<h2>See Regional Auctions</h2>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[4]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[5]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[6]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[7]}
					</div>	
				</div>
				<div className="col-xs-12 container shop-by-category-examples">
					<h2>See Goods-Category Auctions</h2>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[8]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[9]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[10]}
					</div>
					<div className="col-xs-6 col-sm-3">
						{homeAuctions[11]}
					</div>	
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




