import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { resetPassword } from "../store/actions/userActions";
import Footer from "./Footer";
import Message from "./message/message";
import Navbar from "./Navbar";

const ResetPassword = () => {
	const resetToken = window.location.search.split("=")[1];
	const dispatch = useDispatch();
	const resetPassReducer = useSelector((state) => state.resetPassReducer);
	const { loading, error, success } = resetPassReducer;
	const [message, setMessage] = useState("");
	const navigate = useNavigate();

	const resetPassHandle = (e) => {
	e.preventDefault()
        if (details.userpass !== details.confirmpass) {
			setMessage("Password don't match");
		} else {
			if (resetToken) {
				dispatch(resetPassword(resetToken, details)).then(() => {
					navigate("/login");
				});
			}
		}
	};

	const [details, setDetails] = useState({
		email: "",
		userpass: "",
		confirmpass: "",
	});
	return (
		<div>
			{" "}
			<Navbar />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Reset Password
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div style={{ margin: "30px" }}>
				{" "}
				{/* {loading ? (
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
				) : (
					userInfo && <Navigate to="/" />
				)} */}
				{message && <Message variant={"danger"}>{message}</Message>}
				{resetToken?.length === 64 ? (
					loading ? (
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
						<form onSubmit={resetPassHandle}>
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
									name="email"
									id="email"
									//
									required
									value={details.email}
									onChange={(e) => {
										setDetails((prev) => {
											return { ...prev, email: e.target.value };
										});
									}}
								/>
							</div>
							<div
								class="single-form"
								style={{
									display: "flex",
									flexDirection: "column",
									marginBottom: "10px",
								}}
							>
								<label for="userpass" class="control-label">
									Password <strong class="rtcl-required">*</strong>
								</label>
								<input
									type="password"
									name="password"
									id="userpass"
									required
									value={details.userpass}
									onChange={(e) => {
										setDetails((prev) => {
											return { ...prev, userpass: e.target.value };
										});
									}}
								/>
							</div>
							{/* <p style={{ color: "red" }}>{formErrors.userpass}</p> */}
							<div
								class="single-form"
								style={{
									display: "flex",
									flexDirection: "column",
									marginBottom: "10px",
								}}
							>
								<label for="confirmpass" class="control-label">
									Confirm Password <strong class="rtcl-required">*</strong>
								</label>
								<input
									type="password"
									name="confirmpass"
									id="confirmpass"
									required
									value={details.confirmpass}
									onChange={(e) => {
										setDetails((prev) => {
											return { ...prev, confirmpass: e.target.value };
										});
									}}
								/>
							</div>
							{/* <p style={{ color: "red" }}>{formErrors.confirmpass}</p> */}

							<div class="form-group d-flex align-items-center">
								<Button
									type="submit"
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
									// value="signup"
									// onClick={resetPasswordHandle}
								>
									Reset Password
								</Button>
							</div>
						</form>
					)
				) : (
					<Message variant={"success"}>
						Password reset link has been sent to your email. Follow the link to
						reset password.
					</Message>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default ResetPassword;
