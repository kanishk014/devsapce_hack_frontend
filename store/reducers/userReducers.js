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

export const registerUser = (state = {}, actions) => {
	switch (actions.type) {
		case USER_REGISTER_REQUEST:
			return { loading: true, error: null, success: false };
		case USER_REGISTER_SUCCESS:
			return { loading: false, success: true, userInfo: actions.payload };
		case USER_REGISTER_FAIL:
			return { loading: false, error: actions.payload, success: false };
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
};
export const loginUser = (state = {}, actions) => {
	switch (actions.type) {
		case USER_LOGIN_REQUEST:
			return { loading: true, error: null, success: false };
		case USER_LOGIN_SUCCESS:
			return { loading: false, userInfo: actions.payload, success: true };
		case USER_LOGIN_FAIL:
			return { loading: false, error: actions.payload };
		case USER_LOGOUT:
			return {};

		default:
			return state;
	}
};

export const userDataReducer = (state = {}, actions) => {
	switch (actions.type) {
		case USER_DATA_REQUEST:
			return { loading: true, error: null };
		case USER_DATA_SUCCESS:
			return { loading: false, userData: actions.payload };
		case USER_DATA_FAIL:
			return { loading: false, error: actions.payload };

		default:
			return state;
	}
};

export const logoutUser = (state = {}, actions) => {
	switch (actions.type) {
		case USER_DATA_REQUEST:
			return { loading: true, error: null };
		case USER_DATA_SUCCESS:
			return { loading: false, userInfo: {}, error: null, success: false };
		case USER_DATA_FAIL:
			return { loading: false, error: actions.payload };

		default:
			return state;
	}
};
export const forgotPassReducer = (state = {}, actions) => {
	switch (actions.type) {
		case FORGOTPASS_REQUEST:
			return { loading: true, error: null, success: false };
		case FORGOTPASS_SUCCESS:
			return { loading: false, success: true };
		case FORGOTPASS_FAIL:
			return { loading: false, error: actions.payload };

		default:
			return state;
	}
};

export const resetPassReducer = (state = {}, actions) => {
	switch (actions.type) {
		case RESETPASS_REQUEST:
			return { loading: true, error: null, success: false };
		case RESETPASS_SUCCESS:
			return { loading: false, success: true };
		case RESETPASS_FAIL:
			return { loading: false, error: actions.payload };

		default:
			return state;
	}
};

export const updateUserReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_USER_DATA_REQUEST:
			return { loading: true, success: false, error: null };
		case UPDATE_USER_DATA_SUCCESS:
			return {
				loading: false,
				success: true,
				userInfo: action.payload,
			};
		case UPDATE_USER_DATA_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
