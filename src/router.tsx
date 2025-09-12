import { useRoutes, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import VerifyEmail from './components/VerifyEmail'
import VerifiedEmail from './components/VerifiedEmail'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/verified-email', element: <VerifiedEmail /> },
  { path: '/home', element: <Home /> },
  { path: '*', element: <div className="p-8 text-center text-white">404 Not Found</div> }
]

export function AppRoutes() {
  return useRoutes(routes)
}
