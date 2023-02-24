import React from 'react'
import "./home.css";

import hero from "../../assests/hero.png";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import automotive1 from "../../assests/Automotive1.png";
import automotive2 from "../../assests/Automotive2.png";
import automotive3 from "../../assests/Automotive3.png";
import automotive4 from "../../assests/Automotive4.png";
import automotive5 from "../../assests/Automotive5.png";
import automotive6 from "../../assests/Automotive6.png";

import video from "../../assests/video.svg";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';

import rectangle from "../../assests/rectangle.png";

import about from "../../assests/about.png";

import logo2 from "../../assests/logo2.png"

import candidate1 from "../../assests/candidate1.png";
import candidate2 from "../../assests/candidate2.png";
import candidate3 from "../../assests/candidate3.png";

import partners1 from "../../assests/partners1.png";
import partners2 from "../../assests/partners2.png";
import partners3 from "../../assests/partners3.png";
import partners4 from "../../assests/partners4.png";

import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import vector1 from "../../assests/Vector1.png";
import vector2 from "../../assests/Vector2.png";
import vector3 from "../../assests/Vector3.png";
import vector4 from "../../assests/Vector4.png";
import vector5 from "../../assests/Vector5.png";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

export default function Home() {
  return (
    <div>
      {/* hero section begins */}
      <div>
        <div className="herocontainer" id="top"
style={{ backgroundImage: 'url(' + hero + ')' }}>
  <div className="heroSearch">
    <div className="herobtn">
    <button className="herobtnFirst">
  <LocationOnOutlinedIcon style={{ color: '#008081', fontSize: 'medium' }}/>
  <p className="herotext">Location</p>
  <ExpandMoreOutlinedIcon style={{ fontSize: 'medium' }} />
  </button>
    </div>
<div className="herobtn">
<button className="herobtnFirst">
  <ListOutlinedIcon style={{ color: '#008081', fontSize: 'medium' }} />
  <p className="herotext">Categories</p>
  <ExpandMoreOutlinedIcon style={{ fontSize: 'medium' }}/>
  </button>
</div>
  <div className="herobtn">
  <button className="herobtnLast">
  <SearchOutlinedIcon style={{ color: '#FFFFFF', fontSize: 'medium' }} />
  <p className="herotextL">Search</p>
  </button>
  </div>
  </div>
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

                <div className="play">
              <img src={video} alt="video" />

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
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
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
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
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
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
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
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
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
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
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
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
        </div>
        </div>
      <div className="lastitem">
      <button className="lastbtn"><a href="www.google.com" >View all Jobs</a></button>
      </div>
</div>
                </section>
                </div>

                {/* job list ends */}
{/* job candidate starts */}
                <div>
    <h1 className="candidateHeader">Featured Candidate</h1>
  </div>
<div className="candidateContainer" >
  <div className="candidateSection">
  <div className="candidateCard">
    <div>
    <img src={candidate1} alt="candidate" />
    </div>
    <div>
    <h1 className="candidateTitle">Actively Searching</h1>
        <p className="candidateName">Adebayo</p>
        <p className="candidateProfession">Bricklayer</p>
        <p className="candidateLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ketu, Lagos State</p>
        <span className="candidateReview"><StarIcon fontSize="small" />0.0</span>
        <div className="candidatebtn">
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
        </div>
    </div>
        </div>
        <div className="candidateCard">
    <div>
    <img src={candidate2} alt="candidate" />
    </div>
    <div>
    <h1 className="candidateTitle">Actively Searching</h1>
        <p className="candidateName">Jacob</p>
        <p className="candidateProfession">Computer Repair</p>
        <p className="candidateLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Maryland, Lagos State</p>
        <span className="candidateReview"><StarIcon fontSize="small" />0.0</span>
        <div className="candidatebtn">
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
        </div>
        </div>
        </div>
        <div className="candidateCard">
    <div>
    <img src={candidate3} alt="candidate" />
    </div>
    <div>
    <h1 className="candidateTitle">Actively Searching</h1>
        <p className="candidateName">Sarah</p>
        <p className="candidateProfession">Cleaner</p>
        <p className="candidateLocation"><LocationOnOutlinedIcon style={{ color: '#008081' }}/> Ikoyi, Lagos State</p>
        <span className="candidateReview"><StarIcon fontSize="small" />0.0</span>
        <div className="candidatebtn">
        <button><a href="www.google.com" >view</a></button>
        <button><a href="www.google.com" >connect</a></button>
  
        </div>
        </div>
        </div>

  </div>
  <div className="artisanContainer">
  <img src={rectangle} alt="artisan" />
  </div>
</div>
<div className="viewbtn">
  <a href="www.google.com">View all Candidate</a>
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
  <div className="clientHeader">
  <h1>Some of Our Partners</h1>
</div>
<div className="partners">
<img src={partners1} alt="partners" />
<img src={partners2} alt="partners" />
<img src={partners3} alt="partners" />
<img src={partners4} alt="partners" />
</div>
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
<div className="contain">
  <div className="col">
    <h1>Quick Link</h1>
    <ul>
      <li><a href="#about" alt="about">About Us</a></li>
      <li><a href="www.google.com" alt="careers">Careers</a></li>
      <li><a href="www.google.com" alt="terms of service">Terms of Service</a></li>
      <li><a href="www.google.com" alt="privacy policy">Privacy Policy</a></li>
      <li><a href="www.google.com" alt="FAQ">FAQ</a></li>
    </ul>
  </div>
  <div className="col">
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
  <div className="col">
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
  <div className="col">
    <h1>Contact Us</h1>
<div>
  <p><PhoneIphoneOutlinedIcon style={{ color: 'white', fontSize: 'medium' }} /> +234 824 345 3961</p>
  <p><EmailOutlinedIcon style={{ color: 'white', fontSize: 'medium' }} /> Hello@handymanny.org</p>
</div>
<h1>Newsletter</h1>
<div>
<input placeholder="Your email"/><button>Subcribe</button>
</div>
  </div>
  
<div className="footerBottom">
  .
  </div>
  <div className="endSection">
  <div className="endIcon">
  <img src={vector1} alt="facebook" />
    <img src={vector2} alt="linkedin" />
    <img src={vector3} alt="twitter" />
    <img src={vector4} alt="pinterest" />
    <img src={vector5} alt="instagram" />
  </div>
  <div className="endText">
    Copyright&copy; 2023 Handymanny. All rights reserved <a href="#top" alt="Back to top" className="topSection"><KeyboardArrowUpOutlinedIcon style={{ color: 'white'}} /></a>
  </div>
  </div>
</div>
</div>
</div>

  )
}


