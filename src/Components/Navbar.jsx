// Navbar - using Bootstrap classes
import React from "react";
import "./Navbar.css";
function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg my-nav">
                <div className="container-fluid">
                    <div >
                        <img src="/images/logo.svg" className="nav-brand-logo" alt="Logo"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                          <a className="nav-link" href="#about">About</a>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link" href="#careers">Careers</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#events">Events</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#products">Products</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#support">Support</a>
                        </li>
                     </ul>
      
                 </div>
             </div>
            </nav>
        </div>
    );
}

export default Navbar;