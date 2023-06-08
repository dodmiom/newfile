import React,{useState} from 'react'
import {Link} from 'react-router-dom';

export default function Navbar ({col,tog,clicktoggle}) {
  

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-light bg-${tog}`}>
<Link className={`navbar-brand text-${col} mx-4 fs-2 `} to="#" style={{fontWeight:"bold"}}>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    {/* {<li className="nav-item ">
      <Link className="nav-link text-primary mx-2"  style={{fontWeight:"bold"}} to="/">Home </Link>
    </li>} */}
    {/* {<li className="nav-item">
      <Link className="nav-link text-primary mx-2"  style={{fontWeight:"bold"}} to="/">Todo App</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-primary mx-2"  style={{fontWeight:"bold"}} to="/counter">Counter App</Link>
    </li>} */}
     <li className="nav-item">
      <Link className={`nav-link text-${col} mx-5`}  style={{fontWeight:"bold"}} to="/">ABOUT ME</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${col} mx-2`}   style={{fontWeight:"bold"}} to="/counter">SERVICES</Link>
      </li>
     <li className="nav-item">
        <Link className={`nav-link text-${col} mx-4`}   style={{fontWeight:"bold"}} to="/">PORTFOLIO</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${col} mx-3`}   style={{fontWeight:"bold"}} to="/">TESTIMONIALS</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${col} mx-3`}   style={{fontWeight:"bold"}} to="/">CONTACT ME</Link>
        
      </li>
      <div className="form-check form-switch">
  <input className="form-check-input mx-2  " style={{fontSize:"21px"}} onClick={clicktoggle} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
  <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
</div>
      
     
    </ul>
  </div>
</nav>
    </div>
  )
}
