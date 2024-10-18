import Available from "../_components/Available";
// import Footer from "../_components/Footer";
import Hero from "../_components/Hero";
import Mode from "../_components/Mode";
// import Navbar from "../_components/Navbar";
import Services from "../_components/Services";
import WhyChooseUs from "../_components/WhyChooseUs";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Services />
      <WhyChooseUs />
      <Available />
      <Mode />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
