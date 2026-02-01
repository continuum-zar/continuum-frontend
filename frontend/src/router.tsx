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
import FunctionSelection from './pages/Onboarding/FunctionSelection';
import UseCaseSelection from './pages/Onboarding/UseCaseSelection';
import FeatureInterestSelection from './pages/Onboarding/FeatureInterestSelection';
import MindSelection from './pages/Onboarding/MindSelection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Landing
      { index: true, element: <Landing /> },

      // Auth (register/sign-up not wrapped in PublicRoute so "Sign up" from landing always shows sign-up flow)
      { path: 'login', element: <PublicRoute><Login /></PublicRoute> },
      { path: 'register', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'loading', element: <Loading /> },
      { path: 'email-verification', element: <EmailVerification /> },
      { path: 'sign-up', element: <SignUp /> },

      // Dashboard
      { path: 'dashboard', element: <ProtectedRoute><Overview /></ProtectedRoute> },
      { path: 'dashboard/team', element: <ProtectedRoute><Team /></ProtectedRoute> },

      // Projects
      { path: 'projects', element: <ProtectedRoute><Projects /></ProtectedRoute> },
      { path: 'projects/:projectId/settings', element: <ProtectedRoute><ProjectSettings /></ProtectedRoute> },

      // Onboarding
      { path: 'onboarding/usage', element: <Usage /> },
      { path: 'onboarding/features', element: <FeatureInterestSelection /> },
      { path: 'onboarding/mind', element: <MindSelection /> },
      { path: 'onboarding/collaboration', element: <Collaboration /> },
      { path: 'onboarding/role', element: <RoleSelection /> },
      { path: 'onboarding/function', element: <FunctionSelection /> },
      { path: 'onboarding/use-case', element: <UseCaseSelection /> },
    ],
  },
]);

export default router;
