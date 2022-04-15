import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteProperty,
	fetchProperty,
	fetchPropertyForUser,
	updateProperty,
} from "../../store/actions/propertiesAction";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./propListing.css";
import { Modal } from "react-bootstrap";
import { storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ProgressBar, Button } from "react-bootstrap";
import ScrollButton from "../scrollToTop";
const PropListings = () => {
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
	const [isClick, setIsClick] = useState(false);
	const dispatch = useDispatch();
	const [edit, setEdit] = useState(false);

	const [show, setShow] = useState(false);
	const [formErrors, setFormErrors] = useState({});

	const [iImage, setiImage] = useState(null);

	const [iprogress, setIProgress] = useState(0);

	const id = localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo"))._id
		: null;
	const [data, setData] = useState();
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

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const fetchUserPropertyReducer = useSelector(
		(state) => state.fetchUserPropertyReducer
	);


	const { loading, error, userPropertiesData } = fetchUserPropertyReducer;
	useEffect(() => {
		dispatch(fetchPropertyForUser(id));
	}, [dispatch]);


	const handleDelete = (currId) => {
		dispatch(deleteProperty(currId)).then(() => {
			dispatch(fetchPropertyForUser(id));
		});
	};
	const handleEdit = () => {
		dispatch(updateProperty(data?._id, propDetails)).then(()=>{
            			dispatch(fetchPropertyForUser(id));

        })
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

			<div class="breadcrumb-wrap breadcrumb-wrap-2">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<a href="/">Home</a>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Property
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<section class="half-map-wrap1" style={{ padding: "30px 0px 30px 0px" }}>
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
					<div class="container-fluid">
						<div class="row">
							<div class="col-xl-6">
								<div class="property-wrap3">
									<div class="row justify-content-center">
										<div class="col-lg-12 col-md-12">
											<div class="item-shorting-box">
												<div class="shorting-title">
													<h4 class="item-title">
														Showing {userPropertiesData?.length} of{" "}
														{userPropertiesData?.length} results
													</h4>
												</div>
												<div class="grid-button">
													<ul class="nav nav-tabs" role="tablist">
														<li class="nav-item">
															<Link
																class="nav-link active"
																data-bs-toggle="tab"
																to="#mylisting"
															>
																<i class="fas fa-th"></i>
															</Link>
														</li>
														<li class="nav-item">
															<Link
																class="nav-link"
																data-bs-toggle="tab"
																to="#reviews"
															>
																<i class="fas fa-list-ul"></i>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div class="tab-style-1 tab-style-3">
										<div class="tab-content" id="myTabContent">
											<div
												class="tab-pane fade show active"
												id="mylisting"
												role="tabpanel"
											>
												<div class="row justify-content-center">
													{userPropertiesData?.map((currEle) => {
														return (
															<div
																class="col-xl-6 col-lg-6 col-md-6"
																key={currEle._id}
															>
																<div
																	class="property-box2 wow animated fadeInUp"
																	data-wow-delay=".3s"
																>
																	<div class="item-img">
																		<Link to="/singleproperty">
																			<img
																				src={currEle.propertyImage}
																				alt="blog"
																				style={{
																					height: "360px",
																					width: "660px",
																				}}
																				width="660"
																				height="440"
																			/>
																		</Link>
																		<div class="item-category-box1">
																			<div class="item-category">
																				For {currEle.category}
																			</div>
																		</div>
																		<div class="rent-price">
																			<div class="item-price">
																				${currEle.price}
																				<span>
																					<i>/</i>mo
																				</span>
																			</div>
																		</div>
																		<div class="react-icon">
																			<ul>
																				<li>
																					<Link
																						to="favourite.html"
																						data-bs-toggle="tooltip"
																						data-bs-placement="top"
																						title="Favourites"
																					>
																						<i class="flaticon-heart"></i>
																					</Link>
																				</li>
																				<li>
																					<Link
																						to="compare.html"
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
																		<Link to="single-listing1.html">
																			{currEle.type}
																		</Link>
																	</div>
																	<div class="item-content">
																		<div class="verified-area">
																			<h3 class="item-title">
																				<Link to="single-listing1.html">
																					{currEle.title}
																				</Link>
																			</h3>
																		</div>
																		<div class="location-area">
																			<i class="flaticon-maps-and-flags"></i>
																			{currEle.location}
																		</div>
																		<div class="item-categoery3">
																			<ul>
																				<li>
																					<i class="flaticon-bed"></i>Beds:{" "}
																					{currEle.beds}
																				</li>
																				<li>
																					<i class="flaticon-shower"></i>Baths:{" "}
																					{currEle.baths}
																				</li>
																				<li>
																					<i class="flaticon-two-overlapping-square"></i>
																					{currEle.sqft} Sqft
																				</li>
																			</ul>
																		</div>
																		<div
																			style={{
																				display: "flex",
																				justifyContent: "space-between",
																				alignItems: "center",
																			}}
																		>
																			<Button
																				onClick={() => {
																					setData(currEle);
																					setShow(true);
																				}}
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
																					marginRight: "10px",
																				}}
																			>
																				<FiEdit
																					size={20}
																					style={{ marginRight: "10px" }}
																				/>
																				Edit
																			</Button>
																			<Button
																				onClick={() => {
																					handleDelete(currEle._id);
																				}}
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
																				<FiTrash2
																					size={20}
																					style={{ marginRight: "10px" }}
																				/>
																				Delete
																			</Button>
																			{/* <FiEdit size={20} className="icon" />
																			<FiTrash2 size={20} className="icon" /> */}
																		</div>
																	</div>
																</div>
															</div>
														);
													})}
												</div>
												<Modal
													show={show}
													onHide={handleClose} // {...props}
													size="lg"
													aria-labelledby="contained-modal-title-vcenter"
													centered
												>
													<Modal.Header closeButton>
														<Modal.Title id="contained-modal-title-vcenter">
															Edit Property{" "}
														</Modal.Title>
													</Modal.Header>
													<Modal.Body>
														<div class="container">
															<div class="row">
																<div class="col-lg-12 col-sm-12 col-12">
																	<div class="page-content-block">
																		<div class="col-md-12 rtcl-login-form-wrap">
																			{/* <h2>Add Property</h2> */}
																			<form
																				id="postadd"
																				class="form-horizontal"
																				// onSubmit={addPostHandler}
																			>
																				<div class="form-group">
																					<label
																						htmlFor="addcategory"
																						class="control-label"
																					>
																						Category
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>
																					<select
																						class="form-select"
																						aria-label="addcategory"
																						disabled={!edit}
																						value={
																							edit
																								? propDetails.category
																								: data?.category
																						}
																						onChange={(e) => {
																							setpropDetails((prev) => {
																								return {
																									...prev,
																									category: e.target.value,
																								};
																							});
																						}}
																					>
																						<option value="Rent">Rent</option>
																						<option value="Buy">Buy</option>
																					</select>
																				</div>
																				<div class="form-group">
																					<label
																						htmlFor="addtype"
																						class="control-label"
																					>
																						Type
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>
																					<select
																						class="form-select"
																						aria-label="addtype"
																						disabled={!edit}
																						value={
																							edit
																								? propDetails.type
																								: data?.type
																						}
																						onChange={(e) => {
																							setpropDetails((prev) => {
																								return {
																									...prev,
																									type: e.target.value,
																								};
																							});
																						}}
																					>
																						<option value="Family House">
																							Family House
																						</option>
																						<option value="Apartment">
																							Apartment
																						</option>
																					</select>
																				</div>
																				<div class="form-group">
																					<label
																						htmlFor="Userimage"
																						// style={{ fontSize: "18px", color: "#309255" }}
																					>
																						Property Image
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>

																					<input
																						readOnly={!edit}
																						type="file"
																						id="Userimage"
																						className="form-control"
																						name="Instructor"
																						accept=".jpg,.jpeg,.png"
																						// alt='courseImg'
																						style={{
																							marginTop: "10px",
																						}}
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
																							style={{
																								marginTop: "10px",
																							}}
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
																						{iprogress === 100
																							? "Uploaded"
																							: "Upload"}
																					</Button>
																				</div>
																				<div class="form-group">
																					<label
																						htmlFor="title"
																						class="control-label"
																					>
																						Title
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>
																					<input
																						type="text"
																						name="title"
																						id="title"
																						class="form-control"
																						required
																						readOnly={!edit}
																						value={
																							edit
																								? propDetails.title
																								: data?.title
																						}
																						onChange={(e) => {
																							setpropDetails((prev) => {
																								return {
																									...prev,
																									title: e.target.value,
																								};
																							});
																						}}
																					/>
																				</div>
																				<p style={{ color: "red" }}>
																					{/* {formErrors.title}  */}
																				</p>
																				<div class="form-group">
																					<label
																						htmlFor="overview"
																						class="control-label"
																					>
																						Overview
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>
																					<input
																						type="textarea"
																						name="overview"
																						id="overview"
																						class="form-control"
																						required
																						readOnly={!edit}
																						value={
																							edit
																								? propDetails.overview
																								: data?.overview
																						}
																						onChange={(e) => {
																							setpropDetails((prev) => {
																								return {
																									...prev,
																									overview: e.target.value,
																								};
																							});
																						}}
																					/>
																				</div>
																				<p style={{ color: "red" }}>
																					{/* {formErrors.overview} */}
																				</p>
																				<div class="form-group">
																					<label
																						htmlFor="address"
																						class="control-label"
																					>
																						Address
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>
																					<input
																						type="text"
																						name="address"
																						id="address"
																						class="form-control"
																						required
																						readOnly={!edit}
																						value={
																							edit
																								? propDetails.location
																								: data?.location
																						}
																						onChange={(e) => {
																							setpropDetails((prev) => {
																								return {
																									...prev,
																									location: e.target.value,
																								};
																							});
																						}}
																					/>
																				</div>
																				<p style={{ color: "red" }}>
																					{/* {formErrors.location} */}
																				</p>
																				<div class="form-group">
																					<label
																						htmlFor="price"
																						class="control-label"
																					>
																						Price
																						<strong class="rtcl-required">
																							*
																						</strong>
																					</label>
																					<input
																						type="number"
																						name="price"
																						id="price"
																						class="form-control"
																						required
																						readOnly={!edit}
																						value={
																							edit
																								? propDetails.price
																								: data?.price
																						}
																						onChange={(e) => {
																							setpropDetails((prev) => {
																								return {
																									...prev,
																									price: e.target.value,
																								};
																							});
																						}}
																					/>
																				</div>
																				<p style={{ color: "red" }}>
																					{/* {formErrors.price} */}
																				</p>
																				<div class="container">
																					<div class="row">
																						<div class="col-sm">
																							<div
																								class="form-check form-switch"
																								style={{
																									display: "flex",
																									alignItems: "center",
																								}}
																							>
																								<input
																									class="form-check-input"
																									type="checkbox"
																									readOnly={!edit}
																									style={{ marginRight: "5px" }}
																									id="tvcable"
																									checked={
																										edit
																											? propDetails.tvCable
																											: data?.tvCable
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												tvCable:
																													e.target.checked,
																											};
																										});
																									}}
																								/>
																								<label
																									class="form-check-label"
																									for="tvcable"
																								>
																									TV Cable
																								</label>
																							</div>
																						</div>
																						<div class="col-sm">
																							<div
																								class="form-check form-switch"
																								style={{
																									display: "flex",
																									alignItems: "center",
																								}}
																							>
																								<input
																									class="form-check-input"
																									type="checkbox"
																									style={{ marginRight: "8px" }}
																									id="barbeque"
																									readOnly={!edit}
																									checked={
																										edit
																											? propDetails.barbeque
																											: data?.barbeque
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												barbeque:
																													e.target.checked,
																											};
																										});
																									}}
																								/>
																								<label
																									class="form-check-label"
																									for="barbeque"
																								>
																									Barbeque
																								</label>
																							</div>
																						</div>
																						<div class="col-sm">
																							<div
																								class="form-check form-switch"
																								style={{
																									display: "flex",
																									alignItems: "center",
																								}}
																							>
																								<input
																									class="form-check-input"
																									type="checkbox"
																									style={{ marginRight: "5px" }}
																									id="ac"
																									readOnly={!edit}
																									checked={
																										edit
																											? propDetails.ac
																											: data?.ac
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												ac: e.target.checked,
																											};
																										});
																									}}
																								/>
																								<label
																									class="form-check-label"
																									for="ac"
																								>
																									AC
																								</label>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div class="container">
																					<div class="row">
																						<div class="col-sm">
																							<div
																								class="form-check form-switch"
																								style={{
																									display: "flex",
																									alignItems: "center",
																								}}
																							>
																								<input
																									class="form-check-input"
																									type="checkbox"
																									style={{ marginRight: "5px" }}
																									readOnly={!edit}
																									id="lawn"
																									checked={
																										edit
																											? propDetails.lawn
																											: data?.lawn
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												lawn: e.target.checked,
																											};
																										});
																									}}
																								/>
																								<label
																									class="form-check-label"
																									for="lawn"
																								>
																									Lawn
																								</label>
																							</div>
																						</div>
																						<div class="col-sm">
																							<div
																								class="form-check form-switch"
																								style={{
																									display: "flex",
																									alignItems: "center",
																								}}
																							>
																								<input
																									class="form-check-input"
																									type="checkbox"
																									style={{ marginRight: "5px" }}
																									id="laundry"
																									readOnly={!edit}
																									checked={
																										edit
																											? propDetails.laundry
																											: data?.laundry
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												laundry:
																													e.target.checked,
																											};
																										});
																									}}
																								/>
																								<label
																									class="form-check-label"
																									for="laundry"
																								>
																									Laundry
																								</label>
																							</div>
																						</div>
																						<div class="col-sm">
																							<div
																								class="form-check form-switch"
																								style={{
																									display: "flex",
																									alignItems: "center",
																								}}
																							>
																								<input
																									class="form-check-input"
																									type="checkbox"
																									style={{ marginRight: "5px" }}
																									id="cctv"
																									readOnly={!edit}
																									checked={
																										edit
																											? propDetails.ccCam
																											: data?.ccCam
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												ccCam: e.target.checked,
																											};
																										});
																									}}
																								/>
																								<label
																									class="form-check-label"
																									for="cctv"
																								>
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
																								<label
																									htmlFor="beds"
																									class="control-label"
																								>
																									No. of Bedrooms{" "}
																									<strong class="rtcl-required">
																										*
																									</strong>
																								</label>
																								<input
																									type="number"
																									name="beds"
																									id="beds"
																									class="form-control"
																									required
																									readOnly={!edit}
																									value={
																										edit
																											? propDetails.beds
																											: data?.beds
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												beds: e.target.value,
																											};
																										});
																									}}
																								/>
																							</div>
																							<p
																								style={{
																									color: "red",
																								}}
																							>
																								{formErrors.beds}
																							</p>
																						</div>
																						<div class="col-sm">
																							<div class="form-group">
																								<label
																									htmlFor="baths"
																									class="control-label"
																								>
																									No. of Bathrooms{" "}
																									<strong class="rtcl-required">
																										*
																									</strong>
																								</label>
																								<input
																									type="number"
																									name="baths"
																									readOnly={!edit}
																									id="baths"
																									class="form-control"
																									required
																									value={
																										edit
																											? propDetails.baths
																											: data?.baths
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												baths: e.target.value,
																											};
																										});
																									}}
																								/>
																							</div>
																							<p
																								style={{
																									color: "red",
																								}}
																							>
																								{formErrors.baths}
																							</p>
																						</div>
																					</div>
																					<div class="row">
																						<div class="col-sm">
																							<div class="form-group">
																								<label
																									htmlFor="roomCount"
																									class="control-label"
																								>
																									No. of Rooms{" "}
																									<strong class="rtcl-required">
																										*
																									</strong>
																								</label>
																								<input
																									type="number"
																									name="roomCount"
																									id="roomCount"
																									class="form-control"
																									required
																									readOnly={!edit}
																									value={
																										edit
																											? propDetails.roomCount
																											: data?.roomCount
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												roomCount:
																													e.target.value,
																											};
																										});
																									}}
																								/>
																							</div>
																							<p
																								style={{
																									color: "red",
																								}}
																							>
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
																									<strong class="rtcl-required">
																										*
																									</strong>
																								</label>
																								<input
																									type="number"
																									name="parkingSpaces"
																									id="parkingSpaces"
																									class="form-control"
																									required
																									readOnly={!edit}
																									value={
																										edit
																											? propDetails.parkingSpaces
																											: data?.parkingSpaces
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												parkingSpaces:
																													e.target.value,
																											};
																										});
																									}}
																								/>
																							</div>
																							<p
																								style={{
																									color: "red",
																								}}
																							>
																								{formErrors.parkingSpaces}
																							</p>
																						</div>
																					</div>
																					<div class="row">
																						<div class="col-sm">
																							<div class="form-group">
																								<label
																									htmlFor="sqft"
																									class="control-label"
																								>
																									Area (in sqft){" "}
																									<strong class="rtcl-required">
																										*
																									</strong>
																								</label>
																								<input
																									type="number"
																									name="sqft"
																									id="sqft"
																									class="form-control"
																									required
																									readOnly={!edit}
																									value={
																										edit
																											? propDetails.sqft
																											: data?.sqft
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												sqft: e.target.value,
																											};
																										});
																									}}
																								/>
																							</div>
																							<p
																								style={{
																									color: "red",
																								}}
																							>
																								{formErrors.sqft}
																							</p>
																						</div>
																						<div class="col-sm">
																							<div class="form-group">
																								<label
																									htmlFor="builtyear"
																									class="control-label"
																								>
																									Built Year{" "}
																									<strong class="rtcl-required">
																										*
																									</strong>
																								</label>
																								<input
																									type="number"
																									name="builtyear"
																									id="builtyear"
																									class="form-control"
																									required
																									readOnly={!edit}
																									value={
																										edit
																											? propDetails.builtYear
																											: data?.builtYear
																									}
																									onChange={(e) => {
																										setpropDetails((prev) => {
																											return {
																												...prev,
																												builtYear:
																													e.target.value,
																											};
																										});
																									}}
																								/>
																							</div>
																							<p
																								style={{
																									color: "red",
																								}}
																							>
																								{formErrors.builtYear}
																							</p>
																						</div>
																					</div>
																				</div>
																			</form>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														{edit ? (
															<div>
																<Button
																	style={{
																		backgroundColor: "#00c194",
																		border: 0,
																		height: "30px",
																		fontSize: "16px",
																		padding: "20px ",
																		display: "flex",
																		alignItems: "center",
																		justifyContent: "center",
																		marginBottom: "10px",
																	}}
																	variant="btn btn-secondary btn-outline w-100"
																	onClick={() => {
																		handleClose();
																		setEdit(false);
																	}}
																>
																	Cancel
																</Button>
																<Button
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
																	onClick={() => {
																		handleEdit();
																		handleClose();
																		setEdit(false);
																	}}
																>
																	Save Changes
																</Button>
															</div>
														) : (
															<Button
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
																onClick={() => setEdit(true)}
															>
																Edit
															</Button>
														)}
													</Modal.Body>
												</Modal>

												<div class="pagination-style-1">
													<ul class="pagination">
														<li class="page-item">
															<Link
																class="page-link"
																to="with-sidebar2.html"
																aria-label="Previous"
															>
																<span aria-hidden="true">&laquo;</span>
																<span class="sr-only">Previous</span>
															</Link>
														</li>
														<li class="page-item">
															<Link
																class="page-link active"
																to="with-sidebar2.html"
															>
																1
															</Link>
														</li>
														<li class="page-item">
															<Link class="page-link" to="with-sidebar2.html">
																2
															</Link>
														</li>
														<li class="page-item">
															<Link class="page-link" to="with-sidebar2.html">
																3
															</Link>
														</li>
														<li class="page-item">
															<Link class="page-link" to="with-sidebar2.html">
																4
															</Link>
														</li>
														<li class="page-item">
															<Link
																class="page-link"
																to="with-sidebar2.html"
																aria-label="Next"
															>
																<span aria-hidden="true">&raquo;</span>
																<span class="sr-only">Next</span>
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-xl-6">
								<div class="location-img">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.9440088864!2d90.42637295!3d23.774608949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640153797321!5m2!1sen!2sbd"
										width="907"
										height="2368"
										title="map"
										style={{ border: "0" }}
										allowFullScreen=""
										loading="lazy"
									/>
								</div>
							</div>
						</div>
					</div>
				)}
			</section>
			<ScrollButton scrollState={scrollState} />

			<Footer />
		</div>
	);
};

export default PropListings;
