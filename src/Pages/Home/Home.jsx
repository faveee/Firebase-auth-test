import React from 'react'
import "./home.css";
import hero from "../../assests/hero.png";
import automotive1 from "../../assests/Automotive1.png";
import automotive2 from "../../assests/Automotive2.png";
import automotive3 from "../../assests/Automotive3.png";
import automotive4 from "../../assests/Automotive4.png";
import automotive5 from "../../assests/Automotive5.png";
import automotive6 from "../../assests/Automotive6.png";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';

import rectangle1 from "../../assests/Rectangle 1.png";
import rectangle2 from "../../assests/Rectangle 2.png";
import rectangle3 from "../../assests/Rectangle 3.png";
import rectangle4 from "../../assests/Rectangle 4.png";
import rectangle5 from "../../assests/Rectangle 5.png";
import rectangle6 from "../../assests/Rectangle 6.png";

import about from "../../assests/about.png";

import logo2 from "../../assests/logo2.png"

export default function Home() {
  return (
    <div>
      {/* hero section begins */}
      <div>
        <div>
        <img src={hero} alt="hero" className="herocontainer"/>
        </div>
        <section>
            <h1 className="jobListing">Job Categories</h1>
        </section>
        <div className="subsection" id="categories">
        <div className="automotiveContainer">
                <img src={automotive1} alt="automotive" />
                <p>Automotive Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive2} alt="automotive" />
               <p>Electrician Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive3} alt="automotive" />
                <p>Building Service</p>
                </div>
                <div className="automotiveContainer">
            <img src={automotive4} alt="automotive" />
            <p>Computer/IT Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive5} alt="automotive" />
                <p>Cleaning Service</p>
                </div>
                <div className="automotiveContainer">
                <img src={automotive6} alt="automotive" />
                <p>Generator Repair</p>
                </div>
                </div>

{/* hero section ends */}

                <div>
                    <h2 className='play'>hello</h2>
                </div>

                {/* job list section begins */}

                <section>
                  <h2 className="jobSection">Featured Job List</h2>
<div className="cardContainer">
<div className="card">
        <h2 className="cardTitle">Plumber</h2>
        <p className="cardName">Tobechkwu</p>
        <p className="cardPolicy">Pay per job</p>
        <p className="cardLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Isolo, Lagos State</p>
        <span className="review"><StarIcon fontSize="small" />3.5 Amazing</span>
        <span className="reviewCount">(765 +) </span>
        <div className="buttonContainer">
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
        <div className="card">
        <h2 className="cardTitle">Lock Smith</h2>
        <p className="cardName">Solomon</p>
        <p className="cardPolicy">Pay per job</p>
        <p className="cardLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikeja, Lagos State</p>
        <span className="review"><StarIcon fontSize="small" />2.5 Good</span>
        <span className="reviewCount">(500 +) </span>
        <div className="buttonContainer">
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
        <div className="card">
        <h2 className="cardTitle">Cleaner</h2>
        <p className="cardName">Jennifer</p>
        <p className="cardPolicy">Pay per job</p>
        <p className="cardLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> V.I, Lagos State</p>
        <span className="review"><StarIcon fontSize="small" />4.5 Excellent</span>
        <span className="reviewCount">(1000 +) </span>
        <div className="buttonContainer">
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
        <div className="card">
        <h2 className="cardTitle">Phone Repair</h2>
        <p className="cardName">Ayomide</p>
        <p className="cardPolicy">Pay per job</p>
        <p className="cardLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikorodu, Lagos State</p>
        <span className="review"><StarIcon fontSize="small" />3.5 Amazing</span>
        <span className="reviewCount">(600 +) </span>
        <div className="buttonContainer">
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
        <div className="card">
        <h2 className="cardTitle">Welder</h2>
        <p className="cardName">John</p>
        <p className="cardPolicy">Pay per job</p>
        <p className="cardLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ojota, Lagos State</p>
        <span className="review"><StarIcon fontSize="small" />2.0 Good</span>
        <span className="reviewCount">(400 +) </span>
        <div className="buttonContainer">
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
        <div className="card">
        <h2 className="cardTitle">Electrician</h2>
        <p className="cardName">Sali</p>
        <p className="cardPolicy">Pay per job</p>
        <p className="cardLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikeja, Lagos State</p>
        <span className="review"><StarIcon fontSize="small" />3.5 Amazing</span>
        <span className="reviewCount">(765 +) </span>
        <div className="buttonContainer">
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
      <div className="lastitem">
      <button className="lastbtn"><a href="#" >View all Jobs</a></button>
      </div>
</div>
                </section>
                </div>

                {/* job list ends */}
{/* job candidate starts */}
                <div>
    <h1>Featured Candidate</h1>
  </div>
<div className="candidateContainer" >
  <div >
  <div >
        <h2>Electrician</h2>
        <p>Sali</p>
        <p>Pay per job</p>
        <p ><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikeja, Lagos State</p>
        <span ><StarIcon fontSize="small" />3.5 Amazing</span>
        <span>(765 +) </span>
        <div>
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
      <div >
      <button><a href="#" >View all Jobs</a></button>
      </div>
      <div >
        <h2>Electrician</h2>
        <p>Sali</p>
        <p>Pay per job</p>
        <p ><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikeja, Lagos State</p>
        <span ><StarIcon fontSize="small" />3.5 Amazing</span>
        <span>(765 +) </span>
        <div>
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
      <div>
      <button><a href="#" >View all Jobs</a></button>
      </div>
      <div >
        <h2>Electrician</h2>
        <p>Sali</p>
        <p>Pay per job</p>
        <p ><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikeja, Lagos State</p>
        <span ><StarIcon fontSize="small" />3.5 Amazing</span>
        <span>(765 +) </span>
        <div>
        <button><a href="#" >view</a></button>
        <button><a href="#" >connect</a></button>
        </div>
        </div>
      <div className="jobCenterBtn">
      <button><a href="#" >View all Jobs</a></button>
      </div>
  </div>
  <div>
  <img src={rectangle1} alt="artisan" />
  <img src={rectangle2} alt="artisan" />
  <img src={rectangle3} alt="artisan" />
  <img src={rectangle4} alt="artisan" />
  <img src={rectangle5} alt="artisan" />
  <img src={rectangle6} alt="artisan" />
  </div>
</div>
{/* job candidate ends */}

{/* about us */}
  <div className="about" id="about">
    <h1>What is Handymanny?</h1>
    <img src={about} alt="hero"/>
    <p>The HandyManny Website is a subscription based online listing platform for professional and
experienced artisans in Nigeria. For freelance artisans, the platform gives them room to subscribe and
earn money while being mobile, list their Services, collaborate with other artisans and build their client base
For workshop owners, the platform offers subscription for an easy way to list their business, sell products
connect with other professionals, expand their customer base including business travelers and tourists,
while improving their expertise. The platform also has an integrated payment full-service Solution for
easy transaction tracking and sales record.
</p>
<div className="center">
<button><a href="www.google.com" >View More About Us</a></button>
</div>
  </div>
  {/* about us ends */}

  {/* client data */}
<div className="clientContainer">
  <h1>Some of Our Clients</h1>
</div>
{/* client feature ends */}

 {/* license */}
 <div className="licenseContainer">
 <img src={logo2} alt="logo" />
  <p>The HandyManny Website is a subscription based online listing platform for professional and
experienced artisans in Nigeria. For freelance artisans, the platform gives them room to subscribe and
earn money while being mobile, list their Services, collaborate with other artisans and build their client base
For workshop owners.</p>
</div>
{/* lisence ends */}

{/* footer starts */}
<div className="homeFooter">
<div class="contain">
  <div class="col">
    <h1>Quick Link</h1>
    <ul>
      <li><a href="#about" alt="about">About Us</a></li>
      <li><a href="www.google.com" alt="careers">Careers</a></li>
      <li><a href="www.google.com" alt="terms of service">Terms of Service</a></li>
      <li><a href="www.google.com" alt="privacy policy">Privacy Policy</a></li>
      <li><a href="www.google.com" alt="FAQ">FAQ</a></li>
    </ul>
  </div>
  <div class="col">
    <h1>Categories</h1>
    <ul>
      <li><a href="#categories" alt="automotive service">Automotive Service</a></li>
      <li><a href="#categories" alt="electrician service">Electrician Service</a></li>
      <li><a href="#categories" alt="building service">Building Service</a></li>
      <li><a href="#categories" alt="privacy policy">Computer/IT Service</a></li>
      <li><a href="#categories" alt="cleaning service">Cleaning Service</a></li>
      <li><a href="#categories" alt="generator repair">Generator Repair</a></li>
    </ul>
  </div>
  <div class="col">
    <h1>Communities</h1>
    <ul>
      <li><a href="www.linkedin.com" alt="linkedin">Linkedin</a></li>
      <li><a href="www.instagram.com" alt="instagram">Instagram</a></li>
      <li><a href="www.facebook.com" alt="facebook">Facebook</a></li>
      <li><a href="www.blog.com" alt="blog">Blog</a></li>
      <li><a href="www.twitter.com" alt="twitter">Twitter</a></li>
      <li><a href="www.pinterest.com" alt="pinterest">Pinterest</a></li>
    </ul>
  </div>
  <div class="col">
    <h1>Contact Us</h1>
  </div>
  <div className="col"></div>
    </div>


</div>
    </div>
  )
}
