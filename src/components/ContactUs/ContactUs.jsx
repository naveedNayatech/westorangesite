import './ContactUs.css';


const ContactUs = () => {
  return (
    <section className="contactWrapper">

        <div className="contact-left">
        <ul><li>Contact us</li></ul>
        <span className="contactText">Feel free to contact <br /> &nbsp;&nbsp;us anytime.</span>


        {/* information area */}
        <div className="contactInfoArea">
            <div className="contactRow">
                <i className="bx bxs-envelope"></i>
                <span>info@abc.com</span>    
            </div>

            <div className="contactRow">
                <div>
                    <i className="bx bx-phone"></i>
                </div>
                <span>0900 7860100</span>    
            </div>

            <div className="contactRow">
                <i className="bx bx-map"></i>
                <span>WestOrange</span>    
            </div>    
        </div>
        </div>
        {/* Left part end here */}


        {/* right part starts here  */}
        <div className="contact-right">
            <div className="formRow">
                <input type="text" placeholder="First Name" className="contactFormInput" />
                <input type="text"  placeholder="Last Name" className="contactFormInput" />
            </div>

            <div className="formRow">
                <input type="text" placeholder="Email" className="contactFormInput" />
                <input type="text"  placeholder="Subject" className="contactFormInput" />
            </div>

            <div className="formRow">
                <textarea cols={4} rows={4} placeholder="Message" className="contactFormInput" />
            </div>

            <button className='contactSubmitBtn'>Submit Now <i className="bx bx-caret-right"></i></button>
        </div>  

    </section>
  )
}

export default ContactUs