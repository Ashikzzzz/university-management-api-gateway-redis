import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HTTPService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return error;
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const AuthService = HTTPService(config.auth_url);
const CoreService = HTTPService(config.core_url);

export { HTTPService, AuthService, CoreService };
