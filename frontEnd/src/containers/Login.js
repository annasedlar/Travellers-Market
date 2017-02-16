import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
import LoginAction from '../actions/LoginAction';
import {browserHistory} from 'react-router';
import Navigation from '../Navigation';

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			LoginResponse: "",
			username: "",
			password: ""
		}	
		this.loginSubmit = this.loginSubmit.bind(this); 
		this.checkUsername = this.checkUsername.bind(this); 
		this.checkPassword= this.checkPassword.bind(this); 
	}

	checkUsername(event){
		event.preventDefault(); 
		this.setState({
			username: event.target.value
		})
		console.log(event.target.value);
	}

	checkPassword(event){
		event.preventDefault();
		this.setState({
			password: event.target.value
		})
		console.log(event.target.value); 
	}

	loginSubmit(event){
		event.preventDefault();
		var username = event.target[0].value;
		var password = event.target[1].value; 
		this.props.LoginAction({
			username: username, 
			password: password
		});
	}

	render(){
		console.log(this.props.LoginResponse)

		if(this.props.LoginResponse.msg === "bad username"){
			var message = "That username does not exist";
		}else if(this.props.LoginResponse.msg === "bad password"){
			var message = 'That password does not match what we have on file!';
		}else if(this.props.LoginResponse.msg === "found user"){
			browserHistory.push('/');
		}else{
			var message = "";
		}

		return (
			<div>
				<Navigation/>
			<div className="register_photo">
				<div className="register">
				<h1>Login: </h1>
				<h3>{message}</h3>
					<form onSubmit={this.loginSubmit} >
						<p>Username: <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.checkUsername}/></p>
						<p>Password: <input type="password" name="password"  value={this.state.password} placeholder="password" onChange={this.checkPassword}/></p>
						<input type="submit" value="Submit"/>
					</form>
				</div>
				<div className="col-xs-12 register_footer">
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
		</div>
		)
	}
};


function mapStatetoProps(state){
	return{
		LoginResponse: state.login
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		LoginAction: LoginAction

	}, dispatch)
};

export default connect(mapStatetoProps, mapDispatchToProps)(Login); 