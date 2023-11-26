//const API_ROOT = 'http://localhost:8399';
const API_ROOT = 'https://elder-health-care.onrender.com'

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,


};

export const LOCAL_STORAGE_TOKEN_KEY = '__my_elderHealth_Tokens__';
