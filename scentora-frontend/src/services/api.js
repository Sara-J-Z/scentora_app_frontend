import axios from 'axios';

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

const ProtectedClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

ProtectedClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getCategoryWithSubcategories= async (categoryId) => {
  try {
    const response = await API.get(`categories/${categoryId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

export const updatepassword = async (passwords) => {
  try {
    const response = await ProtectedClient.post('/update-password/', passwords);
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await API.get(`products/?category=${categoryId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw error;
  }
};

export { API, ProtectedClient }; 
