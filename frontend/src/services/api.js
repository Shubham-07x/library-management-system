import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Set up axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const userLogin = async (credentials) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};

export const adminLogin = async (credentials) => {
  const response = await api.post("/admin-auth/login", credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// User API
export const getUserProfile = async () => {
  const response = await api.get("/user/profile");
  return response.data;
};

export const updateUserProfile = async (profileData) => {
  const response = await api.put("/user/profile", profileData);
  return response.data;
};

// Admin API
export const addBook = async (bookData) => {
  const response = await api.post("/admin/addBook", bookData);
  return response.data;
};

export const updateBook = async (bookId, bookData) => {
  const response = await api.put(`/admin/updateBook/${bookId}`, bookData);
  return response.data;
};

export const deleteBook = async (bookId) => {
  const response = await api.delete(`/admin/deleteBook/${bookId}`);
  return response.data;
};

export const addMembership = async (membershipData) => {
  const response = await api.post("/admin/addMembership", membershipData);
  return response.data;
};

export const updateMembership = async (membershipId, membershipData) => {
  const response = await api.put(
    `/admin/updateMembership/${membershipId}`,
    membershipData
  );
  return response.data;
};

export const deleteMembership = async (membershipId) => {
  const response = await api.delete(`/admin/deleteMembership/${membershipId}`);
  return response.data;
};

export const addUser = async (userData) => {
  const response = await api.post("/admin/addUser", userData);
  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await api.put(`/admin/updateUser/${userId}`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/admin/deleteUser/${userId}`);
  return response.data;
};

// Transactions API
export const issueBook = async (transactionData) => {
  const response = await api.post("/transactions/issue", transactionData);
  return response.data;
};

export const returnBook = async (transactionData) => {
  const response = await api.post("/transactions/return", transactionData);
  return response.data;
};

export const payFine = async (fineData) => {
  const response = await api.post("/transactions/payFine", fineData);
  return response.data;
};

// Reports API
export const getReports = async () => {
  const response = await api.get("/reports");
  return response.data;
};

export const getMasterListOfBooks = async () => {
  const response = await api.get("/reports/masterListOfBooks");
  return response.data;
};

export const getMasterListOfMemberships = async () => {
  const response = await api.get("/reports/masterListOfMemberships");
  return response.data;
};

export const getActiveIssues = async () => {
  const response = await api.get("/reports/activeIssues");
  return response.data;
};

export const getOverdueReturns = async () => {
  const response = await api.get("/reports/overdueReturns");
  return response.data;
};

export const getIssueRequests = async () => {
  const response = await api.get("/reports/issueRequests");
  return response.data;
};

// Product Details API
export const getProductDetails = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const getProductDetailsById = async (productId) => {
  const response = await api.get(`/products/${productId}`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post("/products", productData);
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await api.put(`/products/${productId}`, productData);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
};

export default api;
