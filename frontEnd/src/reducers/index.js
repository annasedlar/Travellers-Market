//to make a root reducer,
// 1. import combineReducers from redux
// 2. pass it an Object 
// 3. each key willl be a piece of the application's state
// 4. each value will be a single reducer

import { combineReducers } from 'redux';

// import WeatherReducer from './WeatherReducer';

// import MovieReducer from './MovieReducer';

import GetHomeReducer from './GetHomeReducer';

import RegisterReducer from './RegisterReducer';

import LoginReducer from './LoginReducer';

import GetAuctionItemReducer from './GetAuctionItemReducer';

import BidReducer from './BidReducer';

//pass into the object, each particular reducer (new files in reducers folder) 
const rootReducer = combineReducers({
	// weather: WeatherReducer,
	// movie: MovieReducer,
	//can access later on by state.home (which is equal to the return value of the GETHOMEREDUCER file/function)
	home: GetHomeReducer,
	register: RegisterReducer,
	login: LoginReducer,
	auctionItem: GetAuctionItemReducer,
	bid: BidReducer

});

export default rootReducer; 