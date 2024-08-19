import Hero from "../Components/Hero/hero";
import Navbar from "../Components/navbar/navbar";
import About from "../Components/about/about";
import Card from "../Components/project/project";
import contents from "../content"; 
import Contact from "../Components/contact/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/footer/footer";




function Home() {
    return (
        <div>
         <Navbar/>
        <Hero/>
        
       <About/>
<div className="project container" id="project"> 
    <div className="project-tittle">
    <h2> My Project</h2>
    <p>Explore a diverse range of projects and web design solutions that showcase my expertise and creativity. review these examples and would greatly appreciate your feedback.

    </p>
    </div>
    <div className="row row-cols-1 row-cols-md-3 g-1">
    {contents.map(contents =>(
      <Card
        key ={contents.id}
        id={contents.id}
        image ={contents.image}
        name ={contents.name}
        pref = {contents.pref}
        livelink ={contents.livelink}
        repolink ={contents.repolink}
        />

    ))}
    
    </div>  
</div>
<Contact/> 
<Footer/>
 </div>
        
    );
}

export default Home