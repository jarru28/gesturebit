import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/pc1.png'
import logo1 from '../images/GESTUREBIT.png'
import movil from '../images/movil.png'
import '../styles/home.css';


export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                
                <div className="row justify-content-center" id="firstContainer">

                    <div className="col-10 col-md-4 my-5 ml-4"> 
                        <div className="row justify-content-center text-end">
                            <h1 className="mb-3">Bring your cryptocurrencies to life.</h1>
                        </div>
                        <div className="row justify-content-center text-end">
                            <h5 className="mb-3" id="subtitle">Stop using complicated trading tools. Try our new crypto bots and let them automatically trade for you.</h5>
                        </div>
                        <div className="row justify-content-end text-end">
                        <Link className="col-6 col-md-5 btn btn-primary mb-5" id="buttonStart" to="/bots" role="button">Get started!</Link>
                        </div>
                    </div>
                    <div className="col-12 col-md-7 mb-5">
                    <div className="row justify-content-center">
                        <img src={logo} alt="logo" id="imagePc" /> 
                        </div>
                    </div>
                </div> 
                
                <div className="row justify-content-center" id="secondContainer">
                    <div className="row justify-content-center">
                        <div className="col-8 col-lg-3 text-center" id="features">Our best features.</div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-6 text-center" id="subFeatures">
                            Advanced and comprehensive tool helps you make profitable trades.
                            </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-5 col-xl-4 ">
                            <div className="card " id="card">
                                <div className="d-flex ">
                                    <i className="bi bi-x-lg" id="featureIcon"></i>
                                    <h4 id="h4Feature">Clouding</h4>
                                </div>
                                <div className="">
                                    <p id="featureText">Our platform runs 24/7. Turn off your computer and let GestureBit do the job</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-5 col-xl-4 mt-xl-4">
                            <div className="card " id="card">
                                <div className="d-flex ">
                                    <i className="bi bi-x-lg" id="featureIcon"></i>
                                    <h4 id="h4Feature">Clouding</h4>
                                </div>
                                <div className="">
                                    <p id="featureText">Our platform runs 24/7. Turn off your computer and let GestureBit do the job</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-5 col-xl-4 ">
                            <div className="card " id="card">
                                <div className="d-flex ">
                                    <i className="bi bi-x-lg" id="featureIcon"></i>
                                    <h4 id="h4Feature">Clouding</h4>
                                </div>
                                <div className="">
                                    <p id="featureText">Our platform runs 24/7. Turn off your computer and let GestureBit do the job</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 col-md-5 col-xl-4 mt-xl-4">
                            <div className="card " id="card">
                                <div className="d-flex ">
                                    <i className="bi bi-x-lg" id="featureIcon"></i>
                                    <h4 id="h4Feature">Clouding</h4>
                                </div>
                                <div className="">
                                    <p id="featureText">Our platform runs 24/7. Turn off your computer and let GestureBit do the job</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                              
                <div className="row justify-content-center" id="thirdContainer">
                <div className="row justify-content-center">
                    <h2 className="text-center pb-4" id="TitleHow">How GestureBit Works?</h2>
                </div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner text-center">
                            <div className="carousel-item active ">
                                <h4 id="step">1. First step</h4>
                                <p id="stepText">Connect your favourite exchange to our application using API key</p>
                                <img src={movil} className="pb-5 w-25" alt="movile1" id="movile"/>
                            </div>
                            <div className="carousel-item">
                                <h4 id="step">2. Second step</h4>
                                <p id="stepText">Customize your bot by choosing the pair and the amount you want to invest</p>
                                <img src={movil} className="pb-5 w-25" alt="movile2" id="movile"/>
                            </div>
                            <div className="carousel-item">
                                <h4 id="step">3. Third step</h4>
                                <p id="stepText">Activate your bot and see how your strategy works for you</p>
                                <img src={movil} className="pb-5 w-25" alt="movile3" id="movile"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div className="row justify-content-center" id="thirdContainer">
                    <div className="row justify-content-center">
                        <div className="pricing-table">
                            <div className="pricing-card">
                            <h3 className="pricing-card-header">ROOKIE</h3>
                            <div className="price"><sup>$</sup>9.99<span>/Monthly</span></div>
                            <div id="separador"></div>
                            <ul>
                                <li><i class="bi bi-check-circle-fill"></i> 1 Bot active</li>
                                <li><i class="bi bi-check-circle-fill"></i> Up to 1000$</li>
                                <li><i class="bi bi-check-circle-fill"></i> Support</li>
                                <li><i class="bi bi-check-circle-fill"></i> Email</li>
                                <li><i class="bi bi-check-circle-fill"></i> CPU & RAM</li>
                            </ul>
                            <a href="#" className="order-btn">Order Now</a>
                            </div>

                            <div className="pricing-card">
                            <h3 className="pricing-card-header">Pro</h3>
                            <div className="price"><sup>$</sup>19.99<span>/Monthly</span></div>
                            <div id="separador"></div>
                            <ul>
                                <li><i class="bi bi-check-circle-fill"></i> 3 Bot active</li>
                                <li><i class="bi bi-check-circle-fill"></i> Up to 10000$</li>
                                <li><i class="bi bi-check-circle-fill"></i> Fast support</li>
                                <li><i class="bi bi-check-circle-fill"></i> Email</li>
                                <li><i class="bi bi-check-circle-fill"></i> CPU & RAM</li>
                            </ul>
                            <a href="#" className="order-btn">Order Now</a>
                            </div>

                            <div className="pricing-card">
                            <h3 className="pricing-card-header">MASTER</h3>
                            <div className="price"><sup>$</sup>39.99<span>/Monthly</span></div>
                            <div id="separador"></div>
                            <ul>
                                <li><i class="bi bi-check-circle-fill"></i> 10 Bot active</li>
                                <li><i class="bi bi-check-circle-fill"></i> No limit investment</li>
                                <li><i class="bi bi-check-circle-fill"></i> Personalized strategies</li>
                                <li><i class="bi bi-check-circle-fill"></i> Priority support</li>
                                <li><i class="bi bi-check-circle-fill"></i> CPU & RAM</li>
                            </ul>
                            <a href="#" className="order-btn">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center" id="secondContainer">
                    <div className="row justify-content-center">
                        <h2 className="text-center pb-4" id="FAQTitle">FAQ</h2>
                        <h5 className="text-center pb-4" id="FAQSubtitle"> Find the answer of your frequent questions </h5>
                    </div>
                    <div className="accordion accordion-flush col-11 col-md-8" id="accordionFlushExample">
                        <div className="accordion-item" id="itemFAQIn">
                            <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" id="itemFAQ" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div className="accordion-item" id="itemFAQIn">
                            <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" id="itemFAQ" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item" id="itemFAQIn">
                            <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" id="itemFAQ" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div className="accordion-item" id="itemFAQIn">
                            <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" id="itemFAQ" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <footer className="row text-white">
                        <div className="container text-center text-md-left pt-5 pb-2">
                            <div className="row text-center text-md-left">
                                <div className="col-10 col-md-3 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">About us</h5>
                                    <p>We are the first intuitive flow-based platform for the definition of automated trading strategies.</p>
                                </div>
                                <div className="col-10 col-md-2 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">Navigation</h5>
                                    <p>
                                        <i className="mr-3">Features</i>
                                    </p>
                                    <p>
                                        <i className="mr-3"> Pricing</i>
                                    </p>
                                    <p>
                                        <i className="mr-3"> How</i>
                                    </p>
                                </div>
                                <div className="col-10 col-md-2 mx-auto mt-3">
                                    <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                                    <p>
                                        <i className="mx-2"> +34 658230119 </i><i className="bi bi-telephone"></i>
                                    </p>
                                    <p>
                                        <i className="mx-2"> gesturebit@gmail.com</i><i className="bi bi-envelope"></i>
                                    </p>
                                    <p>
                                        <i className="mx-2"> Spain,Valencia</i><i className="bi bi-geo-alt"></i>
                                    </p>
                                </div>
                                <div className="col-10 col-md-3 mx-auto mt-3">  
                                    
                                    <div className="text-center text-md-right">
                                    <img src={logo1}  alt="logo" width="160" height="180" id="gesturebit"/>
                                    <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item">
                                            <a href="" className="btn-floating btn-sm text-white"><i className="bi bi-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="btn-floating btn-sm text-white"><i className="bi bi-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="btn-floating btn-sm text-white"><i className="bi bi-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="btn-floating btn-sm text-white"><i className="bi bi-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="btn-floating btn-sm text-white"><i className="bi bi-discord"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="" className="btn-floating btn-sm text-white"><i className="bi bi-telegram"></i>
                                            </a>
                                        </li>
                                    </ul> 
                                    </div> 
                                </div>
                            </div>
                            <hr className="mb-4"></hr>
                                <div className="col-12 col-md-7 ">
                                    <p>Copyright ©2020 All rights reserved by: GestureBit®</p>
                            </div>
                        </div>
                </footer>
    
            </div>  
        )
    }
}
