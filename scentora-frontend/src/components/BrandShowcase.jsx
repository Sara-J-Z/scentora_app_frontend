function BrandShowcase() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Featured Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-gray-100 py-6 px-4 rounded">NARS</div>
        <div className="bg-gray-100 py-6 px-4 rounded">Dior</div>
        <div className="bg-gray-100 py-6 px-4 rounded">Gucci</div>
        <div className="bg-gray-100 py-6 px-4 rounded">Chanel</div>
      </div>
    </section>
  );
}

export default BrandShowcase;
