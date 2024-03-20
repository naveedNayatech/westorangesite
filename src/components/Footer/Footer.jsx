import './Footer.css';
import Logo from '../../../src/assets/final_Logo.png';


const Footer = () => {
  return (
    <div className="footer">

    <div className="footerSection">

    <div className="footer-column">
        <img src={Logo} alt="Logo" />
        

        <div class="textbox">
            <input type="text" placeholder="Enter Email" />
        </div>
        <button className='footerBtn'>Subscribe Our Newsletter  <i className="bx bx-caret-right"></i></button>


    </div>
    <div className="footer-column">
        <ul>
            <li><a href="#"><b>Useful Links</b></a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Directors</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
    <div className="footer-column">
        <ul>
            <li><a href="#"><b>Other Links</b></a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and condition</a></li>
        </ul>
    </div>
    
    <div className="footer-column">
        <ul className="social-icons">
            <li><a href="#"><b>Socials</b></a></li>
            <span><i className="bx bxl-facebook"></i></span>
            <span><i className="bx bxl-twitter"></i></span>
            <span><i className="bx bxl-linkedin"></i></span>
        </ul>
    </div>

    <div className="footer-column">
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.9490570522076!2d-75.16400798421043!3d39.953525379425764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c64d3b602d39%3A0x4a9e01c4c572f15!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1647039953150!5m2!1sen!2sus" width="100%" height="200" allowfullscreen="" loading="lazy" ></iframe>
        </div>
    </div>
    </div>

    <hr />
    <div className="container text-center">
        Copyrights &copy; 2024
    </div>

</div>
  )
}

export default Footer