import { useState, useEffect } from "react";
import { ProfileData } from "./services/profile"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignIn from "./pages/SignInPage";
import Profile from "./pages/ProfilePage";
import PerfumeCategory from './pages/PerfumeCategory.jsx';
import MakeupCategory from './pages/MakeupCategory.jsx';
import AllProductsPage from "./pages/AllProductsPage";
import { ProtectedClient } from "./services/api";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import BrandPage from "./pages/BrandPage";
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage.jsx";
import AboutUsPage from './pages/AboutUsPage.jsx';
import Nav from "./components/Nav";
import "./App.css"
 
function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async (token) => {
    console.log('Token received by handleLogin:', token);

    localStorage.setItem('token', token);

    ProtectedClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    try {
      const userData = await ProfileData();
      console.log("User data after login:", userData);
      setUser(userData);
    } catch (error) {
      console.error("Failed to fetch user profile after login:", error);
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

    useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchUserProfileOnLoad = async () => {
        try {
          const userData = await ProfileData();
          setUser(userData);
        } catch (error) {
          console.error("Failed to fetch user profile on load:", error);
          handleLogout()
        }
      };
      fetchUserProfileOnLoad();
    }
  }, []); 


  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Nav user={user} handleLogout={handleLogout} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/signin" element={<SignIn handleLogin={handleLogin} />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/perfume" element={<PerfumeCategory />} />
            <Route path="/makeup" element={<MakeupCategory />} />
             <Route path="/products/category/:categoryId" element={<ProductsByCategoryPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/brands" element={<BrandPage />} />
            <Route path="/about" element={<AboutUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
