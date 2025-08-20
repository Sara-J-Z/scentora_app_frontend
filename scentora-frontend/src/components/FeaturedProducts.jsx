function FeaturedProducts() {
  return (
    <section className="py-12 text-center">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-4 shadow rounded">Product 1</div>
        <div className="bg-white p-4 shadow rounded">Product 2</div>
        <div className="bg-white p-4 shadow rounded">Product 3</div>
        <div className="bg-white p-4 shadow rounded">Product 4</div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
