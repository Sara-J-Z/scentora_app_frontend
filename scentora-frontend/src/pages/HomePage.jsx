import HeroSection from "../components/HeroSection";
import BrandShowcase from "../components/BrandShowcase";
import CategoryGrid from "../components/CategoryGrid";
import FeaturedProducts from "../components/FeaturedProducts";
import NewsletterSignup from "../components/NewsletterSignup";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <BrandShowcase />
      <CategoryGrid />
      <FeaturedProducts />
      <NewsletterSignup />
    </div>
  );
}

export default HomePage;
