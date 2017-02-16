import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
// import actions from redux
import GetHomeAction from '../actions/GetHomeAction';
import Auction from '../components/Auction';
import Navigation from '../Navigation';

const photoURL = 'https://s-media-cache-ak0.pinimg.com/originals/fe/8d/24/fe8d240e1c621dec4ce62bb587d7b3cf.jpg';


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
					<div class="col-xs-6"><h1>Traveller's Bazaar</h1></div>
					<div className="navbar col-xs-6">
						<ul>Tapestries</ul><ul>Jewelery</ul><ul>Trinkets</ul><ul>Natural</ul><ul>Consumables</ul>
					</div>
				</div>
				<Navigation/>
				<div className="col-xs-12 container-fluid">
					<img src={photoURL} alt="placeholder pic" id="placeholder_pic"/>
					<h1>Traveller's Bazaar is an international marketplace allowing travellers to share the
					unique treasures they collect on the road with the world</h1>
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
					<div className="col-xs-12 mores">See More</div>
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
					<div className="col-xs-12 mores">See More</div>
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
					<div className="col-xs-12 mores">See More</div>
				</div>
				<div className="col-xs-12 footer">
					<div className="col-xs-6">
						<h3>
							© Traveller's Bazaar 2017
						</h3>
					</div>
					<div className="col-xs-6">
						<h4>Made with ❤️️ by <a href="http://www.github.com/annasedlar" target="_blank">Anna Sedlar</a>
						</h4>
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




