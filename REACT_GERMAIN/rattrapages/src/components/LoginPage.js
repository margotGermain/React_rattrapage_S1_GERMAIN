import React from "react";
import axios from "axios";


export default class LoginPage extends React.Component{
	state = {
		users: [],
	};

	componentDidMount(){
		axios.get(`http://localhost:9000/api/margot/user`)
		.then(res => {
			console.log(res);
			this.setState({users: res.data});
		});
	}
	render(){
		return(
			<ul> {this.state.users.map(user => <div key = {user.id}>User :<br/>{user.lastName}<br/>{user.firstName}<br/><br/></div>)}
			</ul>);
		
	}
}
