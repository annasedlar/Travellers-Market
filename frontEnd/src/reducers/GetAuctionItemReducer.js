export default function (state = [], action){
	console.log(action.type);
	switch(action.type){
		case 'GET_AUCTION_DETAIL':
			console.log("I'm the getAuctionItem Reudcer and some action called GET_AUCTION_DETAIL to get me to run!");
			return action.payload; 
		default:
			return state; 
	}
}