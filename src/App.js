import './App.css';
import About from './components/About/About';
import Consult from './components/Consult/Consult';
import ContactUs from './components/ContactUs/ContactUs';
import Directors from './components/Directors/Directors';
import FollowUs from './components/FollowUs/FollowUs';
import Footer from './components/Footer/Footer';
import FormSection from './components/FormSection/FormSection';
import Header from './components/Header/Header';
import Providers from './components/Providers/Providers';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Video from './components/Video/Video';


function App() {
  return (
    <div className="App">
          <Header />
          <About />
          <Services />
          <Consult />
          <FormSection />
          <Testimonials />
          <Providers />
          <Directors />
          <FollowUs />
          <ContactUs />
          <Footer />
    </div>
  );
}

export default App;
