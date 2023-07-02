//Landing page
import React from "react";
import Navbar from "./Navbar";
import "./Landing.css";

function Landing(){
    return(
        <div>
            <div className="section1">
              <Navbar/>
                <h3 className="my-heading">
                    IMMERSIVE EXPERIENCES THAT DELIVER
                </h3>
            </div>


            <div className="section2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="the-image-2">
                          <img src="/images/image-interactive.jpg" className="my-image2" alt="Interactive"></img>
                        </div>
                       

                    </div>

                    <div className="col-md-6 my-col2-items">
                        <h4 className="col2-head">THE LEADER IN INTERACTIVE VR</h4>
                        <p className="col2-p">Founded in 2011, Loopstudio has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
                    </div>

                </div>

            </div>



      
      
            <div className="section3">

                <label className="lbl-see">OUR CREATIONS</label>
                <button className="btn-see">SEE ALL</button>
               
                <div className="myrow">

                        <div className="image-box">
                            <img src="/images/image-deep-earth.jpg" className="section3-images" alt="box"/>
                            <p className="sec3-desc">Deep Earth</p>
                        </div>
                       
            
                  
                        <div className="image-box">
                            <img src="/images/image-night-arcade.jpg" className="section3-images" alt="box"/>
                            <p className="sec3-desc">Night Arcade</p>
                        </div>
                
               
                        <div className="image-box">
                            <img src="/images/image-soccer-team.jpg" className="section3-images" alt="box"/>
                            <p className="sec3-desc">Soccer Team VR</p>
                        </div>
                 
                
                        <div className="image-box">
                            <img src="/images/image-grid.jpg" className="section3-images" alt="box"/>
                            <p className="sec3-desc">The Grid</p>
                        </div>
               

                </div>

                <div className="myrow">
                        <div className="image-box">
                              <img src="/images/image-from-above.jpg" className="section3-images" alt="box"/>
                              <p className="sec3-desc">From Up Above VR</p>
                        </div>
              
        
                        <div className="image-box">
                              <img src="/images/image-pocket-borealis.jpg" className="section3-images" alt="box"/>
                              <p className="sec3-desc">Pocket Borealis</p>
                        </div>
               
           
                        <div className="image-box">
                             <img src="/images/image-curiosity.jpg" className="section3-images" alt="box"/>
                             <p className="sec3-desc">The Curiosity</p>
                        </div>
       
                        <div className="image-box">
                             <img src="/images/image-fisheye.jpg" className="section3-images" alt="box"/>
                             <p className="sec3-desc">Make It Fisheye</p>
                        </div>
               

                </div>
            </div>


            <footer className="my-footer">

                <div>
                    <img src="/images/icon-facebook.svg" className="my-socials" alt="facebook"></img>
                    <img src="/images/icon-instagram.svg" className="my-socials" alt="instagram"></img>
                    <img src="/images/icon-pinterest.svg" className="my-socials" alt="pinterest"></img>
                    <img src="/images/icon-twitter.svg" className="my-socials" alt="twitter"></img>

                    <p className="cp">e-tanQ - loopstudio -  © - All rights reserved</p>
                </div>

            </footer>
            
        </div>
    );

}

export default Landing;