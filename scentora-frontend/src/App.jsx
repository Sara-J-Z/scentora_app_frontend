import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import BrandPage from "./pages/BrandPage";
import UserList from './components/UserList';

function App() {
return (
<Router>
<div className="flex flex-col min-h-screen">
<Header />
<main className="flex-grow">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/products" element={<AllProductsPage />} />
<Route path="/products/:id" element={<ProductDetails />} />
<Route path="/brands" element={<BrandPage />} />
</Routes>
</main>
<Footer />
</div>
</Router>
);
}

export default App;