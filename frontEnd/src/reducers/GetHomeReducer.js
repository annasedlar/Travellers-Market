export default function (state = [], action){
	console.log(action.type);
	switch(action.type){
		case 'GET_HOME':
			console.log("I'm the getHomereducer, and some action called get_HOME to get me to run!");
			return action.payload; 
	}
	return state; 
}