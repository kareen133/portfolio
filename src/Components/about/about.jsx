
import aboutImg from '../../assets/about.jpg';
import './about.css';
import { useNavigate } from "react-router-dom";

function About(){
const navigate = useNavigate();

const handelClick =() => {
  navigate ('/about');
};
  
    return(

<div class="container about" id='about'>
  <div class="row">
    <div class="col-sm-6 about-info">
    <h2>About me</h2>
    <p>
    I’m Kareen , a passionate front-end developer for creating visually 
    and interactive web experiences. My journey into the world of web development 
    started with a curiosity for how things work behind the scenes and quickly grew into 
    a love for building clean, responsive, and user-friendly interfaces.

With a solid foundation in HTML, CSS, JavaScript, React 
</p>


    <button type="button" className=" btn custom-btn  mr-3 mt-3 btn-lg" onClick={handelClick} > know more <i class="bi bi-arrow-up-right"></i> </button>


  </div>
    
    <div class="col-sm-6">
    <img className='aboutImg' src={aboutImg}/>
    </div>

  </div>

</div>
    );
        
}

export default About;