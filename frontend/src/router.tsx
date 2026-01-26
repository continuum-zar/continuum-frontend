import { createBrowserRouter } from 'react-router-dom';
import App from './App';

// Auth pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import Loading from './pages/Auth/Loading';
import EmailVerification from './pages/Auth/EmailVerification';
import SignUp from './pages/Auth/SignUp';

// Route components
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

// Main pages
import Landing from './pages/Landing';
import Overview from './pages/Dashboard/Overview';
import Team from './pages/Dashboard/Team';

// Project pages
import Projects from './pages/Projects';
import ProjectSettings from './pages/Projects/ProjectSettings';

// Onboarding pages
import Usage from './pages/Onboarding/Usage';
import Collaboration from './pages/Onboarding/Collaboration';
import RoleSelection from './pages/Onboarding/RoleSelection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Landing
      { index: true, element: <Landing /> },

      // Auth
      { path: 'login', element: <PublicRoute><Login /></PublicRoute> },
      { path: 'register', element: <PublicRoute><Register /></PublicRoute> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'loading', element: <Loading /> },
      { path: 'email-verification', element: <EmailVerification /> },
      { path: 'sign-up', element: <PublicRoute><SignUp /></PublicRoute> },

      // Dashboard
      { path: 'dashboard', element: <ProtectedRoute><Overview /></ProtectedRoute> },
      { path: 'dashboard/team', element: <ProtectedRoute><Team /></ProtectedRoute> },

      // Projects
      { path: 'projects', element: <ProtectedRoute><Projects /></ProtectedRoute> },
      { path: 'projects/:projectId/settings', element: <ProtectedRoute><ProjectSettings /></ProtectedRoute> },

      // Onboarding
      { path: 'onboarding/usage', element: <Usage /> },
      { path: 'onboarding/collaboration', element: <Collaboration /> },
      { path: 'onboarding/role', element: <RoleSelection /> },
    ],
  },
]);

export default router;
