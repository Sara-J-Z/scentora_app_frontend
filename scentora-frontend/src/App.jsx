import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignIn from "./pages/SignInPage";
import Profile from "./pages/ProfilePage";
import AllProductsPage from "./pages/AllProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import BrandPage from "./pages/BrandPage";
import BrandDetail from "./pages/BrandDetail";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem("token"); 
  };

  return (
    <Router>
      <div className="app-container">
        <Header user={user} handleLogOut={handleLogOut} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SignIn setUser={setUser} />} />
            <Route path="/profile" element={<Profile />} />
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
