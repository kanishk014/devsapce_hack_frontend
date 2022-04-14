import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer class="footer-area">
			<div class="footer-top footer-top-style">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
							<div class="footer-logo-area footer-logo-area-2">

								<div className="img-container" >
									<img
                                    style={{height:"50px",marginBottom:"20px"}}
										src="img/logo.png"
									height={100}
										alt="logo"
										class="img-fluid"
									/>
								</div>
								<p>
								VRDOOR is India's fastest growing online Property marketplace to buy, sell, and rent residential and commercial properties. Experience every property in 360 view, VRDOOR is the most preferred real estate portal in India by various independent surveys.
								</p>
								<div class="item-social">
									<ul>
										<li>
											<Link to="https://www.facebook.com/" target="_blank"  rel="noreferrer" >
												<i class="fab fa-facebook-f"></i>
											</Link> 
										</li>
										<li>
											<Link to="https://twitter.com/" target="_blank"  rel="noreferrer">
												<i class="fab fa-twitter"></i>
											</Link> 
										</li>
										<li>
											<Link to="https://vimeo.com/" target="_blank"  rel="noreferrer">
												<i class="fab fa-vimeo-v"></i>
											</Link> 
										</li>
										<li>
											<Link to="https://www.pinterest.com/" target="_blank"  rel="noreferrer">
												<i class="fab fa-pinterest-p"></i>
											</Link> 
										</li>
										<li>
											<Link to="https://web.whatsapp.com/" target="_blank"  rel="noreferrer">
												<i class="fab fa-whatsapp"></i>
											</Link> 
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
							<div class="footer-link footer-link-style-2">
								<div class="footer-title footer-title-style2">
									<h3>Quick Links</h3>
								</div>
								<div class="item-link">
									<ul>
										<li>
											<Link to="about">About Us </Link> 
										</li>
										<li>
											<Link to="Blog">Blogs & Articles </Link> 
										</li>
										<li>
											<Link to="about">Terms & Conditions</Link> 
										</li>
										<li>
											<Link to="about">Privacy Policy </Link> 
										</li>
										<li>
											<Link to="contactus">Contact Us </Link> 
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div class="footer-insta">
								<div class="footer-title footer-title-style2">
									<h3>Instagram</h3>
								</div>
								<div class="insta-link">
									<ul>
										<li>
											<div class="item-img">
												<Link to="https://www.instagram.com/" class="insta-pic">
													<img
														src="img/instagram/insta1.jpg"
														width="86"
														height="73"
														alt="instagram"
													/>
												</Link> 
												<div class="item-overlay">
													<Link to="https://www.instagram.com/" target="_blank"  rel="noreferrer">
														<i class="fab fa-instagram"></i>
													</Link> 
												</div>
											</div>
										</li>
										<li>
											<div class="item-img">
												<Link to="https://www.instagram.com/" class="insta-pic">
													<img
														src="img/instagram/insta2.jpg"
														width="86"
														height="73"
														alt="instagram"
													/>
												</Link> 
												<div class="item-overlay">
													<Link to="https://www.instagram.com/" target="_blank"  rel="noreferrer">
														<i class="fab fa-instagram"></i>
													</Link> 
												</div>
											</div>
										</li>
										<li>
											<div class="item-img">
												<Link to="https://www.instagram.com/" class="insta-pic">
													<img
														src="img/instagram/insta3.jpg"
														width="86"
														height="73"
														alt="instagram"
													/>
												</Link> 
												<div class="item-overlay">
													<Link to="https://www.instagram.com/" target="_blank"  rel="noreferrer">
														<i class="fab fa-instagram"></i>
													</Link> 
												</div>
											</div>
										</li>
										<li>
											<div class="item-img">
												<Link to="https://www.instagram.com/" class="insta-pic">
													<img
														src="img/instagram/insta4.jpg"
														width="86"
														height="73"
														alt="instagram"
													/>
												</Link> 
												<div class="item-overlay">
													<Link to="https://www.instagram.com/" target="_blank"  rel="noreferrer">
														<i class="fab fa-instagram"></i>
													</Link> 
												</div>
											</div>
										</li>
										<li>
											<div class="item-img">
												<Link to="https://www.instagram.com/" class="insta-pic">
													<img
														src="img/instagram/insta5.jpg"
														width="86"
														height="73"
														alt="instagram"
													/>
												</Link> 
												<div class="item-overlay">
													<Link to="https://www.instagram.com/" target="_blank"  rel="noreferrer">
														<i class="fab fa-instagram"></i>
													</Link> 
												</div>
											</div>
										</li>
										<li>
											<div class="item-img">
												<Link to="https://www.instagram.com/" class="insta-pic">
													<img
														src="img/instagram/insta6.jpg"
														width="86"
														height="73"
														alt="instagram"
													/>
												</Link> 
												<div class="item-overlay">
													<Link to="https://www.instagram.com/" target="_blank"  rel="noreferrer">
														<i class="fab fa-instagram"></i>
													</Link> 
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
							<div class="footer-contact footer-contact-style-2">
								<div class="footer-title footer-title-style2">
									<h3>Contact</h3>
								</div>
								<div class="footer-location">
									<ul>
										<li class="item-map">
											<i class="fas fa-map-marker-alt"></i>Indra vihar, Delhi- 110009
										</li>
										<li>
											<Link to="mailto:info@example.com">
												<i class="fas fa-envelope"></i>info@example.com
											</Link> 
										</li>
										<li>
											<Link to="tel:+123596000">
												<i class="fas fa-phone-alt"></i>+91 8826024495
											</Link> 
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom footer-bottom-style-2">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-6 col-md-6">
							<div class="copyright-area1">
								<ul>
									<li>
										<Link to="about">Terms of Use</Link> 
									</li>
									<li>
										<Link to="about">Privacy Policy</Link> 
									</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-6 col-md-6">
							<div class="copyright-area2">
								<p>2022© All rightre served by VRDOOR</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
