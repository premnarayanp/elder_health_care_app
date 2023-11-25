const API_ROOT = 'http://localhost:8398';

export const API_URLS = {
  //API URL for User
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,


};

export const LOCAL_STORAGE_TOKEN_KEY = '__myTokens_token__';
