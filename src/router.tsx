import { useRoutes, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import VerifyEmail from './components/VerifyEmail'
import VerifiedEmail from './components/VerifiedEmail'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import ForgotPassword from './components/ForgotPassword'
import StepOne from './signUp/StepOne'
import StepTwo from './signUp/StepTwo'
import WithAuth from './utils/withAuth'

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/step-one', element: <StepOne /> },
  { path: '/step-two/:userId', element: <StepTwo /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/verified-email', element: <VerifiedEmail /> },
  { path: '/home', element: <WithAuth><Home /></WithAuth> },
  { path: '*', element: <div className="p-8 text-center text-white">404 Not Found</div> }
]

export function AppRoutes() {
  return useRoutes(routes)
}
