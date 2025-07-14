import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeaturesCards from "./sections/FeatureCards"
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import ContactSection from "./sections/ContactSection"
import Footer from "./sections/Footer"
const app = () => {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <LogoSection/>
      <FeaturesCards/>
      <ExperienceSection/>
      <TechStack/>
      <Testimonials/>
      <ContactSection />
      <Footer/>
    </>
  );
};

export default app;
