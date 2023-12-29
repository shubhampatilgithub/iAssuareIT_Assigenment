import React from 'react'




const App = () => {
  return (
    <>
            <div className="container-fluid m-0 p-0">
                {/* Top Bar */}

                <div style={{ display: "flex", justifyContent: 'space-between', backgroundColor: "#133a75" }}>
                    <div>
                    </div>
                    <div className='me-5 pe-5'>
                        <span style={{ color: "white" }}><i className="fa-solid fa-mobile-screen" style={{ color: "white", fontSize: "10px" }}></i> +91 12345 67890</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ color: "white" }}><i className="fa-solid fa-square-envelope" style={{ color: "white", fontSize: "10px" }}> </i> info@company.com</span>
                    </div>
                </div>

                {/* NavBar  */}

                <nav className="navbar navbar-expand-lg px-5" style={{ height: "50px" }}>
                    <h1 className="navbar-brand ms-5 " style={{ color: "#133a75" }}>LOGO</h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto px-5 fw-bold">
                            <a className="nav-item nav-link" href="#">HOME</a>
                            <a className="nav-item nav-link" href="#">ABOUT US</a>
                            <a className="nav-item nav-link" href="#">SERVICES</a>
                            <a className="nav-item nav-link" href="#">TESTIMONIALS</a>
                            <a className="nav-item nav-link" href="#">BLOGS</a>
                            <a className="nav-item nav-link" href="#" ><span style={{ borderBottom: "2px solid blue" }}>CONTACT</span></a>

                        </div>
                    </div>
                </nav>

                {/* contact us  */}

                <div className="background-img">
                    <div className='pt-5 ps-5'>
                        <h1 className=' pt-5 ps-5' style={{ color: "white" }}>Contact Us</h1>
                        <p className=' pt-2 ps-5' style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
                            sed diam nonummy nibh euismod tincidunt ut laoreet
                        </p>
                        <button type="button " className="btn btn-light text-black fw-bold mt-2 ms-5 mb-5">Home <span><i className="fa-solid fa-angles-right"></i></span> Contact Us </button>
                    </div>
                </div>

            </div>


            {/* form  */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mt-5 ms-5">

                        <h1 className='pt-5 ps-5' style={{ color: "#133a75" }}>Let"s Start <br />Something Great</h1>
                        <p className='pt-2 ps-5'>Proactively customize cross-media schemas rather than high-payoff <br /> the customer service. Uniquely enable extensible niche</p>


                        <div className="row ms-1">
                            <div className="col-lg-6 ms-3 mt-2  ms-5 bg-primary d-flex justify-content-center align-items-center location">
                                <i class="fa-solid fa-location-dot" style={{ color: "white" }}></i>
                            </div>
                            <div className="col-lg-6 " >
                                <p style={{ color: "black" }}> Akshya Nagar 1st Block 1st Cross, <br />
                                    Rammurthy Nagar, <br />
                                    Bangalore-560016</p>
                            </div>
                        </div>

                        <div className="row ms-1">
                            <div className="col-lg-6 ms-3 mt-2  ms-5 bg-primary d-flex justify-content-center align-items-center location">
                                <i class="fa-solid fa-mobile-screen" style={{ color: "white" }}></i>
                            </div>
                            <div className="col-lg-6 mt-3 " >
                                <p style={{ color: "black" }}> +91 12345 67890</p>
                            </div>
                        </div>

                        <div className="row ms-1">
                            <div className="col-lg-6 ms-3 mt-4  ms-5 bg-primary d-flex justify-content-center align-items-center location">
                                <i class="fa-solid fa-square-envelope" style={{ color: "white" }}></i>
                            </div>
                            <div className="col-lg-6 mt-4 " >
                                <p style={{ color: "black" }}> info@company.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 mt-5">
                        <div class="card w-75 my-5 " style={{ backgroundColor: "#1a73e8" }}>
                            <div class="card-body">
                                <h5 class="card-title" style={{color:"white"}}>Need Help?</h5>
                                <p class="card-text" style={{color:"white"}}>Proactively fashion world-class leadership vis-a-vis enterprise e-services. Great strong leadership.</p>
                                <form action="" className='form-group'>
                                    <input type="text" placeholder="Name" className='form-control' />
                                    
                                    <input type="email" placeholder='Email' className='form-control my-3' />
                                    <input type="text" placeholder='Subject' className='form-control my-3' />
                                    <textarea name=""  placeholder="Your Message" id=""style={{width:"100%"}} cols="" rows="4" my-3></textarea>
                                    <button className='btn btn-light w-100 my-3'>SEND INQUIRY</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* map  */}

            <div className="contianer-fluid mt-5" >
                <iframe style={{ width: "100%", height: "250px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15124.237529490065!2d73.92422475000001!3d18.616398649999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1703779046614!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* footer  */}

            <div className="container-fluid " style={{ backgroundColor: "#17478d" }}>

                <div className="row">
                    <div className="col-lg-3 my-5 p-5">
                        <h4 class=""><p style={{ color: "white" }}>FOLLOW US&nbsp;&nbsp;<i class="fa-solid fa-arrow-pointer" style={{fontSize:"10px"}}></i></p></h4>
                        <i className="fa-brands fa-linkedin" style={{ color: "white" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa-solid fa-paper-plane" style={{ backgroundColor: "white", fontSize: "15px", color: "#17478d" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i className="fa-brands fa-twitter" style={{ backgroundColor: "white", fontSize: "15px", color: "#17478d" }}></i>
                        <div className='mt-2'>
                            <span style={{ fontSize: "15px", color: "white" }}> <i class="fa-solid fa-globe" style={{ color: 'white' }}></i>      https://company.com</span>
                        </div>
                    </div>

                    <div className="col-lg-3 my-5 p-5">
                    <h4 class=""><p style={{ color: "white" }}>OUR SERVICES&nbsp;&nbsp;<i class="fa-solid fa-arrow-pointer" style={{fontSize:"10px"}}></i></p></h4>
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span><br />
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span><br />
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span><br />
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span>
                    </div>

                    <div className="col-lg-3 mt-5 p-5" >

                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right mt-5"></i> Lorem ipsum dolor</span><br />
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span><br />
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span><br />
                        <span style={{ color: "white" }}><i className="fa-solid fa-angles-right"></i> Lorem ipsum dolor</span>
                    </div>

                    <div className="col-lg-3 my-5 p-5">
                    <h4 class=""><p style={{ color: "white" }}>GET IN TOUCH&nbsp;&nbsp;<i class="fa-solid fa-arrow-pointer" style={{fontSize:"10px"}}></i></p></h4>

                        <div className="row">
                            <div className="col-md-1" style={{ color: 'white' }}>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="col-md-10" style={{ color: 'white' }}>Akshya Nagar 1st Block 1st Cross, <br />
                                Rammurthy Nagar, <br />
                                Bangalore-560016</div>
                        </div>

                        <div className='pb-2' style={{ borderBottom: "2px solid white" }}></div>

                        <span style={{ color: "white" }}><i class="fa-solid fa-mobile-screen"></i> Phone : +91 12345 67890</span><br />
                        <span style={{ color: "white" }}><i class="fa-regular fa-envelope"></i> Mail: info@company.com</span><br />
                    </div>


                </div>

            </div>


            {/* copyright part  */}

            <div className="container-fluid d-flex justify-content-around align-item-center pt-2" style={{ backgroundColor: "#133a75", color: "white" }}>
                <p>Copyright © 2023, iAssureIT All Rights Reserved</p>
                <p>Designed & Developed By <span className='fw-bold'>iAssure International Technologies Pvt. Ltd.</span></p>

            </div>
        </>
  )
}

export default App
