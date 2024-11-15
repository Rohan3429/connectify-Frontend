// // frontend/src/services/api.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
  
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const registerUser = (userData) => api.post('/auth/register', userData);
// export const loginUser = (loginData) => api.post('/auth/login', loginData);

// export default api;


const API_URL = 'https://connectify-backend-bj3b.onrender.com';


export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// export const loginUser = async (userData) => {
//   const response = await fetch(`${API_URL}/auth/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
//   console.log("response: ",response);
export const loginUser = async (userData) => {
  console.log('Attempting login with:', userData);
  
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userData.email,
      password: userData.password
    })
  });

  const data = await response.json();
  console.log('Login response:', data);

  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  return data;
};export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response;
};

// API service (frontend/src/services/resumeService.js)
export const createResume = async (resumeData) => {
  const response = await fetch(`${API_URL}/resumes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(resumeData)
  });
  return response.json();
};

export const getUserResumes = async () => {
  const response = await fetch(`${API_URL}/resumes`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.json();
};

export const getResumeById = async (id) => {
  const response = await fetch(`${API_URL}/resumes/${id}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.json();
};

export const updateResume = async (id, resumeData) => {
  const response = await fetch(`${API_URL}/resumes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(resumeData)
  });
  return response.json();
};

export const deleteResume = async (id) => {
  const response = await fetch(`${API_URL}/resumes/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.json();
};

export const fetchMessages = async () => {
  const response = await fetch(`${API_URL}/chat`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.json();
};

