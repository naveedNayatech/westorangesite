import './Services.css';
import Phonendoscope from '../../../src/assets/phonendoscope.svg';
import Treatment from '../../../src/assets/Treatment.svg';
import Kidney from '../../../src/assets/Kidney.svg';
import Epilepsy1 from '../../../src/assets/Epilepsy-1.svg';
import DietChart from '../../../src/assets/DietChart.svg';

const Services = () => {
  return (
    <div className="serviceWrapper">
        <ul> 
            <li>
                our nephrology services
            </li>
        </ul>

        <span className="mainHeading"> comprehensive nephrology services tailored to your needs</span>
            
        <div className="container">
            <div className="column card1">
                <img src={Phonendoscope} width="70" height="70" alt="img"/> 
                <span className="servicesCardHeading">Diagnostic Services</span>
                <p className="servicesCardText">State-of-the-art diagnostic tools for accurate assessments</p>
            </div>

            <div className="column card2">
                <img src={Treatment} width="70" height="70" alt="img"/> 
                <span className="servicesCardHeading">Diagnostic Services</span>
                <p className="servicesCardText">State-of-the-art diagnostic tools for accurate assessments</p>
            </div>

            <div className="column card3">
                <img src={Kidney} width="70" height="70" alt="img" /> 
                <span className="servicesCardHeading">Dialysis Services</span>
                <p className="servicesCardText">State-of-the-art diagnostic tools for accurate assessments</p>
            </div>


            <div className="column card2">
                <img src={Epilepsy1} width="70" height="70" alt="img" /> 
                <span className="servicesCardHeading">Patient Education</span>
                <p className="servicesCardText">State-of-the-art diagnostic tools for accurate assessments</p>
            </div>

            <div className="column card3">
                <img src={Epilepsy1} width="70" height="70" alt="img" /> 
                <span className="servicesCardHeading">Patient Education</span>
                <p className="servicesCardText">State-of-the-art diagnostic tools for accurate assessments</p>
            </div>

            <div className="column card1">
                <img src={DietChart} width="70" height="70" alt="img" /> 
                <span className="servicesCardHeading">Nutritional Guidance</span>
                <p className="servicesCardText">State-of-the-art diagnostic tools for accurate assessments</p>
            </div>
        </div>

        </div>    
  )
}

export default Services