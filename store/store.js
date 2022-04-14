import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
	fetchPropertyReducer,
	addPropertyReducer,
	fetchUserPropertyReducer,
	deletePropertyReducer,
	updatePropertyReducer,
    fetchPropertyDetailsReducer,
} from "./reducers/propertiesReducer";
import {
    forgotPassReducer,
	loginUser,
	logoutUser,
	registerUser,
	resetPassReducer,
	updateUserReducer,
	userDataReducer,
} from "./reducers/userReducers";
import { addMeetingReducer, getCreaterMeetingReducer, getRecieverMeetingReducer } from "./reducers/meetReducer";

const userInfofromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;
const middleware = [thunk];

const initialState = {
	loginUser: {
		userInfo: userInfofromStorage,
	},
};
const reducers = combineReducers({
	fetchPropertyReducer: fetchPropertyReducer,
	addPropertyReducer: addPropertyReducer,
	registerUser: registerUser,
	loginUser: loginUser,
	userDataReducer: userDataReducer,
	fetchUserPropertyReducer: fetchUserPropertyReducer,
	logoutUser: logoutUser,
	deletePropertyReducer: deletePropertyReducer,
	updatePropertyReducer: updatePropertyReducer,
	forgotPassReducer: forgotPassReducer,
	fetchPropertyDetailsReducer: fetchPropertyDetailsReducer,
	resetPassReducer: resetPassReducer,
	addMeetingReducer: addMeetingReducer,
	getRecieverMeetingReducer: getRecieverMeetingReducer,
	getCreaterMeetingReducer: getCreaterMeetingReducer,
	updateUserReducer: updateUserReducer,
});

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store