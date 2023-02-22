import React from 'react'
import "./joblisting";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import StarIcon from '@mui/icons-material/Star';


export default function Joblist() {
  return (
    <div>
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
    
  )
}
