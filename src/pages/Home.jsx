import About from "../components/Homes/About";
import Choose from "../components/Homes/Choose";
import Contact from "../components/Homes/Contact";
import Hero from "../components/Homes/Hero";
import OurFarm from "../components/Homes/OurFarm";
import Products from "../components/Homes/Products";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Choose />
      <OurFarm />
      <Contact />
    </main>
  );
};

export default Home;
