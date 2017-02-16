import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux'; 
import RegisterAction from '../actions/RegisterAction'

class Register extends Component{
	constructor(props){
		super(props); 
		this.state = {
			username: "",
			password: "",
			registrationResponse: ""
		}
		this.checkUsername = this.checkUsername.bind(this);
		this.checkPassword = this.checkPassword.bind(this);
		this.registrationSumbit = this.registrationSumbit.bind(this);
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

	registrationSumbit(event){
		event.preventDefault(); 
		// console.dir(event.target); 
		// event.target.children.map
		var username = event.target[0].value;
		var password = event.target[1].value; 
		console.log(username, password); 
		this.props.registerAction({
			username: username, 
			password: password
		})
	}

	render(){
		console.log(this.props.registerResponse.msg)
		if(this.props.registerResponse.msg === "username taken"){
			var message = "UserName is Taken"; 
		}else if(this.props.registerResponse.msg === "userInserted"){
			var message = "User was inserted!";
		}else{
			var message = "";
		}
		// this.props.registerResponse({message: "Test"});
		return (
			<div className="register_photo">
				<div className="register">
				<h1>Register Here: </h1>
				<h2>{message}</h2>
					<form onSubmit={this.registrationSumbit} >
						<p>Username: <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.checkUsername}/></p>
						<p>Password: <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.checkPassword} /></p>
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
		)
	}
};

function mapStatetoProps(state){
	return{
		registerResponse: state.register
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		registerAction: RegisterAction

	}, dispatch)
};

export default connect(mapStatetoProps, mapDispatchToProps)(Register); 









