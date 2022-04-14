import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { userRgister } from "../../store/actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { Button, ProgressBar } from "react-bootstrap";
import ScrollButton from "../scrollToTop";
import Message from "../message/message";
const SignUp = () => {
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
	const [formErrors, setFormErrors] = useState({});
	const [iImage, setiImage] = useState(null);
	const [iprogress, setIProgress] = useState(0);
	const [details, setDetails] = useState({
		name: "",
		userImage: "",
		email: "",
		phoneno: "",
		dob: "",
		userpass: "",
		gender: "",
		confirmpass: "",
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const registerUser = useSelector((state) => state.registerUser);
	const { error, success, loading } = registerUser;

	const signUpHandle = async (e) => {
		e.preventDefault();
		setFormErrors(validate(details));
		console.log(details);
		await dispatch(userRgister(details));
		// console.log(success,"success");
		if (success) {
			setDetails({
				name: "",
				userImage: "",
				email: "",
				phoneno: "",
				dob: "",
				userpass: "",
				gender: "",
				confirmpass: "",
			});
			navigate("/activateuser");
		}
	};
	useEffect(() => {
		if (success) {
			setDetails({
				name: "",
				userImage: "",
				email: "",
				phoneno: "",
				dob: "",
				userpass: "",
				gender: "",
				confirmpass: "",
			});
			navigate("/activateuser");
            
		}
	}, [success, navigate]);
	console.log();
	useEffect(() => {
		// console.log(formErrors);
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^s@]+\.[^s@]{2,}$/i;
		if (!values.name) {
			errors.name = "Name is required!";
		}
		if (!values.phoneno) {
			errors.phoneno = "Phone Number is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not a valid email format!";
		}
		if (!values.gender) {
			errors.gender = "Gender is required!";
		}
		if (!values.dob) {
			errors.dob = "Date of Birth is required!";
		}
		if (!values.userpass) {
			errors.userpass = "Password is required!";
		}
		if (!values.confirmpass) {
			errors.confirmpass = "Confirm Password is required!";
		} else if (values.confirmpass !== values.userpass) {
			errors.confirmpass = "Password does not match!";
		}
		return errors;
	};

	const iImageHanlder = () => {
		const storageRef = ref(storage, `users/${details.name}/${iImage.name}`);
		const uploadTask = uploadBytesResumable(storageRef, iImage);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setIProgress(prog);
			},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					// setUserImage(downloadURL)
					setDetails((prev) => {
						return { ...prev, userImage: downloadURL };
					});
				});
			}
		);
	};

	return (
		<div>
			<Navbar />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="index.html">Home</a>
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
									<h2>Sign Up</h2>
									{error && <Message variant={"danger"}>{error}</Message>}
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
									) : (
										<form onSubmit={signUpHandle}>
											<div class="form-group">
												<label for="name" class="control-label">
													Name
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="name"
													id="name"
													style={{ textTransform: "capitalize" }}
													autocapitalize="words"
													class="form-control"
													required
													value={details.name}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, name: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.name}</p>
											<div class="form-group">
												<label for="email" class="control-label">
													Email
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="email"
													name="email"
													id="email"
													class="form-control"
													required
													value={details.email}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, email: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.email}</p>

											<div class="form-group">
												<label
													htmlFor="Userimage"
													// style={{ fontSize: "18px", color: "#309255" }}
												>
													User Image
													<strong class="rtcl-required">*</strong>
												</label>

												<input
													type="file"
													id="Userimage"
													className="form-control"
													name="Instructor"
													accept=".jpg,.jpeg,.png"
													// alt='courseImg'
													style={{ marginTop: "10px" }}
													// required
													placeholder="User image"
													onChange={(e) => {
														setiImage(e.target.files[0]);
													}}
												/>
												{iprogress > 0 && iprogress < 100 && (
													<ProgressBar
														striped
														variant="success"
														style={{ marginTop: "10px" }}
														now={iprogress}
													/>
												)}

												<Button
													onClick={iImageHanlder}
													variant="btn btn-secondary btn-outline w-100"
													style={{
														backgroundColor: "#00c194",
														textAlign: "center",
														border: 0,
														height: "30px",
														display: "flex",
														justifyContent: "center",
														alignItems: "center",
														fontSize: "16px",
														padding: "20px ",
														marginTop: "10px",
													}}
												>
													{iprogress === 100 ? "Uploaded" : "Upload"}
												</Button>
											</div>

											<div class="form-group">
												<label for="phoneno" class="control-label">
													Phone Number <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="phoneno"
													id="phoneno"
													class="form-control"
													required
													value={details.phoneno}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, phoneno: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.phoneno}</p>
											<div>
												<label for="gender" class="control-label">
													Gender <strong class="rtcl-required">*</strong>
												</label>
											</div>
											<div class="form-check form-check-inline">
												<input
													type="radio"
													name="gender"
													value={details.gender}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, gender: "Male" };
														});
													}}
												/>{" "}
												Male
											</div>
											<div class="form-check form-check-inline">
												<input
													type="radio"
													name="gender"
													value={details.gender}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, gender: "Female" };
														});
													}}
												/>{" "}
												Female
											</div>
											<div class="form-check form-check-inline">
												<input
													type="radio"
													name="gender"
													value={details.gender}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, gender: "Other" };
														});
													}}
												/>{" "}
												Other
											</div>
											<p style={{ color: "red" }}>{formErrors.gender}</p>
											<div class="form-group">
												<label for="dob" class="control-label">
													Date of Birth <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="date"
													name="dob"
													id="dob"
													class="form-control"
													required
													value={details.dob}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, dob: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.dob}</p>
											<div class="form-group">
												<label for="userpass" class="control-label">
													Password <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="password"
													name="password"
													id="userpass"
													class="form-control"
													required
													value={details.userpass}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, userpass: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.userpass}</p>
											<div class="form-group">
												<label for="confirmpass" class="control-label">
													Confirm Password{" "}
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="password"
													name="confirmpass"
													id="confirmpass"
													class="form-control"
													required
													value={details.confirmpass}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, confirmpass: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.confirmpass}</p>

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
													value="signup"
													onClick={signUpHandle}
												>
													Sign Up
												</Button>
											</div>
											<div class="form-group">
												<p class="rtcl-forgot-password">
													Already have an account?{" "}
													<Link to="/login">Log in </Link>
												</p>{" "}
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
export default SignUp;
