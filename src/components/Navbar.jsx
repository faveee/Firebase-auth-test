import "./navbar.css";
import { Link } from "react-router-dom";
import logo from '../assests/logo.png';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';


export default function Navbar() {

const [open, setOpen] = useState(false);

  return (
    <div className='header'>
        <div className='logocontainer'>
            <img src={logo} alt="logo" className='logoicon' />
        </div>
    
<nav className='navbar'>   
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Jobs</Link></li>
                <li><Link to="/">Subscriptions</Link></li>
                <li><Link to="/">Contact</Link></li>
                </ul>
              </nav>
      <div className="navsplit">
                  <div className="leftSplit">
                  <button><Link to="/signin">Sign In</Link></button>
                </div>
<div className="rightSplit">
                <button className="trigger" onClick={() => {setOpen(!open)}}>Sign Up</button>
                  </div>
                  </div>

                  <div className={`dropdown-page ${open? 'active' : 'inactive'}`} >
                  <div className="close">
                    <CloseIcon onClick={() => setOpen(false)} />
                    </div>
                    <div className="dropdown-item">
                  <div className="left">
                  <button><Link to="/signupasartisan">Sign Up as an Artisian</Link></button>
                </div>
<div className="right">
<button><Link to="/signupuser">Sign Up as an User</Link></button>
                  </div>
</div>
</div>
</div>
  );
}


