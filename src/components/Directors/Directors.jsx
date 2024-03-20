import './Directors.css';
import ProfileImg from '../../../src/assets/D1.jpg';
import ProfileImg1 from '../../../src/assets/D2.jpg';
import Slider from "react-slick";

const Directors = () => {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,
            cssEase: "linear"
        };
      
  return (
    <div className='directorsWrapper'>
        <div className="text-center">   
            Our Directors <br/>
            <span className="mainHeading"> Meet Our Directors</span>
        </div>
        <br/><br/>

        <div className="slider-container">
        <Slider {...settings}>
        <div>
          <div className="profile-container">
            <img className="profile-image" src={ProfileImg} alt="Profile Image" />
                <div className="profile-details">
                    <h2 className="profile-name">Claire Brown</h2>
                    <p className="profile-description">Health & Wellness Coach</p>
                </div>
            </div>
        </div>

        <div>
          <div className="profile-container">
            <img className="profile-image" src={ProfileImg1} alt="Profile Image" />
                <div className="profile-details">
                    <h2 className="profile-name">Alicia Ayers</h2>
                    <p className="profile-description">Phlebotomy Clinic Supervisor</p>
                </div>
            </div>
        </div>
        

      </Slider>
    </div>

    </div>
  )
}

export default Directors