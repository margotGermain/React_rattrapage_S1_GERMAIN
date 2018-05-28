import React from "react";
import axios from "axios";


export default class GetMessage extends React.Component{
	state = {
		messages: [],
	};

	componentDidMount(){
		axios.get(`http://localhost:9000/api/margot/message`)
		.then(res => {
			console.log(res);
			this.setState({messages: res.data});
		});
	}
	render(){
		return(
			<ul> {this.state.messages.map(message => <div key = {message.id}>message :<br/>{message.description}<br/>de :{message.firstName}<br/><br/></div>)}
			</ul>);
		
	}
}
