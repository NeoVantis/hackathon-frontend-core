import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from './router'
import { AuthProvider } from './context/AuthContext'
import { storage } from './utils/storage';
import { getUserStatus } from './api/auth';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkPendingRegistration = async () => {
      const pendingUserId = storage.getPendingUserId();
      
      if (!pendingUserId) {
        return;
      }

      try {
        const userStatus = await getUserStatus(pendingUserId);
        
        // Handle both direct user object and nested user object responses
        const user = 'user' in userStatus ? userStatus.user : userStatus;

        if (user.stepOneComplete && !user.stepTwoComplete) {
          // Redirect to Step 2
          navigate(`/step-two/${pendingUserId}`, { replace: true });
        } else if (user.stepTwoComplete && !user.isVerified) {
          // Redirect to Email Verification
          navigate('/verify-email', { state: { email: user.email }, replace: true });
        } else if (user.isVerified) {
          // Registration complete, clear storage
          storage.clearRegistrationData();
          navigate('/home', { replace: true });
        }
      } catch (error) {
        // User not found or other error, clear storage
        console.error('Error checking user status:', error);
        storage.clearRegistrationData();
      }
    };

    checkPendingRegistration();
  }, [navigate]);  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}