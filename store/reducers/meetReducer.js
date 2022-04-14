import { FETCH_CREATER_MEET_FAIL, FETCH_CREATER_MEET_REQUEST, FETCH_CREATER_MEET_SUCCESS, MEET_FAIL, MEET_REQUEST, MEET_SUCCESS } from "../constants/constants";

export const addMeetingReducer = (state = {}, actions) => {
	switch (actions.type) {
		case MEET_REQUEST:
			return { loading: true, error: null, success: false };
		case MEET_SUCCESS:
			return { loading: false, success: true, meetInfo: actions.payload };
		case MEET_FAIL:
			return { loading: false, error: actions.payload, success: false };
	
		default:
			return state;
	}
};

export const getCreaterMeetingReducer = (state = {}, actions) => {
	switch (actions.type) {
		case FETCH_CREATER_MEET_REQUEST:
			return { loading: true, error: null, success: false };
		case FETCH_CREATER_MEET_SUCCESS:
			return { loading: false, success: true, meetCreateData: actions.payload };
		case FETCH_CREATER_MEET_FAIL:
			return { loading: false, error: actions.payload, success: false };

		default:
			return state;
	}
};

export const getRecieverMeetingReducer = (state = {}, actions) => {
	switch (actions.type) {
		case FETCH_CREATER_MEET_REQUEST:
			return { loading: true, error: null, success: false };
		case FETCH_CREATER_MEET_SUCCESS:
			return { loading: false, success: true, meetRecievedData: actions.payload };
		case FETCH_CREATER_MEET_FAIL:
			return { loading: false, error: actions.payload, success: false };

		default:
			return state;
	}
};