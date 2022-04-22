import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/userActions";
import { Avatar } from "@mui/material";
import { AiOutlineSkype } from "react-icons/ai";

import {
	FiInstagram,
	FiTwitter,
	FiFacebook,
	FiPhoneCall,
	FiMail,
	FiArrowLeftCircle,
} from "react-icons/fi";
const Navbar = ({ scrollState }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [click, setClick] = useState(false);
	const logoutHandle = () => {
		dispatch(logout());
		navigate("/");
	};
	const id = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))._id
		: null;
	const user = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))
		: null;

	let link;
	let link2;
	if (!id) {
		link = (
			<ul class="action-list">
				<li class="listing-button">
					<Link to="/login" class="listing-btn">
						<span class="item-text">Login</span>
					</Link>
				</li>
			</ul>
		);
	} else {
		link = <i class="flaticon-user-1 icon-round"></i>;

		link2 = (
			<ul class="dropdown-menu-col-1">
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					<Link to="/listing">My Listings</Link>
				</li>
				<li>
					<Link to="/schedule">Created Meetings</Link>
				</li>
				<li>
					<Link to="/scheduledmeetings">Meetings Scheduled</Link>
				</li>
				<li>
					<Link to="/" onClick={logoutHandle}>
						Log Out
					</Link>
				</li>
			</ul>
		);
	}

	return (
		<div className="nav-head">
			{" "}
			<header class="rt-header sticky-on">
				<div id="sticky-placeholder"></div>
				<div
					id="navbar-wrap"
					class="header-menu menu-layout1 header-menu menu-layout2"
				>
					<div class="container nav-container">
						<div class="row d-flex align-items-center">
							<div class="col-xl-2 col-lg-2">
								<div class="logo-area">
									<Link to="/" class="temp-logo">
										<img
											src="img/logo.svg"
											width="157"
											height="40"
											alt="logo"
											class="img-fluid"
										/>
									</Link>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 d-flex justify-content-center position-static">
								<nav
									id="dropdown"
									class="template-main-menu template-main-menu-3"
								>
									<ul>
										<li>
											<Link to="/">Home</Link>
										</li>
										<li>
											<Link to="/about">About</Link>
										</li>
										<li>
											<a>Property</a>
											<ul class="dropdown-menu-col-1">
												<li>
													<a href="/properties?category=buy">Buy</a>
												</li>
												<li>
													<a href="/properties?category=rent">Rent</a>
												</li>
											</ul>
										</li>

										<li>
											<Link to="/blog">Blog</Link>
										</li>
										<li>
											<Link to="/contactus">Contact</Link>
										</li>
									</ul>
								</nav>
							</div>

							<div class="col-xl-2 col-lg-2 g-0 d-flex justify-content-end">
								<div class="header-action-layout1">
									<nav
										id="dropdown"
										class="template-main-menu template-main-menu-1"
									>
										<ul class="action-list">
											<li class="action-item-style my-account">
												{link}
												{link2}
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div class="col-xl-2 col-lg-2 g-0 d-flex justify-content-end">
								<div class="header-action-layout1">
									<ul class="action-list">
										<li class="listing-button">
											<Link to="/AddPost" class="listing-btn">
												<span>
													<i class="fas fa-plus-circle"></i>
												</span>
												<span class="item-text">Add Property</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div
				class="rt-header-menu mean-container position-relative"
				id="meanmenu"
			>
				<div class="mean-bar">
					<Link to="/">
						<img src="img/logo.svg" alt="logo" class="img-fluid" />
					</Link>
					<div class="mean-bar--right">
						<div class="actions search">
							<Link to="#template-search" class="item-icon" title="Search">
								<i class="fas fa-search"></i>
							</Link>
						</div>
						<div class="actions user">
							<Link to="/">
								<i class="flaticon-user"></i>
							</Link>
						</div>
						<span
							class="sidebarBtn"
							onClick={() => {
								setClick(true);
							}}
						>
							<span class="bar"></span>
							<span class="bar"></span>
							<span class="bar"></span>
							<span class="bar"></span>
						</span>
					</div>
				</div>
				<div className={`mobile-menu ${click ? "open" : "close"} `}>
					{/* <div className="mobile-menu"> */}
					<div className="menu-close " onClick={() => setClick(false)}>
						<FiArrowLeftCircle size={32} color="#00c194" />
					</div>

					<div className="mobile-top" style={{ paddingTop: 0 }}>
						<p
							style={{
								display: "flex",
								alignItems: "center",
								padding: "3px",
							}}
						>
							<FiPhoneCall
								color="#00c194"
								size={22}
								style={{ marginRight: "10px" }}
							/>
							<a style={{ marginTop: 0, color: "#000" }} href="tel:9876543210">
								(9876543210)
							</a>
						</p>
						<p
							style={{
								display: "flex",
								alignItems: "center",
								padding: "3px",
							}}
						>
							<FiMail
								size={22}
								color="#00c194"
								style={{ marginRight: "10px" }}
							/>
							<a
								style={{ marginTop: 0, color: "black" }}
								href="mailto:address@gmail.com"
							>
								{user?.email ? user?.email : "info@example.com"}{" "}
							</a>
						</p>
					</div>

					<div className="mobile-sign-in-up" style={{ paddingTop: "20px" }}>
						{id ? (
							<Avatar
								sx={{
									bgcolor: "#00c194",
									width: "50px",
									height: "50px",
									fontSize: "1.5rem",
								}}
							></Avatar>
						) : (
							<ul
								style={{
									display: "flex",
									justifyContent: "space-around",
									width: "100%",
								}}
							>
								<li>
									<Link className="sign-in" to="/login">
										Sign In
									</Link>
								</li>
								<li>
									<Link className="sign-up" to="/signup">
										Sign Up
									</Link>
								</li>
							</ul>
						)}
						{/* <ul class="action-list">
							<li class="action-item-style my-account">
								{link}
								{link2}
							</li>
						</ul> */}
					</div>

					<div className="mobile-menu-items" style={{ paddingTop: "20px" }}>
						<ul className="nav-menu">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/properties?category=buy">Buy</Link>
							</li>
							<li>
								<Link to="/properties?category=rent">Rent</Link>
							</li>
							<li>
								<Link to="/blog">Blogs</Link>
							</li>

							<li>
								<Link to="/contactus">Contact Us</Link>
							</li>
						</ul>
					</div>

					<div className="mobile-social">
						<ul className="social">
							<li>
								<a href="/">
									<FiFacebook size={24} />
								</a>
							</li>
							<li>
								<a href="/">
									<FiTwitter size={24} />
								</a>
							</li>
							<li>
								<a href="/">
									<AiOutlineSkype size={26} />{" "}
								</a>
							</li>
							<li>
								<a href="/">
									<FiInstagram size={22} />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div class="rt-slide-nav">
					<div class="offscreen-navigation">
						<nav class="menu-main-primary-container">
							<ul class="menu">
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" to="/">
										Home
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link to="/">Home </Link>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" to="/listing">
										Listing
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link to="/properties?category=buy">
												Properties Map Grid
											</Link>
										</li>

										<li>
											<Link to="/SingleProperty">Single Property 1</Link>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" to="/">
										Pages
									</Link>
									<ul class="main-menu__dropdown sub-menu">
										<li>
											<Link to="/about">About Us</Link>
										</li>
									</ul>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" to="/">
										Blog
									</Link>
								</li>
								<li class="list menu-item-parent menu-item-has-children">
									<Link class="animation" to="/">
										Agents
									</Link>
									<ul class="main-menu__dropdown sub-menu"></ul>
								</li>
								<li class="list menu-item-parent">
									<Link class="animation" to="ConactUs">
										Contact us
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
