import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollButton from "../scrollToTop";

const Contact = () => {
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
	return (
		<div>
			<Navbar />

			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="index">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Contact Page
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<section class="contact-wrap">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-box1">
								<div class="contact-img">
									<img
										src="img/blog/contact1.jpg"
										alt="contact"
										height="502"
										width="607"
									/>
								</div>
								<div class="contact-content">
									<h3 class="contact-title">Office Information</h3>
									<div class="contact-list">
										<ul>
											<li>VRDOOR Real Estate Agency</li>
											<li>Indra vihar</li>
											<li>Delhi- 110009</li>
										</ul>
									</div>
									<div class="phone-box">
										<div class="item-lebel">Emergency Call :</div>
										<div class="phone-number">+91 8826024495</div>
										<div class="item-icon">
											<i class="fas fa-phone-alt"></i>
										</div>
									</div>
									<div class="social-box">
										<div class="item-lebel">Social Share :</div>
										<ul class="item-social">
											<li>
												<Link
													to="https://www.facebook.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i class="fab fa-facebook-f"></i>
												</Link>
											</li>
											<li>
												<Link
													to="https://twitter.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i class="fab fa-twitter"></i>
												</Link>
											</li>
											<li>
												<Link
													to="https://vimeo.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i class="fab fa-vimeo-v"></i>
												</Link>
											</li>
											<li>
												<Link
													to="https://www.pinterest.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i class="fab fa-pinterest-p"></i>
												</Link>
											</li>
											<li>
												<Link
													to="https://web.whatsapp.com/"
													target="_blank"
													rel="noreferrer"
												>
													<i class="fab fa-whatsapp"></i>
												</Link>
											</li>
										</ul>
										<div class="item-icon">
											<i class="fas fa-share-alt"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="contact-box2">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6998.823767550665!2d77.21048107384051!3d28.707234379553313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde65a68e83b%3A0xb63f7396b9658b6!2sIndra%20Vihar%2C%20Mukherjee%20Nagar%2C%20Delhi%2C%20110009!5e0!3m2!1sen!2sin!4v1647420906004!5m2!1sen!2sin"
									width="600"
									title="map"
									height="550"
									style={{ border: "0" }}
									allowfullscreen=""
									loading="lazy"
								></iframe>
								<div class="contact-content">
									<h3 class="contact-title">Quick Contact</h3>
									<p>Contact for quick resolution of your doubts</p>
									<form class="contact-box rt-contact-form">
										<div class="row">
											<div class="form-group col-lg-6">
												<label>Name *</label>
												<input
													type="text"
													class="form-control"
													name="fname"
													placeholder="First Name*"
													data-error="First Name is required"
													required
												/>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-6">
												<label>Phone *</label>
												<input
													type="text"
													class="form-control"
													name="phone"
													placeholder="Phone*"
													data-error="Phone is required"
													required
												/>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-12">
												<label>Message *</label>
												<textarea
													name="comment"
													id="message"
													class="form-text"
													placeholder="Message"
													cols="30"
													rows="5"
													data-error="Message Name is required"
													required
												></textarea>
												<div class="help-block with-errors"></div>
											</div>
											<div class="form-group col-lg-12">
												<button type="submit" class="item-btn">
													Send message
												</button>
											</div>
										</div>
										<div class="form-response"></div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ScrollButton scrollState={scrollState} />

			<Footer />
		</div>
	);
};

export default Contact;
