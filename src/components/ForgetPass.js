import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPass } from "../store/actions/userActions";
import Footer from "./Footer";
import Message from "./message/message";
import Navbar from "./Navbar";

const ForgetPass = () => {
	const [details, setDetails] = useState({ email: "" });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const forgotPassReducer = useSelector((state) => state.forgotPassReducer);
	const { loading, error, success } = forgotPassReducer;
	const resetPasswordHandle = (e) => {
		e.preventDefault();
		dispatch(forgotPass(details));
		console.log(success);
	};
	useEffect(() => {
		if (success) {
			navigate("/resetpassword");
		}
	}, [navigate, success]);
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div
					style={{
						margin: "40px",
						width: "50%",
						display: "flex",
						justifyContent: "center",
						flexDirection: "column",
					}}
				>
					<h2>Forgot Password</h2>
					{loading ? (
						<div
							class="container-fluid"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								marginTop: "20px",
								marginBottom: "40x",
							}}
						>
							<img src="img/preloader.gif" alt="load" />
						</div>
					) : error ? (
						<Message variant={"danger"}>{error}</Message>
					) : (
						<form onSubmit={resetPasswordHandle}>
							<div
								class="single-form"
								style={{
									display: "flex",
									flexDirection: "column",
									marginBottom: "10px",
								}}
							>
								<label for="name" class="control-label">
									Email
									<strong class="rtcl-required">*</strong>
								</label>
								<input
									type="email"
									id="email"
									required
									value={details.email}
									onChange={(e) => {
										setDetails((prev) => {
											return { ...prev, email: e.target.value };
										});
									}}
								/>
							</div>
							<div class="form-group d-flex align-items-center">
								<Button
									type="submit"
									name="signup"
									style={{
										backgroundColor: "#00c194",
										border: 0,
										height: "30px",
										fontSize: "16px",
										padding: "20px ",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
									variant="btn btn-secondary btn-outline w-100"
								>
									Forgot Password{" "}
								</Button>
							</div>
						</form>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ForgetPass;
