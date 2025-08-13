import axios from 'axios';

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const getCategoryWithSubcategories= async (categoryId) => {
  try {
    const response = await API.get(`categories/${categoryId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};
export default API;
