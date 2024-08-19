import icon from '../../assets/icon-1.png';
import contactImg from '../../assets/contact.jpg';
import './contact.css';

function Contact(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "daac52bc-905a-4ac7-8096-4adeeda4e90a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         /* console.log("Success", res);*/
          alert("the email send Successfully .");
        }
      };

    return(

<div class="container " id='contact'>
    <div className='contact-title'>
<h2>let's contact</h2>
<p>I welcome the opportunity to connect with you. For inquiries, collaborations, or feedback, please feel free to reach out using the contact details below. I look forward to hearing from you!
</p>
</div>
  <div class="row my-5 container">
    
    <div class="col-lg-6 contact-me">
    <form onSubmit={onSubmit}>
        <label htmlFor="">your name</label>
        <input type="text" placeholder="enter your name" name='name'/>
        <label htmlFor="">your email</label>
        <input type="text" placeholder="enter your email" name='email'/>
        <label htmlFor="">write your message here </label>
        <textarea name="message" rows="8" placeholder='enter your message'/>
        <button type="submit" className=" btn custom-btn  mr-3  btn-lg"> send <i class="bi bi-send"></i> </button>


     </form>
    </div>
    
    <div className='col-sm-6'>
        <img className = "contactImg"  src={contactImg} width="600px"/>
    </div>
   
  </div>
</div>








       
    );
}

export default Contact;