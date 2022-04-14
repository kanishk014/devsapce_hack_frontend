import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAvuV0ucmW1umLc6_vFQiZoSjqwupXPoCY",
	authDomain: "vrdoor-f1a82.firebaseapp.com",
	projectId: "vrdoor-f1a82",
	storageBucket: "vrdoor-f1a82.appspot.com",
	messagingSenderId: "820641048721",
	appId: "1:820641048721:web:92afcae0f93efe0b33b730",
	measurementId: "G-GRY6HK913F",
};



const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
