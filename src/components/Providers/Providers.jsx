import './Providers.css';
import ProfileImg from '../../../src/assets/P1.jpg';
import ProfileImg1 from '../../../src/assets/P2.jpg';
import ProfileImg2 from '../../../src/assets/P3.jpg';
import Slider from "react-slick";

const Providers = () => {

        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 5000,
            cssEase: "linear"
        };
      
  return (
    <div className='providersWrapper'>
        <div className="text-center">   
            Our Providers <br/>
            <span className="mainHeading"> Meet Our Providers</span>
        </div>
        <br/><br/>

        <div className="slider-container">
        <Slider {...settings}>
        <div>
          <div className="profile-container">
            <img className="profile-image" src={ProfileImg} alt="Profile Image" />
                <div className="profile-details">
                    <h2 className="profile-name">Daphney Zidor</h2>
                    <p className="profile-description">ARNP</p>
                </div>
            </div>
        </div>

        <div>
          <div className="profile-container">
            <img className="profile-image" src={ProfileImg1} alt="Profile Image" />
                <div className="profile-details">
                    <h2 className="profile-name">Dr. Muhammad Malik</h2>
                    <p className="profile-description">Nephrologist</p>
                </div>
            </div>
        </div>

        <div>
          <div className="profile-container">
            <img className="profile-image" src={ProfileImg2} alt="Profile Image" />
                <div className="profile-details">
                    <h2 className="profile-name">Patricia Miller</h2>
                    <p className="profile-description">ARNP</p>
                </div>
            </div>
        </div>

      </Slider>
    </div>


        {/* <div className="profile-container">
        <img className="profile-image" src={ProfileImg} alt="Profile Image" />
        <div className="profile-details">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-description">Frontend Developer</p>
        </div>
        </div> */}

    </div>
  )
}

export default Providers