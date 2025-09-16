export interface User {
  id: string;
  username: string;
  email: string;
  stepOneComplete?: boolean;
  fullName?: string;
  phoneNumber?: string;
  college?: string;
  address?: string;
  stepTwoComplete?: boolean;
  isVerified?: boolean;
  emailVerifiedAt?: string;
  isActive?: boolean;
  passwordResetCount?: number;
  lastPasswordReset?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface SignupStep1Data {
  username: string;
  email: string;
  password: string;
}

export interface SignupStep2Data {
  fullName: string;
  phoneNumber: string;
  college: string;
  address: string;
}

export interface SignupStep1Response {
  userId: string;
  message: string;
}

export interface SignupStep2Response {
  access_token: string;
  user: User;
  otpId?: string;
}

export interface RequestEmailVerificationData {
  email: string;
}

export interface RequestEmailVerificationResponse {
  otpId: string;
}

export interface VerifyEmailData {
  otpId: string;
  code: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface ResetPasswordData {
  otpId: string;
  code: string;
  newPassword: string;
}