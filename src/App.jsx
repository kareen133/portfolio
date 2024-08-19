
import Home from "./pages/home";
import AboutPage from "./pages/aboutPage.jsx";
import ProjectDetals from "./Components/projectDetals/projectDetals.jsx";


import { Routes , Route } from "react-router-dom";

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/about" element={ <AboutPage/>}/>
            <Route path="/project/:projectId" element={ <ProjectDetals/>}/>


        </Routes>
       
        </>
     
        
    );
}

export default App
