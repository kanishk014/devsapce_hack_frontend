import React, { useState, useEffect } from "react";
import ProgressComponent from "@material-ui/core/CircularProgress";
import { useNavigate } from "react-router-dom";
function JitsiMeetComponent() {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const containerStyle = {
		width: "100vw",
		height: "100vh",
		padding: 0,
		margin: 0,
		backgroundColor: "#333",
	};

	const jitsiContainerStyle = {
		display: loading ? "none" : "block",
		width: "100%",
		height: "100%",
	};


	function startConference() {
		try {
			const domain = "meet.jit.si";
			const options = {
				roomName: window.location.search.split("=")[1]?window.location.search.split("=")[1]:"room",
				// height: ,
				parentNode: document.getElementById("jitsi-container"),
				interfaceConfigOverwrite: {
					filmStripOnly: false,

					// TOOLBOX_ENABLED: false,
				},
				configOverwrite: {
					SHOW_JITSI_WATERMARK: false,
					SHOW_PROMOTIONAL_CLOSE_PAGE: false,
					enableClosePage: false,
					enableWelcomePage: false,
					disableSimulcast: true,
					toolbarButtons: [
						"microphone",
						"camera",
						"desktop",
						"hangup",
						"chat",
						"recording",
						"settings",
					],
					prejoinPageEnabled: false,
				},
				
			};

			const api = new window.exports.JitsiMeetExternalAPI(domain, options);
			api.addEventListener("videoConferenceJoined", () => {
				console.log("Local User Joined");
				setLoading(false);

				api.executeCommand(
					"displayName",
					localStorage.getItem("userInfo")
						? JSON.parse(localStorage.getItem("userInfo")).name
						: "user"
				);
			});
			api.addEventListener("readyToClose", function () {
				navigate("/");
			});
		} catch (error) {
			console.error("Failed to load Jitsi API", error);
		}
	}

	useEffect(() => {
		if (window.exports.JitsiMeetExternalAPI) startConference();
		else alert("Jitsi Meet API script not loaded");
	}, []);

	return (
		<div style={containerStyle}>
			{loading && <ProgressComponent />}
			<div id="jitsi-container" style={jitsiContainerStyle} />
		</div>
	);
}

export default JitsiMeetComponent;
