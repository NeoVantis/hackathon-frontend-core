import api from './axios';
import axios from 'axios';
import type {
  SignupStep1Data,
  SignupStep2Data,
  LoginResponse,
  SignupStep1Response,
  SignupStep2Response,
  RequestEmailVerificationData,
  RequestEmailVerificationResponse,
  VerifyEmailData,
  ForgotPasswordData,
  ResetPasswordData,
  User
} from '../types/auth';

// Create separate API instance for user status endpoint
const userApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL.replace('/auth', ''),
});

userApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const signupStep1 = async (data: SignupStep1Data): Promise<SignupStep1Response> => {
  try {
    const response = await api.post('/signup/step1', data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(Array.isArray(err.response.data.message) ? err.response.data.message.join(', ') : err.response.data.message);
    }
    throw err;
  }
};

export const signupStep2 = async (userId: string, data: SignupStep2Data): Promise<SignupStep2Response> => {
  try {
    const response = await api.post(`/signup/step2/${userId}`, data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(Array.isArray(err.response.data.message) ? err.response.data.message.join(', ') : err.response.data.message);
    }
    throw err;
  }
};

export const signin = async (data: { identifier: string; password: string }): Promise<LoginResponse> => {
  try {
    const response = await api.post('/signin', data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
};

export const requestEmailVerification = async (data: RequestEmailVerificationData): Promise<RequestEmailVerificationResponse> => {
  try {
    const response = await api.post('/request-email-verification', data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
};

export const verifyEmail = async (data: VerifyEmailData): Promise<LoginResponse> => {
  try {
    const response = await api.post('/verify-email', data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
};

export const forgotPassword = async (data: ForgotPasswordData): Promise<RequestEmailVerificationResponse> => {
  try {
    const response = await api.post('/forgot-password', data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
};

export const resetPassword = async (data: ResetPasswordData): Promise<{ message: string }> => {
  try {
    const response = await api.post('/reset-password', data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(Array.isArray(err.response.data.message) ? err.response.data.message.join(', ') : err.response.data.message);
    }
    throw err;
  }
};

export const getProfile = async (): Promise<User> => {
  try {
    const response = await api.get('/me');
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
};

export const getUserStatus = async (userId: string): Promise<User | { user: User }> => {
  try {
    const response = await userApi.get(`/users/${userId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.data?.message) {
      throw new Error(err.response.data.message);
    }
    throw err;
  }
};