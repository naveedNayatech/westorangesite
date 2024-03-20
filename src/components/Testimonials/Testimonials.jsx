import './Testimonials.css';
import Slider from "react-slick";
import User from '../../../src/assets/user.jpeg';
import User2 from '../../../src/assets/user2.jpeg';

const Testimonials = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
    <div className="TestimonialsWrapper">
        <div className="left-t">
            <ul><li>Testimonials</li></ul>
            <span className="testimonialsText">Words from Our <br /> &nbsp;&nbsp;Grateful Patients</span>
            
            <i className='bx bxs-quote-left'></i>
        </div>

        <div className="right-t">
            <Slider {...settings}>
            <div>
                <span className="testimonialsSliderText">I can't thank West Orange Nephrology Clinic enough for the exceptional care I received. The doctors and the
                    staff are not only highly skilled but also compassionate and undertanding. They made me feel like more than just a Patient
                    , they made me feel like family.
                </span>

                <div className="personDetails">
                    <div>
                        <img src={User} width="80" height="80" className="avatar" />
                    </div>

                    <div className="row-display-column">
                        <span className="personName">Mr. Adie</span>
                        
                        <div className="starsRow">
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                        </div>
                    </div>

                </div>
            </div>
            
            <div>
                <span className="testimonialsSliderText">
                    Choosing West Orange Nephrology Clinic was the best decision I made for my kidney health. The team's dedication and 
                    expertise gave me the confidence to face my health challenges head-on. I am truly grateful for their support.
                </span>

                <div className="personDetails">
                    <div>
                        <img src={User2} width="80" height="80" className="avatar" />
                    </div>

                    <div className="row-display-column">
                        <span className="personName">Mr. Kareem Lawson</span>
                        
                        <div className="starsRow">
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bxs-star checked"></span>
                            <span class="bx bx-star checked"></span>
                        </div>
                    </div>

                </div>
            </div>
            
            </Slider>
        </div>
    </div>
  )
}

export default Testimonials