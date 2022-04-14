import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { userLogin } from "../../store/actions/userActions";
import ScrollButton from "../scrollToTop";
import Message from "../message/message";
const Login = () => {
	const [scrollState, setScrollState] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", (e) => {
			var scroll = window.pageYOffset;
			if (scroll <= 100) {
				setScrollState(false);
			} else {
				setScrollState(true);
			}
		});
	});
	const [details, setDetails] = useState({
		email: "",
		userpass: "",
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const loginUser = useSelector((state) => state.loginUser);
	const { laoding, userInfo, error, success } = loginUser;

	const loginHandle = (e) => {
		e.preventDefault();
		try {
			dispatch(userLogin(details));
		} catch (e) {
			throw new Error(e.message);
		}
	};
	useEffect(() => {
		if (success) {
			setDetails({
				email: "",
				userpass: "",
			});
			navigate("/");
		}
	}, [success, navigate]);

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
								My Account
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<main class="site-main content-area">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-sm-12 col-12">
							<div class="page-content-block">
								<div class="col-md-12 rtcl-login-form-wrap">
									<h2>Login</h2>
									{error && (<Message variant={"danger"}>{error}</Message>)}
									{laoding ? (
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
										<form
											id="rtcl-login-form"
											class="form-horizontal"
											method="post"
											novalidate="novalidate"
											onSubmit={loginHandle}
										>
											<div class="form-group">
												<label for="rtcl-user-login" class="control-label">
													Username or E-mail
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="email"
													name="email"
													value={details.email}
													id="rtcl-user-login"
													class="form-control"
													required
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, email: e.target.value };
														});
													}}
												/>
											</div>
											<div class="form-group">
												<label for="rtcl-user-pass" class="control-label">
													Password <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="password"
													name="userpass"
													id="rtcl-user-pass"
													autocomplete="current-password"
													class="form-control"
													required
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, userpass: e.target.value };
														});
													}}
													value={details.userpass}
												/>
											</div>
											<div class="form-group d-flex align-items-center">
												<button
													type="submit"
													name="rtcl-login"
													class="btn btn-primary"
													value="login"
												>
													Login
												</button>
											</div>
											<div class="d-flex justify-content-between">
												<div class="form-group">
													<p class="rtcl-forgot-password">
														Not registered yet?
														<Link to="/signup"> Create an Account</Link>
													</p>
												</div>
												<div class="form-group">
													<p class="rtcl-forgot-password">
														<Link to="/forgotpassword">
															Forgot Your Password?
														</Link>
													</p>
												</div>
											</div>
										</form>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<ScrollButton scrollState={scrollState} />

			<Footer />
		</div>
	);
};
export default Login;
