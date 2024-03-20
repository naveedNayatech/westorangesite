import './FollowUs.css';
const FollowUs = () => {

    return (
    <div className="followUsWrapper">
        <div className="text-center">   
            Follow Us <br/>
            <span className="mainHeading"> Follow Us Day to Day</span>
        </div>

        <div className="links">
            
            
                <div className="link">
                    <a href='https://www.facebook.com/WOwellnesscare'>
                        <i className='bx bxl-facebook' style={{color: '#316FF6'}}></i>
                    </a>
                </div>

                <div className="link">
                    <a href='https://www.twitter.com/wo_wellnesscare'>
                        <i className='bx bxl-twitter' style={{color: '#08A0E9'}}></i>
                    </a>
                </div>

            <div className="link">
                <a href='https://www.instagram.com/wo_wellnesscare'>
                    <i className='bx bxl-instagram' style={{color: '#DD2A7B'}}></i>
                </a>
            </div>


            <div className="link">
                <a href="https://www.linkedin.com/company/west-orange-nephrology">
                    <i className='bx bxl-linkedin'  style={{color: '#0077B5'}}></i>
                </a>
            </div>

            <div className="link">
                <a href="https://www.tiktok.com/@bawosi">
                    <i className='bx bxl-tiktok' style={{color: '#000'}}></i>
                </a>
            </div>
        </div>
    </div>
  )
}

export default FollowUs