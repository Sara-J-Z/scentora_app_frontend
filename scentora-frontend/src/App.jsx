import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import BrandPage from "./pages/BrandPage";
import BrandDetail from "./pages/BrandDetail";
import "./App.css";
import UserList from './components/UserList';

function App() {
return (
<Router>
<div className="app-container">
<Header />
<main className="main-content">
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/products" element={<AllProductsPage />} />
<Route path="/products/:id" element={<ProductDetails />} />
<Route path="/brands" element={<BrandPage />} />
<Route path="/brands/:id" element={<BrandDetail />} />
</Routes>
</main>
<Footer />
</div>
</Router>
);
}

export default App;