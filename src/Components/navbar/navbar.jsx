import logo from '../../assets/logo.png';
import icon from '../../assets/icon-1.png';
import './navbar.css'



function Navbar(){
    return(
<nav class="navbar navbar-expand-lg ">

<div class="container">
  <a class="navbar-brand" href="#"><img src={logo}/></a>
  <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li class="nav-item active">
        <a class="nav-link " aria-current="page" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">about me</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link" href="#project">projects</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">contact me</a>
      </li>
     
     
    </ul>
    <a href='#contact'>
    <button type="button" class="btn btn-dark btn-lg box">contact with me <img src={icon} width="20px" height="20px"/></button>
    </a>
  </div>
</div>
</nav>

   

    );
}
export default Navbar