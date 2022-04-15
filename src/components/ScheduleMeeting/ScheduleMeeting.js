import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Button, ProgressBar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userRgister } from "../../store/actions/userActions";
import shortid from "shortid";
import { addMeeting } from "../../store/actions/meetingActions";
import Message from "../message/message";
const ScheduleMeeting = () => {
	const [formErrors, setFormErrors] = useState({});
	const id = window.location?.search?.split("=")[1];
	const cId = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))._id
		: null;
	const [details, setDetails] = useState({
		meetingID: shortid.generate(),
		date: "",
		time: "",
		buyerName: "",
		buyerPhone: "",

		createrId: cId,
		recieverId: id,
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const addMeetingReducer = useSelector((state) => state.addMeetingReducer);
	const { error, success, loading, meetingInfo } = addMeetingReducer;
	const meetingHandle = async (e) => {
		e.preventDefault();
		setFormErrors(validate(details));
		console.log(details);
		await dispatch(addMeeting(details));
		if (success) {
			nav();
			setDetails({
				meetingID: "",
				date: "",
				time: "",
				buyerName: "",
				buyerPhone: "",
			});
		}
	};
	const nav = () => {
		setTimeout(() => {
			navigate("/schedule");
		}, 2000);
	};
	console.log(details);
	useEffect(() => {
		if (success) {
			nav();

			setDetails({
				meetingID: "",
				date: "",
				time: "",
				buyerName: "",
				buyerPhone: "",
			});
		}
	}, [navigate, success]);
	useEffect(() => {
		// console.log(formErrors);
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		if (!values.buyerName) {
			errors.buyerName = "Name is required!";
		}
		if (!values.buyerPhone) {
			errors.buyerPhone = "Phone Number is required!";
		}
		if (!values.date) {
			errors.date = "Meeting Date is required!";
		}
		if (!values.time) {
			errors.time = "Meeting Time is required!";
		}

		return errors;
	};

	return (
		<div>
			<Navbar />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="/">Home</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Schedule Meeting
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
									<h2>Schedule Meeting</h2>
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
										<form onSubmit={meetingHandle}>
											<div class="form-group">
												<label for="buyerName" class="control-label">
													Name
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="buyerName"
													id="buyerName"
													style={{ textTransform: "capitalize" }}
													autocapitalize="words"
													class="form-control"
													required
													value={details.buyerName}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, buyerName: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.buyerName}</p>
											<div class="form-group">
												<label for="buyerPhone" class="control-label">
													Phone Number <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="buyerPhone"
													id="buyerPhone"
													class="form-control"
													required
													value={details.buyerPhone}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, buyerPhone: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.buyerPhone}</p>
											<div class="form-group">
												<label for="date" class="control-label">
													Meeting Date <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="date"
													name="date"
													id="date"
													class="form-control"
													required
													value={details.date}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, date: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.date}</p>

											<div class="form-group">
												<label for="time" class="control-label">
													Meeting Time <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="time"
													name="time"
													id="time"
													class="form-control"
													required
													value={details.time}
													onChange={(e) => {
														setDetails((prev) => {
															return { ...prev, time: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.time}</p>

											<div class="form-group">
												<label for="meetingID" class="control-label">
													Meeting ID <strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													readOnly="true"
													name="meetingID"
													id="meetingID"
													class="form-control"
													required
													value={details?.meetingID}
												/>
											</div>

											<div class="form-group d-flex align-items-center">
												<Button
													type="submit"
													name="schedue"
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
													value="schedule"
												>
													Schedule Meeting
												</Button>
											</div>
										</form>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};
export default ScheduleMeeting;
