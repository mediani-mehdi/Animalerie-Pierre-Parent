import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Services />
      <Reviews />
      <About />
      <Contact />
    </>
  );
}
