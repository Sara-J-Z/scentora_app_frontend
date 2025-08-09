function CategoryGrid() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div className="bg-white shadow-md p-6 rounded">Makeup</div>
        <div className="bg-white shadow-md p-6 rounded">Perfume</div>
      </div>
    </section>
  );
}

export default CategoryGrid;
