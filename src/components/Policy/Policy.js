import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Policy.css";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
    useEffect(()=>{
			window.scrollTo(0, 0);

    })
	return (
		<>
			<Navbar scrollState={true} />
			<div class="breadcrumb-wrap">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								
                                Privacy Policy
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className="privacy-policy-container" s>
				<div className="privacy-policy-container-left">
					<div className="privacy-policy-container-left-links">
						<a href="#privacy-policy">1. Privacy Policy</a>
						<a href="#terms">2. Terms & Conditions</a>
						<a href="#user-guidelines">3. User Guidelines</a>
						<a href="#refund-policy">4. Refund Policy</a>
						<a href="#legal-notices">5. Legal Notices</a>
						<a href="#referal">6. Referral T&C</a>
					</div>
				</div>
				<div className="privacy-policy-container-right">
					<div
						className="privacy-policy-container-right-content"
						id="privacy-policy"
					>
						<h4>1. Privacy Policy</h4>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</div>
					<div className="privacy-policy-container-right-content" id="terms">
						<h4>2. Terms & Conditions</h4>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</div>
					<div
						className="privacy-policy-container-right-content"
						id="user-guidelines"
					>
						<h4>3. User Guidelines</h4>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</div>
					<div
						className="privacy-policy-container-right-content"
						id="refund-policy"
					>
						<h4>4. Refund Policy</h4>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</div>
					<div
						className="privacy-policy-container-right-content"
						id="legal-notices"
					>
						<h4>5. Legal Notices</h4>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</div>
					<div className="privacy-policy-container-right-content" id="referal">
						<h4>6. Referral T&C</h4>
						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of classical Latin literature from 45 BC,
							making it over 2000 years old. Richard McClintock, a Latin
							professor at Hampden-Sydney College in Virginia, looked up one of
							the more obscure Latin words, consectetur, from a Lorem Ipsum
							passage, and going through the cites of the word in classical
							literature, discovered the undoubtable source. Lorem Ipsum comes
							from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
							Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
							BC. This book is a treatise on the theory of ethics, very popular
							during the Renaissance. The first line of Lorem Ipsum, "Lorem
							ipsum dolor sit amet..", comes from a line in section 1.10.32.
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PrivacyPolicy;
