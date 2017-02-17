export default function (state = [], action){
	// console.log('$$$$$$$$$$$$$$$$$')
	// console.log(action.type);
	// console.log(action.payload); 
	// console.log('$$$$$$$$$$$$$$$$$');
	switch(action.type){
		case 'SUBMIT_BID':
			console.log("I'm the bid reducer!, and some action called BID");
			console.log(action.payload)
			return action.payload; 
	}
	return state; 
}