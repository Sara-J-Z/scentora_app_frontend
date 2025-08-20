function HeroSection() {
  return (
    <section className="bg-pink-100 text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Signature Scent</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Explore premium makeup and perfumes from the best brands.
        </p>
        <a
          href="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
