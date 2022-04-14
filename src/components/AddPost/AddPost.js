import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../../store/actions/propertiesAction";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ProgressBar, Button } from "react-bootstrap";
import ScrollButton from "../scrollToTop";
const AddPost = () => {
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
	const id = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))._id
		: null;
	const navigate = useNavigate();
	useEffect(() => {
		if (!id) {
			navigate("/login");
		}
	});

	const [propDetails, setpropDetails] = useState({
		userId: id,
		title: "",
		propertyImage: "",
		overview: "",
		price: "",
		beds: "",
		baths: "",
		sqft: "",
		type: "Family House",
		category: "Rent",
		builtYear: "",
		parkingSpaces: "",
		roomCount: "",
		location: "",
		tvCable: false,
		barbeque: false,
		ac: false,
		lawn: false,
		laundry: false,
		ccCam: false,
		feel_360: "",
	});

	console.log(propDetails);
	const dispatch = useDispatch();

	const addPostHandler = (e) => {
		e.preventDefault();
		setFormErrors(validate(propDetails));
		//    console.log("FORM ERROR",Object.keys(formErrors).length===0);
		// if (Object.keys(formErrors).length === 0) {
		// 	console.log("called");
		dispatch(addProperty(propDetails)).then(() => {
			setpropDetails({
				userId: id,
				title: "",
				propertyImage: "",
				overview: "",
				price: "",
				beds: "",
				baths: "",
				sqft: "",
				type: "Family House",
				category: "Rent",
				builtYear: "",
				parkingSpaces: "",
				roomCount: "",
				location: "",
				tvCable: false,
				barbeque: false,
				ac: false,
				lawn: false,
				laundry: false,
				ccCam: false,
				feel_360: "",
			});
			navigate("/");
		});
		// }
	};
	// console.log(propDetails);
	useEffect(() => {
		console.log(formErrors);
	}, [formErrors]);
	const validate = (values) => {
		const errors = {};
		if (!values.title) {
			errors.title = "Title is required!";
		}
		if (!values.overview) {
			errors.overview = "Overview is required!";
		}
		if (!values.price) {
			errors.price = "Price is required!";
		}
		if (!values.beds) {
			errors.beds = "No. of Beds is required!";
		}
		if (!values.baths) {
			errors.baths = "No. of Bathrooms is required!";
		}
		if (!values.sqft) {
			errors.sqft = "Area is required!";
		}
		if (!values.builtYear) {
			errors.builtYear = "Built Year is required!";
		}
		if (!values.parkingSpaces) {
			errors.parkingSpaces = "No. of Parking Spaces is required!";
		}
		if (!values.roomCount) {
			errors.roomCount = "Room Count is required!";
		}
		if (!values.location) {
			errors.location = "Address is required!";
		}
		return errors;
	};
	const iImageHanlder = () => {
		const storageRef = ref(storage, `property/${iImage.name}`);
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
					setpropDetails((prev) => {
						return { ...prev, propertyImage: downloadURL };
					});
				});
			}
		);
	};
	return (
		<div>
			<Navbar />

			<div class="breadcrumb-wrap">
				<div class="breadcrumb-wrap">
					<div class="container">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item">
									<a href="/">Home</a>
								</li>
								<li class="breadcrumb-item active" aria-current="page">
									Post Property
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
										<h2>Add Property</h2>
										<form
											id="postadd"
											class="form-horizontal"
											onSubmit={addPostHandler}
										>
											<div class="form-group">
												<label htmlFor="addcategory" class="control-label">
													Category
													<strong class="rtcl-required">*</strong>
												</label>
												<select
													class="form-select"
													aria-label="addcategory"
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, category: e.target.value };
														});
													}}
												>
													<option value="Rent">Rent</option>
													<option value="Buy">Buy</option>
												</select>
											</div>
											<div class="form-group">
												<label htmlFor="addtype" class="control-label">
													Type
													<strong class="rtcl-required">*</strong>
												</label>
												<select
													class="form-select"
													aria-label="addtype"
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, type: e.target.value };
														});
													}}
												>
													<option value="Family House">Family House</option>
													<option value="Apartment">Apartment</option>
												</select>
											</div>
											<div class="form-group">
												<label
													htmlFor="Userimage"
													// style={{ fontSize: "18px", color: "#309255" }}
												>
													Property Image
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
												<label htmlFor="title" class="control-label">
													Title
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="title"
													id="title"
													class="form-control"
													required=""
													value={propDetails.title}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, title: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.title}</p>
											<div class="form-group">
												<label htmlFor="overview" class="control-label">
													Overview
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="textarea"
													name="overview"
													id="overview"
													class="form-control"
													required=""
													value={propDetails.overview}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, overview: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.overview}</p>
											<div class="form-group">
												<label htmlFor="address" class="control-label">
													Address
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="text"
													name="address"
													id="address"
													class="form-control"
													required=""
													value={propDetails.location}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, location: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.location}</p>
											<div class="form-group">
												<label htmlFor="price" class="control-label">
													Price
													<strong class="rtcl-required">*</strong>
												</label>
												<input
													type="number"
													name="price"
													id="price"
													class="form-control"
													required=""
													value={propDetails.price}
													onChange={(e) => {
														setpropDetails((prev) => {
															return { ...prev, price: e.target.value };
														});
													}}
												/>
											</div>
											<p style={{ color: "red" }}>{formErrors.price}</p>
											<div class="container">
												<div class="row">
													<div class="col-sm">
														<div class="form-check form-switch">
															<input
																class="form-check-input"
																type="checkbox"
																id="tvcable"
																value={propDetails.tvCable}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return {
																			...prev,
																			tvCable: e.target.checked,
																		};
																	});
																}}
															/>
															<label class="form-check-label" for="tvcable">
																TV Cable
															</label>
														</div>
													</div>
													<div class="col-sm">
														<div class="form-check form-switch">
															<input
																class="form-check-input"
																type="checkbox"
																id="barbeque"
																value={propDetails.barbeque}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return {
																			...prev,
																			barbeque: e.target.checked,
																		};
																	});
																}}
															/>
															<label class="form-check-label" for="barbeque">
																Barbeque
															</label>
														</div>
													</div>
													<div class="col-sm">
														<div class="form-check form-switch">
															<input
																class="form-check-input"
																type="checkbox"
																id="ac"
																value={propDetails.ac}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return { ...prev, ac: e.target.checked };
																	});
																}}
															/>
															<label class="form-check-label" for="ac">
																AC
															</label>
														</div>
													</div>
												</div>
											</div>
											<div class="container">
												<div class="row">
													<div class="col-sm">
														<div class="form-check form-switch">
															<input
																class="form-check-input"
																type="checkbox"
																id="lawn"
																value={propDetails.lawn}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return { ...prev, lawn: e.target.checked };
																	});
																}}
															/>
															<label class="form-check-label" for="lawn">
																Lawn
															</label>
														</div>
													</div>
													<div class="col-sm">
														<div class="form-check form-switch">
															<input
																class="form-check-input"
																type="checkbox"
																id="laundry"
																value={propDetails.laundry}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return {
																			...prev,
																			laundry: e.target.checked,
																		};
																	});
																}}
															/>
															<label class="form-check-label" for="laundry">
																Laundry
															</label>
														</div>
													</div>
													<div class="col-sm">
														<div class="form-check form-switch">
															<input
																class="form-check-input"
																type="checkbox"
																id="cctv"
																value={propDetails.ccCam}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return { ...prev, ccCam: e.target.checked };
																	});
																}}
															/>
															<label class="form-check-label" for="cctv">
																CCTV
															</label>
														</div>
													</div>
												</div>
											</div>

											<div class="container">
												<div class="row">
													<div class="col-sm">
														<div class="form-group">
															<label htmlFor="beds" class="control-label">
																No. of Bedrooms{" "}
																<strong class="rtcl-required">*</strong>
															</label>
															<input
																type="number"
																name="beds"
																id="beds"
																class="form-control"
																required=""
																value={propDetails.beds}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return { ...prev, beds: e.target.value };
																	});
																}}
															/>
														</div>
														<p style={{ color: "red" }}>{formErrors.beds}</p>
													</div>
													<div class="col-sm">
														<div class="form-group">
															<label htmlFor="baths" class="control-label">
																No. of Bathrooms{" "}
																<strong class="rtcl-required">*</strong>
															</label>
															<input
																type="number"
																name="baths"
																id="baths"
																class="form-control"
																required=""
																value={propDetails.baths}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return { ...prev, baths: e.target.value };
																	});
																}}
															/>
														</div>
														<p style={{ color: "red" }}>{formErrors.baths}</p>
													</div>
												</div>
												<div class="row">
													<div class="col-sm">
														<div class="form-group">
															<label htmlFor="roomCount" class="control-label">
																No. of Rooms{" "}
																<strong class="rtcl-required">*</strong>
															</label>
															<input
																type="number"
																name="roomCount"
																id="roomCount"
																class="form-control"
																required=""
																value={propDetails.roomCount}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return {
																			...prev,
																			roomCount: e.target.value,
																		};
																	});
																}}
															/>
														</div>
														<p style={{ color: "red" }}>
															{formErrors.roomCount}
														</p>
													</div>
													<div class="col-sm">
														<div class="form-group">
															<label
																htmlFor="parkingSpaces"
																class="control-label"
															>
																No. of Parking Space{" "}
																<strong class="rtcl-required">*</strong>
															</label>
															<input
																type="number"
																name="parkingSpaces"
																id="parkingSpaces"
																class="form-control"
																required=""
																value={propDetails.parkingSpaces}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return {
																			...prev,
																			parkingSpaces: e.target.value,
																		};
																	});
																}}
															/>
														</div>
														<p style={{ color: "red" }}>
															{formErrors.parkingSpaces}
														</p>
													</div>
												</div>
												<div class="row">
													<div class="col-sm">
														<div class="form-group">
															<label htmlFor="sqft" class="control-label">
																Area (in sqft){" "}
																<strong class="rtcl-required">*</strong>
															</label>
															<input
																type="number"
																name="sqft"
																id="sqft"
																class="form-control"
																required=""
																value={propDetails.sqft}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return { ...prev, sqft: e.target.value };
																	});
																}}
															/>
														</div>
														<p style={{ color: "red" }}>{formErrors.sqft}</p>
													</div>
													<div class="col-sm">
														<div class="form-group">
															<label htmlFor="builtyear" class="control-label">
																Built Year{" "}
																<strong class="rtcl-required">*</strong>
															</label>
															<input
																type="number"
																name="builtyear"
																id="builtyear"
																class="form-control"
																required=""
																value={propDetails.builtYear}
																onChange={(e) => {
																	setpropDetails((prev) => {
																		return {
																			...prev,
																			builtYear: e.target.value,
																		};
																	});
																}}
															/>
														</div>
														<p style={{ color: "red" }}>
															{formErrors.builtYear}
														</p>
													</div>
												</div>
											</div>

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
												>
													Add Property{" "}
												</Button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<ScrollButton scrollState={scrollState} />

				<Footer />
			</div>
		</div>
	);
};
export default AddPost;
