import {
	ADD_PROPERTY_FAIL,
	ADD_PROPERTY_REQUEST,
	ADD_PROPERTY_SUCCESS,
	DELETE_PROPERTY_FAIL,
	DELETE_PROPERTY_REQUEST,
	DELETE_PROPERTY_SUCCESS,
	GET_PROPDETAILS_FAIL,
	GET_PROPDETAILS_REQUEST,
	GET_PROPDETAILS_SUCCESS,
	GET_PROPERTIES_FAIL,
	GET_PROPERTIES_REQUEST,
	GET_PROPERTIES_SUCCESS,
	GET_USER_PROPERTIES_FAIL,
	GET_USER_PROPERTIES_REQUEST,
	GET_USER_PROPERTIES_SUCCESS,
	UPDATE_PROPERTY_FAIL,
	UPDATE_PROPERTY_REQUEST,
	UPDATE_PROPERTY_SUCCESS,
} from "../constants/constants";

export const addPropertyReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_PROPERTY_REQUEST:
			return { loading: true, success: false, error: null };
		case ADD_PROPERTY_SUCCESS:
			return { loading: false, success: true };
		case ADD_PROPERTY_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const fetchPropertyReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PROPERTIES_REQUEST:
			return { loading: true, success: false, error: null };
		case GET_PROPERTIES_SUCCESS:
			return { loading: false, success: true, propertiesData: action.payload };
		case GET_PROPERTIES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
export const fetchUserPropertyReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_USER_PROPERTIES_REQUEST:
			return { loading: true, success: false, error: null };
		case GET_USER_PROPERTIES_SUCCESS:
			return {
				loading: false,
				success: true,
				userPropertiesData: action.payload,
			};
		case GET_USER_PROPERTIES_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const deletePropertyReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_PROPERTY_REQUEST:
			return { loading: true, success: false, error: null };
		case DELETE_PROPERTY_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case DELETE_PROPERTY_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const updatePropertyReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_PROPERTY_REQUEST:
			return { loading: true, success: false, error: null };
		case UPDATE_PROPERTY_SUCCESS:
			return {
				loading: false,
				success: true,
			};
		case UPDATE_PROPERTY_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const fetchPropertyDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PROPDETAILS_REQUEST:
			return { loading: true, success: false, error: null };
		case GET_PROPDETAILS_SUCCESS:
			return {
				loading: false,
				success: true,
				propertyDetails: action.payload,
			};
		case GET_PROPDETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
