import {
	FORGOTPASS_FAIL,
	FORGOTPASS_REQUEST,
	FORGOTPASS_SUCCESS,
	RESETPASS_FAIL,
	RESETPASS_REQUEST,
	RESETPASS_SUCCESS,
	UPDATE_USER_DATA_FAIL,
	UPDATE_USER_DATA_REQUEST,
	UPDATE_USER_DATA_SUCCESS,
	USER_DATA_FAIL,
	USER_DATA_REQUEST,
	USER_DATA_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from "../constants/constants";
import axios from "axios";
const API_URL = "https://vrdoor-server.herokuapp.com";
export const userRgister = (details) => async (dispatch) => {
	console.log(details);
	try {
		dispatch({
			type: USER_REGISTER_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/users/register`,
			details,
			config
		);

		console.log(data);
		dispatch({
			type: USER_REGISTER_SUCCESS,
			// payload: data,
		});
		dispatch({
			type: USER_LOGIN_SUCCESS,
			// payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const logout = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	dispatch({
		type: USER_LOGOUT,
	});
};

export const userLogin = (details) => async (dispatch) => {
	try {
		dispatch({
			type: USER_LOGIN_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/users/login`,
			details,
			config
		);
		console.log(data);
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const fetchUserData = (id) => async (dispatch) => {
	console.log("CALLED");
	try {
		dispatch({
			type: USER_DATA_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${API_URL}/api/users/get/${id}`,

			config
		);
		console.log(data);
		dispatch({
			type: USER_DATA_SUCCESS,
			payload: data,
		});

		// localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_DATA_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const activateUser = (id) => async (dispatch) => {
	console.log("CALLED");
	try {
		dispatch({
			type: USER_DATA_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.get(
			`${API_URL}/api/users/verified/${id}`,

			config
		);
		console.log(data);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});
		dispatch({
			type: USER_LOGIN_SUCCESS,
			payload: data,
		});
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_DATA_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const forgotPass = (details) => async (dispatch) => {
	console.log("CALLED");
	try {
		dispatch({ type: FORGOTPASS_REQUEST });
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		await axios.post(`${API_URL}/api/users/forgotPassword`, details, config);
		dispatch({ type: FORGOTPASS_SUCCESS });
	} catch (error) {
		dispatch({
			type: FORGOTPASS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const resetPassword = (token, details) => async (dispatch) => {
	console.log("CALLED");
	try {
		dispatch({
			type: RESETPASS_REQUEST,
		});
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(
			`${API_URL}/api/users/resetPassword/${token}`,
			details,
			config
		);
		console.log(data);

		dispatch({
			type: RESETPASS_SUCCESS,
		});
	} catch (error) {
		dispatch({
			type: RESETPASS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateUser = (id, details) => async (dispatch) => {
	console.log("Caled");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: UPDATE_USER_DATA_REQUEST });
		const {data}=await axios.patch(`${API_URL}/api/users/update/${id}`, details, config);
		// console.log(data);
		dispatch({ type: UPDATE_USER_DATA_SUCCESS,payload:data });
	} catch (e) {
		dispatch({
			type: UPDATE_USER_DATA_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};
