import React, {Component} from 'react'; 

class Login extends Component{
	render(){
		return (
			<div>
				<form>
					<input type="text" name="username" placeholder="username" />
					<input type="password" name="password" placeholder="password" />
					<input type="submit" value="Register!" />
				</form>
			</div>
		)
	}
};

export default Login; 