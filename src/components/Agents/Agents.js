import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Data from "../../Apis/agentsApi";

const Agents = () => {
  return (
    <div>
      <Navbar />

      {/* <!--=====================================-->
    <!--=   Breadcrumb     Start            =-->
    <!--=====================================--> */}

      <div class="breadcrumb-wrap">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Agent
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* <!--=====================================-->
    <!--=   Agent     Start                 =-->
    <!--=====================================--> */}

      <section class="agent-wrap1 agent-wrap3">
        <div class="container">
          <div class="row gutters-40">
            <div class="col-lg-8">
              <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                  <div class="item-shorting-box">
                    <div class="shorting-title">
                      <h4 class="item-title">9 Search Results Found</h4>
                    </div>
                    <div class="item-shorting-box-2 item-shorting-box-3">
                      <div class="by-shorting">
                        <div class="shorting">Sort by:</div>
                        <select class="select single-select mr-0">
                          <option value="1">Default</option>
                          <option value="2">High Price</option>
                          <option value="3">Medium Price</option>
                          <option value="3">Low Price</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                {Data.map((currEle) => {
                  return (
                    <div class="col-lg-6 col-md-6" key={currEle.id}>
                      <div
                        class="team-box1 team-box3 wow fadeInUp"
                        data-wow-delay=".6s"
                      >
                        <div class="item-img">
                          <a href="agent-lists1.html">
                            <img
                              src={currEle.image}
                              alt="team"
                              width="475"
                              height="511"
                            />
                          </a>
                          <ul class="team-social-1">
                            <li class="social-item">
                              <a
                                href="https://radiustheme.com/"
                                target="_blank"
                                rel="noreferrer"
                                class="social-hover-icon social-link"
                              >
                                <i class="fas fa-share-alt"></i>
                              </a>
                              <ul class="team-social-dropdown">
                                <li class="social-item">
                                  <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="social-link"
                                  >
                                    <i class="fab fa-facebook-f"></i>
                                  </a>
                                </li>
                                <li class="social-item">
                                  <a
                                    href="https://twitter.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="social-link"
                                  >
                                    <i class="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li class="social-item">
                                  <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    class="social-link"
                                  >
                                    <i class="fab fa-linkedin-in"></i>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <div class="category-box">
                            <div class="item-category">
                              <a href="agent-lists1.html">
                                <span>{currEle.listings}</span> Listings
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="item-content">
                          <div class="item-title">
                            <h3>
                              <a href="agent-lists1.html">{currEle.name}</a>
                            </h3>
                            <h4 class="item-subtitle">
                              <a href="agency-lists1.html">{currEle.agency}</a>
                            </h4>
                          </div>
                          <div class="item-contact">
                            <div class="item-icon">
                              <i class="fas fa-phone-alt"></i>
                            </div>
                            <div class="item-phn-no">
                              Call: +<span>{currEle.phone}</span>{" "}
                            </div>
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
                    <a
                      class="page-link"
                      href="with-sidebar2.html"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link active" href="with-sidebar2.html">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="with-sidebar2.html">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="with-sidebar2.html">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="with-sidebar2.html">
                      4
                    </a>
                  </li>
                  <li class="page-item">
                    <a
                      class="page-link"
                      href="with-sidebar2.html"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 widget-break-lg sidebar-widget">
              <div class="widget widget-advanced-search widget-advanced-search-2">
                <h3 class="widget-subtitle">Advanced Search</h3>
                <form
                  action="https://radiustheme.com/demo/html/homlisti/index.html"
                  class="map-forms map-form-style-2"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="What are you looking for?"
                  />
                  <div class="row">
                    <div class="col-lg-12 pl-15 mb-0">
                      <div class="rld-single-select">
                        <select class="select single-select mr-0">
                          <option value="1">Select City</option>
                          <option value="2">Dhaka</option>
                          <option value="3">Melbourne</option>
                          <option value="3">New Delhi</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <div class="rating-part">
                  <span>Ratings: </span>
                  <ul class="item-rating">
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="tr-color">
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="tr-color">
                      <i class="fas fa-star"></i>
                    </li>
                  </ul>
                </div>
                <div class="advanced-button">
                  <a href="single-listing1.html" class="item-btn">
                    Search<i class="fas fa-search"></i>
                  </a>
                </div>
              </div>
              <div class="widget widget-agent-box1">
                <h3 class="widget-subtitle">Featured Agents</h3>
                <div class="team-box1 team-box4">
                  <div class="item-img">
                    <a href="agent-lists1.html">
                      <img
                        src="img/team/team7.png"
                        alt="team"
                        width="630"
                        height="495"
                      />
                    </a>
                    <ul class="team-social-1">
                      <li class="social-item">
                        <a
                          href="https://www.ushareit.com/"
                          class="social-hover-icon social-link"
                        >
                          <i class="fas fa-share-alt"></i>
                        </a>
                        <ul class="team-social-dropdown">
                          <li class="social-item">
                            <a
                              href="https://www.facebook.com/"
                              class="social-link"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li class="social-item">
                            <a
                              href="https://twitter.com/"
                              class="social-link"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li class="social-item">
                            <a
                              href="https://www.linkedin.com/"
                              class="social-link"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i class="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div class="category-box">
                      <div class="item-category">
                        <a href="single-agent1.html">05 Listings</a>
                      </div>
                    </div>
                  </div>
                  <div class="item-content">
                    <div class="item-title">
                      <h3>
                        <a href="agent-lists1.html">Helene Powers</a>
                      </h3>
                      <div class="item-details">
                        <h4 class="item-subtitle">RadiusTheme</h4>
                        <ul class="item-rating">
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li>
                            <i class="fas fa-star"></i>
                          </li>
                          <li class="rating-count">(15)</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Although brokers and agents do similar work brokers are
                      licensed to manage their owner real estate businesses.
                    </p>
                  </div>
                  <div class="item-contact">
                    <div class="item-phn-no">
                      <i class="fas fa-phone-alt"></i>Call:{" "}
                      <span>+123 699 7700</span>
                    </div>
                    <div class="item-icon">
                      <i class="far fa-envelope"></i>E-mail :{" "}
                      <span>andren@gmail.com</span>
                    </div>
                  </div>
                  <ul class="small-circle">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div class="widget widget-post widget-post-style-2">
                <div class="item-img">
                  <img
                    src="img/team/team9.jpg"
                    alt="widget"
                    width="690"
                    height="700"
                  />
                </div>
                <div class="item-content">
                  <h4 class="item-title item-title-large">
                    Do you want to join our real estate network?
                  </h4>
                  <div class="post-button">
                    <a href="agent-lists1.html" class="item-btn">
                      Become An Agent
                    </a>
                  </div>
                </div>
              </div>
              <div class="widget widget-listing-box1">
                <h3 class="widget-subtitle widget-list-subtitle">
                  Latest Listing
                </h3>
                <div class="widget-listing">
                  <div class="item-img">
                    <a href="single-agent1.html">
                      <img
                        src="img/blog/widget2.jpg"
                        alt="widget"
                        width="120"
                        height="102"
                      />
                    </a>
                  </div>
                  <div class="item-content">
                    <h5 class="item-title">
                      <a href="single-listing1.html">
                        House Highland Ave Los Angeles
                      </a>
                    </h5>
                    <div class="location-area">
                      <i class="flaticon-maps-and-flags"></i>Downey, California
                    </div>
                    <div class="item-price">
                      $3,000<span>/mo</span>
                    </div>
                  </div>
                </div>
                <div class="widget-listing">
                  <div class="item-img">
                    <a href="single-agent1.html">
                      <img
                        src="img/blog/widget3.jpg"
                        alt="widget"
                        width="120"
                        height="102"
                      />
                    </a>
                  </div>
                  <div class="item-content">
                    <h5 class="item-title">
                      <a href="single-listing1.html">
                        House Highland Ave Los Angeles
                      </a>
                    </h5>
                    <div class="location-area">
                      <i class="flaticon-maps-and-flags"></i>Downey, California
                    </div>
                    <div class="item-price">
                      $1,200<span>/mo</span>
                    </div>
                  </div>
                </div>
                <div class="widget-listing no-brd">
                  <div class="item-img">
                    <a href="single-agent1.html">
                      <img
                        src="img/blog/widget4.jpg"
                        alt="widget"
                        width="120"
                        height="102"
                      />
                    </a>
                  </div>
                  <div class="item-content">
                    <h5 class="item-title">
                      <a href="single-listing1.html">
                        House Highland Ave Los Angeles
                      </a>
                    </h5>
                    <div class="location-area">
                      <i class="flaticon-maps-and-flags"></i>Downey, California
                    </div>
                    <div class="item-price">
                      $1,900<span>/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Agents;
