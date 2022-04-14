import React from 'react'

const Error = () => {
  return (
    <div>
      {/* <!--=====================================-->
    <!--=   Breadcrumb     Start            =-->
    <!--=====================================--> */}

        <div class="breadcrumb-wrap breadcrumb-wrap-2">
            <div class="container">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">404 Page</li>
                    </ol>
                </nav>
            </div>
        </div>
    {/* <!--=====================================-->
    <!--=   Error     Start                 =-->
    <!--=====================================--> */}

        <section class="error-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="error-box">
                            <div class="shape-img1">
                                <img src="img/figure/error1.png" alt="shape" width="709" height="285" />
                            </div>
                            <h2 class="error-title">Sorry! This Page is  Not Available</h2>
                            <div class="error-button">
                                <a href="/" class="item-btn">Go Back To Home Page</a>
                            </div>
                        </div>
                        <div class="error-shape-list">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Error