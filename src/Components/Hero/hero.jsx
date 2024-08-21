import react from "react";
import icon from '../../assets/icon-1.png';
import profile from '../../assets/profile.png';
import './hero.css';
import resume from '../../assets/CV .pdf';





function Hero(){
    return(


<div className="container hero-warper" id="home">
    <div className="row">
    <div class="col-sm-7 hero-info">
    <h1>Hello , I'm Kareen Alkhatib Frontend Devloper</h1>
   
 
    <p>Bringing creativity to life and transforming ideas into real
       I specialize in turning creative ideas into dynamic, user-friendly websites.
       , responsive designs that provide seamless user experiences. 
       Explore my portfolio to see how I can bring your vision to life.
    </p>

 <div>
    <a href="#contact">
 <button type="button" className="btn btn-dark btn-lg me-3 mt-3 box">contact with me <img src={icon} width="20px" height="20px"/></button>
 </a>
 <a href={resume} download="resume">
 <button type="button" className=" btn custom-btn  mr-3 mt-3 btn-lg"> my resume  <i class="bi bi-download"></i> </button>
 </a>
 </div>
     </div>
    <div className="col-sm-5">
    <img className="heroImg" src={profile}  />
    </div>

    </div>
 
       

       
    </div>

    );
}

export default Hero;