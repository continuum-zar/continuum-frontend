import { useState, useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

const MOCK_TOKEN = 'local-auth-token';

function createMockUser(overrides: { email?: string; first_name?: string; last_name?: string } = {}) {
  return {
    id: 'local-user',
    email: overrides.email ?? 'user@example.com',
    first_name: overrides.first_name ?? 'User',
    last_name: overrides.last_name ?? '',
  };
}

export const useAuth = () => {
  const { user, setAuth, clearAuth } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (email: string, _password: string) => {
    setLoading(true);
    setError(null);
    const mockUser = createMockUser({ email });
    setAuth(mockUser, MOCK_TOKEN);
    localStorage.setItem('access_token', MOCK_TOKEN);
    setLoading(false);
  };

  const register = async (
    email: string,
    _password: string,
    first_name: string,
    last_name: string
  ) => {
    setLoading(true);
    setError(null);
    const mockUser = createMockUser({ email, first_name, last_name });
    setAuth(mockUser, MOCK_TOKEN);
    localStorage.setItem('access_token', MOCK_TOKEN);
    setLoading(false);
  };

  const logout = () => {
    clearAuth();
  };

  const forgotPassword = async (_email: string) => {
    setLoading(true);
    setError(null);
    setLoading(false);
    return { message: 'Check your email for reset instructions.' };
  };

  const resetPassword = async (_token: string, _newPassword: string) => {
    setLoading(true);
    setError(null);
    setLoading(false);
    return { message: 'Password has been reset.' };
  };

  return {
    user,
    loading,
    error,
    setError,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    isAuthenticated: !!user,
  };
};
