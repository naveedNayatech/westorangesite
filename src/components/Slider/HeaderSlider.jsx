import Slider from 'react-slick';
import './HeaderSlider.css'; // Your custom CSS file for styling
import Rectangle1 from '../../../src/assets/Rectangle1.png';
import Rectangle2 from '../../../src/assets/Rectangle2.png';
import Rectangle3 from '../../../src/assets/Rectangle3.png';
import Navbar from '../Navbar/Navbar';


const HeaderSlider = () => {

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

    return (
    <header className="header-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img src={Rectangle1} alt="Slide 1" />
        </div>
        
        <div className="slider-item">
         <img src={Rectangle2} alt="Slide 2" />
        </div>
        
        <div className="slider-item">
         <img src={Rectangle3} alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      
      <div className="overlay">
        <div className="header-content">
            <Navbar />

            <div className="headerArea">
              <div className="header-left">
              <div className="strokeArea">  
                <div className="centered">
                <span className="stroke-text">5+</span> 
                <span className="headingHelpingText">Years helping <br /> Patients</span>
                </div>
              </div>

              <div className="headerLeftTextArea">
                <span>comprehensive <br/> Nephrology services <br /> tailored to your <br /> Needs.</span>
                <button className='headerConsultBtn'>View Our Services <i className="bx bx-caret-right"></i></button>
              </div>
            </div>


              <div className="header-right">
                <span className="headerHeading">Welcome to West Orange</span> <br/>
                <span className="headerHeadingSecondary">Nephrology Clinic</span> <br/>
                <p className="headerText">At West Orange Nephrology Clinic, we prioritize your kidney health. Our team of experienced
                  nephrologists is here to provide personalized care and support at every step of your journey to wellness. 
                </p>
                <button className='headerConsultBtn'>Consult Now <i className="bx bx-caret-right"></i></button>
              </div>
            </div>

            
        </div>
      </div>
    </header>
  )
}

export default HeaderSlider