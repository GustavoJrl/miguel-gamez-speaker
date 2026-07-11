import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhyMiguel from "./sections/WhyMiguel";
import Problems from "./sections/Problems";
import Methodology from "./sections/Methodology";
import Topics from "./sections/Topics";
import Stats from "./sections/Stats";
import VideoSection from "./sections/VideoSection";
import Testimonials from "./sections/Testimonials";
import Gallery from "./sections/Gallery";
import Books from "./sections/Books";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <WhyMiguel />
        </Reveal>

        <Reveal>
          <Problems />
        </Reveal>

        <Reveal>
          <Methodology />
        </Reveal>

        <Reveal>
          <Topics />
        </Reveal>

        <Reveal>
          <Stats />
        </Reveal>

        <Reveal>
          <VideoSection />
        </Reveal>

        <Reveal>
          <Testimonials />
        </Reveal>

        <Reveal>
          <Gallery />
        </Reveal>

        <Reveal>
          <Books />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}