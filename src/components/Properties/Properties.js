import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Data from "../../Apis/propertiesApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperty } from "../../store/actions/propertiesAction";
import ScrollButton from "../scrollToTop";

const Properties = () => {
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
	const [data, setData] = useState();
	const dispatch = useDispatch();
	const fetchPropertyReducer = useSelector(
		(state) => state.fetchPropertyReducer
	);
	const [category, setCategory] = useState(
		window.location.search.split("=")[1]
	);
    const navigate=useNavigate()
	console.log(window.location.search);

	const { loading, error, propertiesData } = fetchPropertyReducer;
	useEffect(() => {
		dispatch(fetchProperty(category));
	}, [dispatch, category]);
	return (
		<div>
			<Navbar />

			<div class="breadcrumb-wrap breadcrumb-wrap-2">
				<div class="container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<Link to="/">Home</Link>
							</li>
							<li class="breadcrumb-item active" aria-current="page">
								Property
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<section class="half-map-wrap1" style={{ padding: "30px 0px 0px 0px" }}>
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
								<form
									action="https://radiustheme.com/demo/html/homlisti//properties"
									class="map-form"
								>
									<input
										type="text"
										class="form-control"
										placeholder="What are you looking for?"
									/>
									<div class="row">
										<div class="col-lg-4 pl-15">
											<div class="rld-single-select">
												<select
													class="select single-select mr-0"
													style={{ width: "fitContent", padding: "0 20px" }}
												>
													<option value="1">Property Type</option>
													<option value="2">Family House</option>
													<option value="3">Apartment</option>
													<option value="3">Condo</option>
												</select>
											</div>
										</div>
										<div class="col-lg-4 pl-15">
											<div class="rld-single-select">
												<select
													class="select single-select mr-0"
													style={{ width: "fitContent", padding: "0 20px" }}
												>
													<option value="1">All Categories</option>
													<option value="2">Rent</option>
													<option value="3">Buy</option>
												</select>
											</div>
										</div>
										<div class="col-lg-4 pl-15">
											<div class="rld-single-select">
												<select
													class="select single-select mr-0"
													style={{ width: "fitContent", padding: "0 20px" }}
												>
													<option value="1">All Cities</option>
													<option value="2">Los Angeles</option>
													<option value="3">Chicago</option>
													<option value="3">Philadelphia</option>
												</select>
											</div>
										</div>
									</div>
								</form>
								<div class="banner-search-wrap banner-search-wrap-2">
									<div class="rld-main-search rld-main-search2">
										<div class="row">
											<div
												class="col-sm-12"
												style={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
												}}
											>
												<div class="rld-progress-box">
													<div class="main-search-field-3">
														{/* <!-- Area Range --> */}
														<div class="price-range-wrapper">
															<div class="range-box">
																<div class="price-label">Price:</div>
																<div
																	id="price-range-filter-4"
																	class="price-range-filter"
																></div>
																<div class="price-filter-wrap d-flex align-items-center">
																	<div class="price-range-select">
																		<div class="price-range range-title">$</div>
																		<div
																			class="price-range"
																			id="price-range-min-4"
																		></div>
																		<div class="price-range"></div>
																		<div
																			class="price-range"
																			id="price-range-max-4"
																		></div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div class="filter-button">
													<div
														class="dropdown-filter"
														onClick={() => {
															setIsClick(!isClick);
														}}
														style={{ marginRight: "20px" }}
													>
														<span>
															<i class="fas fa-sliders-h"></i>
														</span>
													</div>
													<Link
														to="/properties"
														class="filter-btn1 search-btn"
													>
														Search<i class="fas fa-search"></i>
													</Link>
												</div>
												<div
													class={`explore__form-checkbox-list explore__form-checkbox-list2 full-filter ${
														isClick && "filter-block"
													}`}
												>
													<div class="row">
														<div
															class="col-lg-4 col-md-6 py-1 pr-30 pl-0"
															style={{ width: "100%" }}
														>
															{/* <!-- Form Property Status --> */}
															<div class="form-group bed">
																<label class="item-bedrooms">Bedrooms</label>
																<div
																	class="nice-select form-control wide"
																	tabIndex="0"
																>
																	<span class="current">Any</span>
																	<ul class="list">
																		<li data-value="1" class="option selected ">
																			For Sale
																		</li>
																		<li data-value="2" class="option">
																			For Rent
																		</li>
																	</ul>
																</div>
																{/* <!--/ End Form Property Status --> */}
															</div>
															<div
																class="col-lg-4 col-md-6 py-1 pr-30 pl-0 "
																style={{ width: "100%" }}
															>
																{/* <!-- Form Bedrooms --> */}
																<div class="form-group bath">
																	<label class="item-bath">Bathrooms</label>
																	<div
																		class="nice-select form-control wide"
																		tabIndex="0"
																	>
																		<span class="current">Any</span>
																		<ul class="list">
																			<li
																				data-value="1"
																				class="option selected"
																			>
																				1
																			</li>
																			<li data-value="2" class="option">
																				2
																			</li>
																			<li data-value="3" class="option">
																				3
																			</li>
																		</ul>
																	</div>
																</div>
																{/* <!--/ End Form Bedrooms --> */}
															</div>
															<div
																class="col-lg-4 col-md-6 py-1 pl-0 pr-0"
																style={{ width: "100%" }}
															>
																{/* <!-- Form Bathrooms --> */}
																<div class="form-group garage">
																	<label class="item-garage">Garage</label>
																	<div
																		class="nice-select form-control wide"
																		tabIndex="0"
																	>
																		<span class="current">Any</span>
																		<ul class="list">
																			<li
																				data-value="1"
																				class="option selected"
																			>
																				1
																			</li>
																			<li data-value="2" class="option">
																				2
																			</li>
																			<li data-value="3" class="option">
																				3
																			</li>
																		</ul>
																	</div>
																</div>
																{/* <!--/ End Form Bathrooms --> */}
															</div>
															{/* <!-- Price Fields --> */}
															<div class="main-search-field-2 col-12">
																{/* <!-- Area Range --> */}
																<div
																	class="row"
																	style={{
																		display: "flex",
																		alignItems: "center",
																	}}
																>
																	<div class="col-md-6 pl-0">
																		<div class="price-range-wrapper">
																			<div class="range-box">
																				<div
																					class="price-label"
																					style={{ width: "240px" }}
																				>
																					Flat Size:
																				</div>
																				<div
																					id="price-range-filter-5"
																					class="price-range-filter"
																				></div>
																				<div class="price-filter-wrap d-flex align-items-center">
																					<div class="price-range-select">
																						<div
																							class="price-range"
																							id="price-range-min-5"
																						></div>
																						<div class="price-range">-</div>
																						<div
																							class="price-range"
																							id="price-range-max-5"
																						></div>
																						<div class="price-range range-title">
																							sft
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col-md-6 pl-0">
																		<div class="price-range-wrapper">
																			<div class="range-box">
																				<div class="price-label">Distance:</div>
																				<div
																					id="price-range-filter-6"
																					class="price-range-filter"
																				></div>
																				<div class="price-filter-wrap d-flex align-items-center">
																					<div class="price-range-select">
																						<div
																							class="price-range"
																							id="price-range-min-6"
																						></div>
																						<div class="price-range">-</div>
																						<div
																							class="price-range"
																							id="price-range-max-6"
																						></div>
																						<div class="price-range range-title">
																							km
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															{/* <!-- row --> */}
															<div class="row">
																<div class="col-lg-12 col-md-12 col-sm-12 mt-3">
																	<h4 class="text-dark">Amenities</h4>
																	<ul class="no-ul-list third-row">
																		<li>
																			<input
																				id="a-1"
																				class="checkbox-custom"
																				name="a-1"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-1"
																				class="checkbox-custom-label"
																			>
																				Air Condition
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-2"
																				class="checkbox-custom"
																				name="a-2"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-2"
																				class="checkbox-custom-label"
																			>
																				Bedding
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-3"
																				class="checkbox-custom"
																				name="a-3"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-3"
																				class="checkbox-custom-label"
																			>
																				Heating
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-4"
																				class="checkbox-custom"
																				name="a-4"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-4"
																				class="checkbox-custom-label"
																			>
																				Internet
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-5"
																				class="checkbox-custom"
																				name="a-5"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-5"
																				class="checkbox-custom-label"
																			>
																				Microwave
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-6"
																				class="checkbox-custom"
																				name="a-6"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-6"
																				class="checkbox-custom-label"
																			>
																				Smoking Allow
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-7"
																				class="checkbox-custom"
																				name="a-7"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-7"
																				class="checkbox-custom-label"
																			>
																				Terrace
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-8"
																				class="checkbox-custom"
																				name="a-8"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-8"
																				class="checkbox-custom-label"
																			>
																				Balcony
																			</label>
																		</li>
																		<li>
																			<input
																				id="a-9"
																				class="checkbox-custom"
																				name="a-9"
																				type="checkbox"
																			/>
																			<label
																				htmlFor="a-9"
																				class="checkbox-custom-label"
																			>
																				Balcony
																			</label>
																		</li>
																	</ul>
																</div>
															</div>
															{/* <!-- /row --> */}
														</div>
														{/* <!-- /row --> */}
														<div
															class="filter-button"
															style={{ justifyContent: "center" }}
														>
															<Link to="/properties" class="filter-btn1">
																Apply Filter
															</Link>
															<Link
																to="/properties"
																class="filter-btn1 reset-btn"
															>
																Reset Filter<i class="fas fa-redo-alt"></i>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <!--/ End Search Form --> */}
								</div>
								<div class="property-wrap3">
									<div class="row justify-content-center">
										<div class="col-lg-12 col-md-12">
											<div class="item-shorting-box">
												<div class="shorting-title">
													<h4 class="item-title">Showing 1–6 of 12 results</h4>
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
													{propertiesData?.map((currEle) => {
														return (
															<div
																class="col-xl-6 col-lg-6 col-md-6"
																key={currEle._id}
															>
																<div
																	class="property-box2 wow animated fadeInUp"
																	data-wow-delay=".3s"
																>
																	<div
																		class="item-img"
																		onClick={() => {
																			navigate(`/property?id=${currEle._id}`);
																		}}
																	>
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
																	</div>
																	<div class="item-category10">
																		{currEle.type}
																	</div>
																	<div class="item-content">
																		<div class="verified-area">
																			<h3 class="item-title">
																				{currEle.title}
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
																	</div>
																</div>
															</div>
														);
													})}
												</div>
												<div class="pagination-style-1">
													<ul class="pagination">
														<li class="page-item">
															<Link
																class="page-link"
																to="/properties"
																aria-label="Previous"
															>
																<span aria-hidden="true">&laquo;</span>
																<span class="sr-only">Previous</span>
															</Link>
														</li>
														<li class="page-item">
															<Link
																class="page-link active"
																to="/properties"
															>
																1
															</Link>
														</li>
														<li class="page-item">
															<Link class="page-link" to="/properties">
																2
															</Link>
														</li>
														<li class="page-item">
															<Link class="page-link" to="/properties">
																3
															</Link>
														</li>
														<li class="page-item">
															<Link class="page-link" to="/properties">
																4
															</Link>
														</li>
														<li class="page-item">
															<Link
																class="page-link"
																to="/properties"
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

export default Properties;
