function Services(props){
   
    const mystyle={
    
        border: "3px solid black",
        backgroundColor:"rgb(220, 182, 255)"
    
        
     }


    return(
       
            <div className="col" >
    <div className="card box " style={mystyle}>
      
      <div className="card-body">
      
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.desc}</p>
            </div>
            </div>
            </div>
           

    );
}
export default Services