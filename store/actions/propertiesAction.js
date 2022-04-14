import axios from "axios";
import {
	ADD_PROPERTY_FAIL,
	ADD_PROPERTY_REQUEST,
	ADD_PROPERTY_SUCCESS,
	GET_PROPERTIES_FAIL,
	GET_PROPERTIES_REQUEST,
	GET_PROPERTIES_SUCCESS,
	GET_USER_PROPERTIES_REQUEST,
	GET_USER_PROPERTIES_SUCCESS,
	GET_USER_PROPERTIES_FAIL,
	DELETE_PROPERTY_REQUEST,
	DELETE_PROPERTY_SUCCESS,
	DELETE_PROPERTY_FAIL,
    UPDATE_PROPERTY_SUCCESS,
    UPDATE_PROPERTY_REQUEST,
    UPDATE_PROPERTY_FAIL,
    GET_PROPDETAILS_REQUEST,
    GET_PROPDETAILS_SUCCESS,
    GET_PROPDETAILS_FAIL,
} from "../constants/constants";
const API_URL = "https://vrdoor-server.herokuapp.com";

export const addProperty = (details) => async (dispatch, getState) => {
	console.log("action");
	try {
		// const userInfo = getState().educatorAuthReducer.educatorInfo;
		// console.log(educatorInfo);
		const config = {
			headers: {
				"Content-Type": "application/json",
				// Authorization: educatorInfo.token,
			},
		};
		dispatch({ type: ADD_PROPERTY_REQUEST });
		const { data } = axios.post(`${API_URL}/api/property/add`, details, config);
		console.log(data);
		dispatch({ type: ADD_PROPERTY_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: ADD_PROPERTY_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const fetchProperty = (category) => async (dispatch, getState) => {
	console.log("Caled");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: GET_PROPERTIES_REQUEST });
		const { data } = await axios.get(
			`${API_URL}/api/property/get/${category}`,
			config
		);
		// console.log(data);
		dispatch({ type: GET_PROPERTIES_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_PROPERTIES_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const fetchPropertyForUser = (id) => async (dispatch, getState) => {
	console.log("Caled");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: GET_USER_PROPERTIES_REQUEST });
		const { data } = await axios.get(
			`${API_URL}/api/property/getuserproperty/${id}`,
			config
		);
		// console.log(data);
		dispatch({ type: GET_USER_PROPERTIES_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_USER_PROPERTIES_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const deleteProperty = (id) => async (dispatch) => {
	console.log("Caled");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: DELETE_PROPERTY_REQUEST });
		await axios.delete(`${API_URL}/api/property/delete/${id}`, config);
		// console.log(data);
		dispatch({ type: DELETE_PROPERTY_SUCCESS });
	} catch (e) {
		dispatch({
			type: DELETE_PROPERTY_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const updateProperty = (id,details) => async (dispatch) => {
	console.log("Caled");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: UPDATE_PROPERTY_REQUEST });
		await axios.patch(`${API_URL}/api/property/update/${id}`, details,config);
		// console.log(data);
		dispatch({ type: UPDATE_PROPERTY_SUCCESS});
	} catch (e) {
		dispatch({
			type: UPDATE_PROPERTY_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};

export const fetchPropertyDetails = (id) => async (dispatch, getState) => {
	console.log("Caled");
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		dispatch({ type: GET_PROPDETAILS_REQUEST });
		const { data } = await axios.get(
			`${API_URL}/api/property/getpropertydetails/${id}`,
			config
		);
		// console.log(data);
		dispatch({ type: GET_PROPDETAILS_SUCCESS, payload: data });
	} catch (e) {
		dispatch({
			type: GET_PROPDETAILS_FAIL,
			payload:
				e.response && e.response.data.message
					? e.response.data.message
					: e.message,
		});
	}
};