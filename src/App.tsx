import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import "./App.css";
import { Technologies } from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Technologies />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
