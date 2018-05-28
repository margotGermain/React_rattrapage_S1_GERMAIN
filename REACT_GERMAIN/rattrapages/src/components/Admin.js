import React from "react";
import LoginPage from './LoginPage';
import GetMessage from "./GetMessage";
import axios from "axios";

import '../App.css';

const Admin = (props) => (
	<div>
	<div
		className = "AdminChanel" 
	>
		<div className = "Title">
			Chanels 
			<LoginPage/>
		</div>
	</div>
	<div className="AdminMsg">
		<div className = "Title">
			Messages
			<GetMessage/>
		</div>
	</div>
	</div>
	
)

export default Admin;
