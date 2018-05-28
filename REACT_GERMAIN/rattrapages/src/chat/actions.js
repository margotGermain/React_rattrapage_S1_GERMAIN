import * as types from "./constantes";
import axios from "axios";


export function chat_post_messages_to_channel(payload) {
	return (dispatch, state) => {

		dispatch({
			type: types.CHAT_POST_MESSAGES_START
		});

		axios.post(
			`http://localhost:9000/api/margot/messages/`,
			{
				"firstName": payload.firstName,
				"description": payload.description

			}
		)
		.then((result) => {

			dispatch({
				type: types.CHAT_POST_MESSAGES_SUCCESS,
				payload: result.data
			});

		})
		.catch((e) => {

			dispatch({
				type: types.CHAT_POST_MESSAGES_FAIL
			});
		})

	};
};