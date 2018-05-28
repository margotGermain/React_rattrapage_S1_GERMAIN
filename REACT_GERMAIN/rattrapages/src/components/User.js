import React from "react";
import '../App.css';
import Username from './Username';
import Form from './Form.js'

import {
  chat_post_messages_to_channel
} from "../chat/actions";


const User = (props) => (
		<div
			className = "User"
		>	
			<h1>Bienvenue utilisateur</h1>
			<div className = "Title">
				Messages 
			</div>

			<input
				onKeyPress={(e) => {
					if (e.key === "Enter") {
						props.onClickValidMessage();
					}
				}}
				style={{top: 60}}
				type="text"
				placeholder={"Entrer votre message"}
				value={props.msg}
				onChange={props.onChangeMessage}
			/>
			
			<div>
				<button onClick={props.onClickDeconnexion}>
					Deconnexion
				</button>
			</div>
		</div>
)

export default User;
