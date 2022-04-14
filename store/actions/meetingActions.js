import axios from "axios";
import {
	FETCH_CREATER_MEET_FAIL,
	FETCH_CREATER_MEET_REQUEST,
	FETCH_CREATER_MEET_SUCCESS,
	FETCH_MEET_FAIL,
	FETCH_MEET_REQUEST,
	FETCH_MEET_SUCCESS,
	FETCH_RECIEVER_MEET_FAIL,
	FETCH_RECIEVER_MEET_REQUEST,
	FETCH_RECIEVER_MEET_SUCCESS,
	MEET_FAIL,
	MEET_REQUEST,
	MEET_SUCCESS,
} from "../constants/constants";
const API_URL = "https://vrdoor-server.herokuapp.com";

export const addMeeting = (details) => async (dispatch, getState) => {
	console.log("action");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: MEET_REQUEST });
		const { data } = axios.post(`${API_URL}/api/meet/add`, details, config);
		console.log(data);
		dispatch({ type: MEET_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: MEET_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const fetchMeetingCreated =
	(createrId) => async (dispatch, getState) => {
		try {
			// console.log(educatorInfo);
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			dispatch({ type: FETCH_CREATER_MEET_REQUEST });
			const { data } = await axios.get(
				`${API_URL}/api/meet/get/${createrId}`,
				config
			);
			// console.log(data);
			dispatch({ type: FETCH_CREATER_MEET_SUCCESS, payload: data });
		} catch (e) {
			dispatch({
				type: FETCH_CREATER_MEET_FAIL,
				payload:
					e.response && e.response.data.message
						? e.response.data.message
						: e.message,
			});
		}
	};
export const fetchMeetingRecieved =
	(recieverId) => async (dispatch, getState) => {
		try {
			// console.log(educatorInfo);
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			dispatch({ type: FETCH_RECIEVER_MEET_REQUEST });
			const { data } = await axios.get(
				`${API_URL}/api/meet/getreciever/${recieverId}`,
				config
			);
			// console.log(data);
			dispatch({ type: FETCH_RECIEVER_MEET_SUCCESS, payload: data });
		} catch (e) {
			dispatch({
				type: FETCH_RECIEVER_MEET_FAIL,
				payload:
					e.response && e.response.data.message
						? e.response.data.message
						: e.message,
			});
		}
	};
