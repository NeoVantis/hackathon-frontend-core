import { AppRoutes } from './router'
import { AuthProvider } from './context/AuthContext'
import { usePendingRegistration } from './hooks/usePendingRegistration'

export default function App() {
  usePendingRegistration();

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}