import React from "react";
import axios from "axios";


export default class UserInput extends React.Component{
	state = {
		email: "",
		lastName: "",
		firstName: "",
	};

	handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  	}

  	handleChangeLast = event => {
    this.setState({ lastName: event.target.value });
  	}

  	handleChangeFirst = event => {
    this.setState({ firstName: event.target.value });
  	}

	handleSubmit = event => {
		event.preventDefault();

		const person = {
			email: this.state.email,
			lastName: this.state.lastName,
			firstName: this.state.firstName,
		};
		axios.post(`http://localhost:9000/api/margot/user`, {person})
		.then(res => {
			console.log(res);
		})
	}

	render(){
		return(
			<div>
	        <form onSubmit={this.handleSubmit}>
	          <label>
	            Email:
	            <input placeholder={"Entrer votre email"} 
	            	type="text"
	            	name="email" 
	            	onChange={this.handleChangeEmail} 
	            />
	          </label>
	          <label>
	            Last name:
	            <input placeholder={"Entrer votre nom"} 
	            	type="text"
	            	name="lastName" 
	            	onChange={this.handleChangeLast} 
	            />
	          </label>
	          <label>
	            First name:
	            <input placeholder={"Entrer votre prénom"} 
	            	type="text"
	            	name="firstName" 
	            	onChange={this.handleChangeFirst} 
	            />
	          </label>
	          <button type="submit">Add</button>
	        </form>
	      </div>
		)
	}

}
