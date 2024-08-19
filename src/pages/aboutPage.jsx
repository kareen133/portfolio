import { useNavigate } from "react-router-dom";

import aboutImg from '../assets/about.jpg';
import Footer from "../Components/footer/footer";
import Services from "../Components/services/services";

import './aboutPage.css';


function AboutPage(){

  

  const navigate = useNavigate();

const handelClick =() => {
  navigate ('/');
};
    return(
    <>
      <button type="button" className=" btn custom-btn  mr-3 mt-3 btn-lg" onClick={handelClick} > <i class="bi bi-arrow-left"></i></button>
 
 <div class="container  " id='about'>
  <div class="header row ">
    <div class="a col-sm-6">
 <h1>Hi there ,  I'm <span> kareen.</span></h1>
<p>Frontend Developer , web Designer and UI/UX Designer with a passion for creating 
  beautiful and functional websites. With a strong foundation in HTML, CSS, JavaScript,
   and React, I love bringing ideas to life on the web. My goal is to build user-centric 
  experiences that not only look great but also provide intuitive and seamless interactions.</p>
  <div className="l"> 
  
  <p><b>Education:</b> Bachelor's Degree in Business information Technology at university of Jordan - 2020-2024</p>
</div>
 </div>

 <div class=" col-sm-6">
    <img className='aboutImg' src={aboutImg}/>
    </div>

 </div>
 </div>

<div className="container  center">


<h3>My Journey</h3>
<p>
I believe in the power of design and code to solve problems and enhance the way we 
interact with technology. My mission is to build websites that are not only look great but
 also accessible and easy to use for everyone.
My journey into web development started with a curiosity 
about how websites were built ,and how i can translate my ui designs into real website . What began as a hobby quickly turned into a passion, 
and I began to teach myself HTML and CSS. As I delved deeper, I discovered the joy of 
creating interactive elements with JavaScript, and from there, I expanded my skillset to include
 React. Every project I’ve undertaken has been a step forward in refining my skills and understanding
  the intricacies of web design.
</p>

</div>





<div className="container services-section center">
  <h3>My Services </h3>
  <p>Transforming Ideas into Engaging, User-Centric Digital Experiences"</p>
<div className="row row-cols-1 row-cols-md-3 g-1" >
<Services    title="frontend development" desc="turn your vision into reality with clean,
                                               efficient, and responsive code. i specialize in creating intuitive, user-friendly 
                                               interfaces that look great on any device. From interactive elements to seamless navigation, 
                                               I ensure your website performs and engages your audience effectively."/>
<Services title="web design" desc="focus on creating an attractive and highly functional websites
                                   that capture your brand's essence. combine creativity with strategic
                                    design to craft engaging layouts,
                                   compelling visuals, and smooth user interactions. also deliver a seamless
                                    user experience."/>
<Services title="UI/UX design" desc="improve the usability and satisfaction of your 
                                    digital products. By focusing on user-centered design, create intuitive interfaces and 
                                    enjoyable experiences
                                    that make interactions easy and enjoyable. analyze user
                                    behavior to  enhances functionality and meets user needs effectively."/>
</div>
</div>

<div className="container tech"> 
  <h3> 01 technologies</h3>
  <ul>
  <li>Frontend Development: HTML, CSS, JavaScript, React , vite </li>
	<li>UI/UX Design: Figma, Adobe XD.</li>
	<li>Version Control: Git, GitHub</li>
	<li>Responsive Design: Flexbox, Grid, Media Queries</li>
</ul>
</div>


<div className="container tech"> 
  <h3> 02 Certification</h3>
  <ul>
  <li>training program full stack web development - dot Jordan</li>
	<li>ntroduction in user experience  - coursera  </li>
	<li>the web front end -Udemy </li>
	<li>Ui/Ux design Certification -adrak </li>
  
</ul>
</div>









<Footer/>
</>

    );
        
}

export default AboutPage;