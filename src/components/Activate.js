import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { activateUser } from "../store/actions/userActions";
import Footer from "./Footer";
import Message from "./message/message";
import Navbar from "./Navbar";

const Activate = () => {
	const activateId = window.location.search.split("=")[1];
	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginUser);
	const { loading, userInfo, error } = loginUser;
	useEffect(() => {
		if (activateId) {
			dispatch(activateUser(activateId));
		}
	}, [dispatch, activateId]);

	return (
		<div>
			<Navbar />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Activate Account
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div style={{ margin: "30px" }}>
				{" "}
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
					userInfo && <Navigate to="/" />
				)}
				{userInfo ? (
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
					<Message variant={"success"}>
						Activation link has been sent to your email. Please activate your
						account.{" "}
					</Message>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default Activate;
