
import React from 'react';
import Username from './Username.js';


const Form = (props) => {
	const styleChild = {
		position: "absolute",
		top: "20%",
		width: "50%",
		transform: "translateX(50%)"
	}
	return (
		<div
			style={
				 {
				 	height: 150,
				 	width: "100%",
				 	position: "relative",
				 	backgroundColor: "transparent"
				 }
			 }
		>
			{
				!props.userValid ?
					<div style={styleChild}>
						<div>
						<input
							placeholder={"Entrer votre prénom"}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValidAdmin();
								}
							}}
							type="text"
							value={props.firstname}
							onChange={props.onChangeFirstName}
							
						/>
						</div>
						<div>
						<input
								placeholder={"Entrer votre nom"}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onChangeValidAdmin();
								}
							}}
							type="text"
							value={props.lastname}
							onChange={props.onChangeLastName}
							
						/>
						</div>
						<div>
						<input
							placeholder={"Entrer votre email"}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									props.onClickValisUser();
								}
							}}
							type="text"
							value={props.email}
							onChange={props.onChangeEmail}
						/>
						</div>
						<div
							style={{
								position: "absolute",
								right: 356,
								top:90,
							}}
						>
						<button
							style={{
								position: "absolute",
								right: 85,
							}}
							onClick={props.onClickValid}
						>
							Valider
						</button>
						</div>
					</div>
				:
					null
			}
		</div>
		
	);
}

export default Form;
