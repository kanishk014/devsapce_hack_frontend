import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../message/message";
import "./schedules.css";
import { getRecieverMeetingReducer } from "../../store/reducers/meetReducer";
import {
	fetchMeetingCreated,
	fetchMeetingRecieved,
} from "../../store/actions/meetingActions";
const Schedule = () => {
	const dispatch = useDispatch();
	const getCreaterMeetingReducer = useSelector(
		(state) => state.getCreaterMeetingReducer
	);
	const cId = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))._id
		: null;
	const { meetCreateData, loading, error, success } = getCreaterMeetingReducer;

	useEffect(() => {
		// if (success) {
			dispatch(fetchMeetingCreated(cId));
		// }
	}, [dispatch]);
	return (
		<div>
			<Navbar />

			<section class="property-wrap1 property-wrap-10">
				<div class="container">
					<div class="item-heading-center">
						<span class="section-subtitle">Meetings</span>
						<h2 class="section-title">Scheduled Meetings</h2>
						<div class="bg-title-wrap" style={{ display: "block" }}>
							<span class="background-title solid">Meetings</span>
						</div>
					</div>

					<div class="">
						<div class="container-prop-style" style={{ width: "fitContent" }}>
							{loading ? (
								<div
									// class="col-xl-6 col-lg-6 col-md-6"
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										marginTop: "20px",
										marginBottom: "40x",
										width: "fitContent",
									}}
								>
									<img src="img/preloader.gif" alt="load" />
								</div>
							) : error ? (
								<Message variant={"danger"}>{error}</Message>
							) : (
								meetCreateData?.map((item) => {
									return (
										<div
											class="property-box2 wow animated fadeInUp"
											data-wow-delay=".3s"
										>
											<div class="item-img" style={{ width: "fitContent" }}>
												<Link to="/singleproperty">
													<img
														src="img/blog/blog4.jpg"
														alt="blog"
														width="510"
														height="340"
													/>
												</Link>

												<div class="rent-price">
													<div class="item-price">
														$15,000
														<span>
															<i>/</i>mo
														</span>
													</div>
												</div>
												<div class="react-icon">
													<ul>
														<li>
															<Link
																to="/"
																data-bs-toggle="tooltip"
																data-bs-placement="top"
																title="Favourites"
															>
																<i class="flaticon-heart"></i>
															</Link>
														</li>
														<li>
															<Link
																to="/"
																data-bs-toggle="tooltip"
																data-bs-placement="top"
																title="Compare"
															>
																<i class="flaticon-left-and-right-arrows"></i>
															</Link>
														</li>
													</ul>
												</div>
											</div>
											<div class="item-category10">
												<Link to="SingleProperty">Appartment</Link>
											</div>
											<div class="item-content" style={{ width: "fitContent" }}>
												<div class="verified-area">
													<h3 class="item-title">
														<Link to="/singleproperty">
															Family House For Buy
														</Link>
													</h3>
												</div>
												<div class="location-area">
													<i class="flaticon-maps-and-flags"></i>Downey,
													California
												</div>
												<div class="item-categoery3">
													<ul>
														<li>
															Meeting Time: {item?.time ? item?.time : "03"}
														</li>
														<li>
															Meeting Date: {item?.date ? item?.date : "03"}
														</li>
													</ul>
													<ul>
														<li>
															Buyer Name:
															{item?.buyerName ? item?.buyerName : "Jay"}{" "}
														</li>
														<li>
															Buyer Phone no.:{" "}
															{item?.buyerPhone
																? item?.buyerPhone
																: "0425367483"}
														</li>
													</ul>
													<ul>
														<li>
															Meeting ID:{" "}
															{item?.meetingID ? item?.meetingID : "03sdfst"}
														</li>
													</ul>
													<div class="property-button">
														<Link
															to={`/meet?id=${item?.meetingID}`}
															class="item-btn"
														>
															Start Meeting
														</Link>
													</div>
												</div>
											</div>
										</div>
									);
								})
							)}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Schedule;
